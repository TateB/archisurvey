const architectDefs = {
  "Name": { 
    name: "name",
    type: "string",
  },
  "Company": { 
    name: "companyName",
    type: "string",
  },
  "Email Address": { 
    name: "email",
    type: "string",
  },
  "Phone Number": { 
    name: "phoneNumber",
    type: "string",
  },
  "What is the project address?": { 
    name: "projectAddress",
    type: "string",
  },
  "Which of these is the closest description of your project?": { 
    name: "projectDescription",
    type: "multichoice",
    options: ["New House", "Addition to an Existing House", "Renovation"]
  },
  "How many storeys does your project have?": { 
    name: "projectStoreys",
    type: "int",
  },
  "Is there a basement?": { 
    name: "isBasement",
    type: "bool",
  },
  "What is the building size?": { 
    name: "projectSize",
    type: "float",
  },
  "What operational energy standard did your building achieve?": { 
    name: "projectEnergyStandard",
    type: "float",
  },
  "If NatHERS or BASIX, what score was achieved?": { 
    name: "projectOtherEnergyScore",
    type: "string",
  },
  "What type of building contract did you use?": { 
    name: "contractType",
    type: "multichoice",
    options: ["ABIC MW", "ABIC SW", "HIA", "Master Builders", "Owner Builder"]
  },
  "Was the building contract administered by the architect?": { 
    name: "architectAdministeredContract",
    type: "bool",
  },
}

const clientDefs = {
  "What is the project address?": { 
    name: "projectAddress",
    type: "string",
  },
  "How many occupants are there in the house?": { 
    name: "houseOccupancy",
    type: "int",
  },
  "When was the project completed?": { 
    name: "projectCompletionDate",
    type: "date",
  },
  "How long did the project take?": { 
    name: "projectLength",
    type: "multichoice",
    options: ["0 - 12 Months", "13 - 24 Months", "25 - 36 Months", "37+ Months"]
  },
  "What was the cost of the project?": { 
    name: "projectCost",
    type: "float",
  },
  "Do you think additional investment in Environmentally Sustainable Design (ESD) represents good value?": { 
    name: "esdFeedback",
    type: "multichoice",
    options: ["Yes", "No", "Maybe"]
  },
  "In a few words, please explain your response to the question above (ESD)": { 
    name: "esdFeedbackExt",
    type: "string",
  },
  "Are your electricity/gas/water bills in line with your expectations?": { 
    name: "billsExpectations",
    type: "int",
  },
  "Did the building construction process proceed as expected?": { 
    name: "constructionExpecations",
    type: "int",
  },
  "What type of building contract did you use?": { 
    name: "contractType",
    type: "multichoice",
    options: ["ABIC MW", "ABIC SW", "HIA", "Master Builders", "Owner Builder"]
  },
  "Was the building contract administered by the architect?": { 
    name: "architectAdministeredContract",
    type: "bool",
  },
  "Did the building contract work as intended?": { 
    name: "contractExpectations",
    type: "int",
  },
  "What were the issues with the building contract, if any?": { 
    name: "contractExpectationsExt",
    type: "string",
  },
  "What type of cooling does the building use?": { 
    name: "projectCoolingType",
    type: "multichoice",
    options: ["Reverse cycle air conditioner(s)", "Ducted cooling", "Evaporative cooling", "Ceiling fans", "No active cooling"]
  },
  "What type of heating system does the building use?": { 
    name: "projectHeatingType",
    type: "multichoice",
    options: ["Reverse Cycle Split System Air Conditioner(s)", "Air Sourced Heat Pump Hydronic Heating", "Gas Hydronic Heating", "Wood Fired Hydronic Heating", "Flued Gas Heater", "Unflued Gas Heater","Wood Burner", "Electric Panels", "None"]
  },
  "What type of hot water heating system was used?": { 
    name: "projectHotWaterType",
    options: ["Heat Pump", "Solar Hot Water Heater with Gas Boost", "Solar Hot Water Heater with Electric Boost", "Gas Instantaneous", "Electric Instantaneous", "Water Tank - Electric","Water Tank - Gas", "Wood Fire Wet Back"]
  },
  "Is the house connected to mains reticulated water?": { 
    name: "hasMainsWater",
    type: "bool",
  },
  "If a water tank was installed, what was the total rainwater collection capacity?": { 
    name: "waterTankCapacity",
    type: "int",
  },
  "If a water tank was installed and you are in a bush prone area, did you also require a CFA dedicated 10,000 litre tank?": { 
    name: "hasCfaTank",
    type: "bool",
  },
  "If yes, is this included in the total capacity noted above?": { 
    name: "cfaCapacityIncluded",
    type: "bool",
  },
  "Is the house connected to the power grid?": { 
    name: "hasPowerGridConnection",
    type: "bool",
  },
  "If a Photovoltaic (PV) system was installed, what was the capacity?": { 
    name: "pvSystemCapacity",
    type: "int",
  },
  "How satisfied are you with the following components of the project?": { 
    name: "projectSatisfaction",
    type: "multichoice-array",
    options: ["Very dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very satisfied"],
  },
  "How would you rate the experience of using a registered architect?": { 
    name: "regArchitectExperience",
    type: "int",
  },
  "Was your initial design brief achieved?": { 
    name: "designBriefAchieved",
    type: "bool",
  },
  "Would you recommend to others that they use a registered architect for their building project?": { 
    name: "wouldRecommend",
    type: "multichoice",
    options: ["Yes", "No", "Maybe"]
  },
  "In a few words, please explain your response to the question above (registered architect)": { 
    name: "wouldRecommendExt",
    type: "string",
  },
  "Given the outcome of the building, do you think using an architect represents value for money?": { 
    name: "regArchitectValue",
    type: "multichoice",
    options: ["Yes", "No", "Maybe"]
  },
  "In a few words, please explain your response to the question above (value for money)": { 
    name: "regArchitectValueExt",
    type: "string",
  },
  "Was the project budget met?": { 
    name: "projectBudgetMet",
    type: "bool",
  },
  "How many architects did you contact before engaging with the selected architect?": { 
    name: "archsContactedAmnt",
    type: "multichoice",
    options: ["0", "1", "2-5", "5+"]
  },
  "How did you discover your selected architect?": { 
    name: "discoveryMethod",
    type: "multichoice",
    options: ["Word of Mouth (Referral)", "Social Media", "Google Search", "Site Sign", "Print Media", "Network", "Unsure"]
  },
  "Before submitting the data, if you have any other additional comments about your architect you want to provide, please do so here": { 
    name: "commentsExt",
    type: "string",
  },
}