export default function NeedsGroup(props) {
  const group = {
    "Healthcare and Human Services": {
      mostImportant: props.cb.mostImportantIssueHealthcareAndHumanServices,
      mostImportantOther: props.cb.mostImportantIssueHealthcareAndHumanServicesOther,
      explanation: props.cb.pleaseExplainYourSelectionForMostImportantIssueInHealthcareAndHumanServices,
      needs: [["Needs for Health Care and Facilities", props.cb.needsForHealthCareAndFacilities],
              ["Needs for Older NYs", props.cb.needsForOlderNewYorkers],
              ["Needs for Homeless", props.cb.needsForHomeless],
              ["Needs for Low Income NYs", props.cb.needsForLowIncomeNewYorkers]]
    },
    "Youth, Education and Child Welfare": {
      mostImportant: props.cb.mostImportantIssueYouthEducationAndChildWelfare,
      mostImportantOther: props.cb.mostImportantIssueYouthEducationAndChildWelfareOther,
      explanation: props.cb.pleaseExplainYourSelectionForMostImportantIssueInYouthEducationAndChildWelfareIssues,
      needs: [["Needs for Youth Education", props.cb.needsForYouthEducation],
              ["Needs for Youth and Child Welfare", props.cb.needsForYouthAndChildWelfare]]
    },
    "Public Safety and Emergency Services": {
      mostImportant: props.cb.mostImportantIssuePublicSafetyAndEmergencyServices,
      mostImportantOther: props.cb.mostImportantIssuePublicSafetyAndEmergencyServicesOther,
      explanation: props.cb.pleaseExplainYourSelectionForMostImportantPublicSafetyAndEmergencyServicesIssue,
      needs: [["Needs for Public Safety", props.cb.needsForPublicSafety],
              ["Needs for Emergency Services", props.cb.needsForEmergencyServices]]
    },
    "Core Infrastructure, City Services and Resiliency": {
      mostImportant: props.cb.mostImportantIssueCoreInfrastructureCityServicesAndResiliency,
      mostImportantOther: props.cb.mostImportantIssueCoreInfrastructureCityServicesAndResiliencyOther,
      explanation: props.cb.pleaseExplainYourSelectionForMostImportantCoreInfrastructureCityServicesAndResiliencyIssue,
      needs: [["Needs for Water, Sewers, and Environmental Protection", props.cb.needsForWaterSewersAndEnvironmentalProtection],
              ["Needs for Sanitation Services", props.cb.needsForSanitationServices]]
    },
    "Housing, Economic Development and Land Use": {
      mostImportant: props.cb.mostImportantIssueHousingEconomicDevelopmentAndLandUse,
      mostImportantOther: props.cb.mostImportantIssueHousingEconomicDevelopmentAndLandUseOther,
      explanation: props.cb.pleaseExplainYourSelectionForMostImportantHousingEconomicDevelopmentAndHousingIssue,
      needs: [["Needs for Land Use", props.cb.needsForLandUse],
              ["Needs for Housing", props.cb.needsForHousing],
              ["Needs for Economic Development", props.cb.needsForEconomicDevelopment]]
    },
    "Transportation and Mobility": {
      mostImportant: props.cb.mostImportantIssueTransportationAndMobility,
      mostImportantOther: props.cb.mostImportantIssueTransportationAndMobilityOther,
      explanation: props.cb.pleaseExplainYourSelectionForMostImportantTransportationAndMobilityIssue,
      needs: [["Needs for Traffic and Transportation Infrastructure", props.cb.needsForTrafficAndTransportationInfrastructure],
              ["Needs for Transit Services", props.cb.needsForTransitServices]]
    },
    "Parks, Cultural and Other Community Facilities": {
      mostImportant: props.cb.mostImportantIssueParksCulturalAndOtherCommunityFacilities,
      mostImportantOther: props.cb.mostImportantIssueParksCulturalAndOtherCommunityFacilitiesOther,
      explanation: props.cb.pleaseExplainYourSelectionForMostImportantParksCulturalAndOtherCommunityFacilitiesIssue,
      needs: [["Needs for Parks", props.cb.needsForParks],
              ["Needs for Cultural Services", props.cb.needsForCulturalServices],
              ["Needs for Library Services", props.cb.needsForLibraryServices],
              ["Needs for Community Boards", props.cb.needsForCommunityBoards]]
    },
  }

  const needsGroup = group[props.group]
  
  return (

    <div className="district-info" key={needsGroup}>
      <h6 className="text-center boro-cd-header">{props.cb.boro} Community Board {props.cb.boardNumber}</h6>
      <hr />
      <p></p><p><u>Most Important Issue Related to {props.group}</u></p>
      <p></p>
      <p>
        <b>{ needsGroup.mostImportant !== "" ? needsGroup.mostImportant : needsGroup.mostImportantOther}</b><br />
        { needsGroup.explanation }
      </p>

      <hr />

      <p></p><p><u>Community District Needs Related to {props.group}</u></p>
      <p></p>

      {needsGroup.needs.map((need) => (
        <p key={need[1]}>
          <b>{ need[0] }</b><br />
          { need[1] !== "" ? need[1] : "No comments" }
        </p>
      ))}
      
      <hr />
    </div>

  )
}
