export default function getLocation(br) {
  var loc = "";
  if (br.siteAddress) {
    loc += br.siteAddress;
  }
  if (br.siteSiteName) {
    loc += loc.length ? " - " + br.siteSiteName : br.siteSiteName;
  }
  if (br.siteFacilityName) {
    loc += loc.length ? " - " + br.siteFacilityName : br.siteFacilityName;
  }
  if (br.siteOnStreet) {
    loc += loc.length ? " - " + br.siteOnStreet : br.siteOnStreet;
  }
  if (br.siteCrossStreet1) {
    if (br.siteCrossStreet2) {
      loc += loc.length ? " - " + br.siteCrossStreet1 + " & " + br.siteCrossStreet2 : br.siteCrossStreet1 + " & " + br.siteCrossStreet2;
    } else {
      loc += loc.length ? " - " + br.siteCrossStreet1 : br.siteCrossStreet1;
    }
  }
  if (br.siteStreetSegmentCrossStreet1) {
    if (br.siteStreetSegmentCrossStreet2) {
      loc += loc.length ? " - " + br.siteStreetSegmentCrossStreet1 + " & " + br.siteStreetSegmentCrossStreet2 : br.siteStreetSegmentCrossStreet1 + " & " + br.siteStreetSegmentCrossStreet2;
    } else {
      loc += loc.length ? " - " + br.siteStreetSegmentCrossStreet1 : br.siteStreetSegmentCrossStreet1;
    }
  }
  if (br.siteStreetSegmentSide) {
    loc += loc.length ? " (" + br.siteStreetSegmentSide + ")" : "(" + br.siteStreetSegmentSide + ")";
  }
  if (br.siteIntersectionStreetName) {
    loc += loc.length ? " - " + br.siteIntersectionStreetName : br.siteIntersectionStreetName;
  }
  if (br.siteIntersectionStreet1) {
    if (br.siteIntersectionStreet2) {
      loc += loc.length ? " - " + br.siteIntersectionStreet1 + " & " + br.siteIntersectionStreet2 : br.siteIntersectionStreet1 + " & " + br.siteIntersectionStreet2;
    } else {
      loc += loc.length ? " - " + br.siteIntersectionStreet1 : br.siteIntersectionStreet1;
    }
  }
  if (br.siteIntersectionCompassDirection) {
    loc += loc.length ? " (" + br.siteIntersectionCompassDirection + ")" : "(" + br.siteIntersectionCompassDirection + ")";
  }

  return loc;
}