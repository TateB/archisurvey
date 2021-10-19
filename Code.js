function initialiseFirestore() {
  const props = PropertiesService.getUserProperties();
  const [email, key, projectId] = [props.getProperty('client_email'), props.getProperty('private_key'), props.getProperty('project_id')];
  const firestore = FirestoreApp.getFirestore(email, key, projectId);
  
  return firestore
}

function locGeocoder(addr) {
  Logger.log("Location is: " + addr)
  const geocodeResponse = Maps.newGeocoder().geocode(addr)
  try {
    const placeId = geocodeResponse.results[0].place_id
    const coords = geocodeResponse.results[0].geometry.location
    return [placeId, coords]
  } catch {
    return ["noloc"]
  }
}

function processForm(form, defs) {
  const entries = form.getResponses()
  const newEntry = entries[entries.length - 1]
  const entryItems = newEntry.getItemResponses()
  var formattedEntry = {}
  for (var i = 0; i < entryItems.length; i++) {
      var question = entryItems[i].getItem().getTitle()
      var answer = entryItems[i].getResponse()
      switch (defs[question].type) {
        case "int":
          answer = parseInt(answer)
          if (isNaN(answer)) continue
          break
        case "float":
          answer = parseFloat(answer)
          if (isNaN(answer)) continue
          break
        case "bool":
          answer = answer ? false : true
          break
        case "multichoice":
          const optionInx = defs[question].options.indexOf(answer)
          answer = optionInx === -1 ? answer : optionInx
          break
        case "multichoice-array":
          answer.forEach((val, inx) => {
            const indiInx = defs[question].options.indexOf(val)
            answer[inx] = indiInx === -1 ? answer[inx] : indiInx
          })
          break
        default:
          break
      }
      formattedEntry[defs[question].name] = answer
  }
  return formattedEntry
}

function architectSubmitTrigger(e) {
  const form = e.source
  const firestore = initialiseFirestore()
  const formattedEntry = processForm(form, architectDefs)
  const [placeId,coords] = locGeocoder(formattedEntry["projectAddress"])
  Logger.log(formattedEntry)

  if (placeId === "noloc") {
    return firestore.createDocument("errored/", { architect: formattedEntry, reason: "noloc" })
  } else {
    try {
      return firestore.createDocument("formdata/" + placeId, {architect: formattedEntry, coordinates: coords})
    } catch (err) {
      return firestore.createDocument("errored/", { architect: formattedEntry, coordinates: coords, reason: err })
    }
  }
}

function clientSubmitTrigger(e) {
  const form = e.source
  const firestore = initialiseFirestore()
  const formattedEntry = processForm(form, clientDefs)
  const [placeId] = locGeocoder(formattedEntry["projectAddress"])
  Logger.log(formattedEntry)

  if (placeId === "noloc") {
    return firestore.createDocument("errored/", { client: formattedEntry, reason: "noloc" })
  } else {
    try {
      firestore.getDocument("formdata/" + placeId)
      firestore.updateDocument("formdata/" + placeId, { client: formattedEntry }, true)
    } catch (err) {
      const errMsg = err.message.includes("not found") ? "nomatch" : err
      firestore.createDocument("errored/", { client : formattedEntry, reason: errMsg})
    }
  }
}

function updateTest() {
  const firestore = initialiseFirestore()
  try {
    firestore.getDocument("formdata/" + "test")
    // firestore.updateDocument("formdata/" + "test", { client: "" }, true)
  } catch (err) {
    const errMsg = err.message.includes("not found") ? "nomatch" : err
    firestore.createDocument("errored/", { client : "", reason: errMsg})
  }
}

function setFormIds() {
  const props = PropertiesService.getUserProperties()
  props.setProperties({
    "client": "INSERT_GOOGLE_FORM_ID_HERE",
    "architect": "INSERT_GOOGLE_FORM_ID_HERE"
  })
}

function createTrigger(type) {
  const props = PropertiesService.getUserProperties()
  const form = FormApp.openById(props.getProperty(type))
  ScriptApp.newTrigger(type + "SubmitTrigger")
    .forForm(form)
    .onFormSubmit()
    .create();
}

function createArchTrigger() {
  createTrigger("architect")
}

function createClientTrigger() {
  createTrigger("client")
}