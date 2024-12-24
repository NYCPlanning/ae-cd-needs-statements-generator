import fixString from "../helpers/fix_string";

export default function CommunityDistrictOverview(props) {
  var rowCounter = 0;

  const communityDistrictOverview = fixString(props.cb.communityDistrictOverview);
  return (
    <>
      {/* { props.cb.communityDistrictOverview } */}
      { communityDistrictOverview.map((row) => (
        <p key={`overview${rowCounter++}`}>
          {row}
        </p>
      ))}
    </>
    
        )

}
