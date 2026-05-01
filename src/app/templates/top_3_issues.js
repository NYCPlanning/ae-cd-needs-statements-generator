import fixString from "../helpers/fix_string"

export default function Top3Issues(props) {
  var top3IssuesRowCounter = 0;

  return (

    <div className="district-info">
      <h6 className="text-center boro-cd-header">{props.cb.borough} Community Board {props.cb.boardNumber}</h6>
      <hr />
      <p></p><p>The three most pressing issues facing this Community Board are:</p>
      <p></p>
      <p>
        <b>{props.cb.top3Issues1 !== "" ? props.cb.top3Issues1 : props.cb.top3Issues1Other}</b>
      </p>
      { fixString(props.cb.top3Issues1Explanation).map((row) => (
        <p key={`top3issues1${top3IssuesRowCounter++}`}>
          {row}
        </p>
      ))}

      <p>
        <b>{props.cb.top3Issues2 !== "" ? props.cb.top3Issues2 : props.cb.top3Issues2Other}</b>
      </p>
      { fixString(props.cb.top3Issues2Explanation).map((row) => (
        <p key={`top3issues2${top3IssuesRowCounter++}`}>
          {row}
        </p>
      ))}

      <p>
        <b>{props.cb.top3Issues3 !== "" ? props.cb.top3Issues3 : props.cb.top3Issues3Other}</b>
      </p>
      { fixString(props.cb.top3Issues3Explanation).map((row) => (
        <p key={`top3issues3${top3IssuesRowCounter++}`}>
          {row}
        </p>
      ))}
      <hr />
    </div>


  )

}
