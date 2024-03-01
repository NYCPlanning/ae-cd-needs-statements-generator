export default function Top3Issues(props) {

  return (

    <div className="district-info">
      <h6 className="text-center boro-cd-header">{props.cb.boro} Community Board {props.cb.boardNumber}</h6>
      <hr />
      <p></p><p>The three most pressing issues facing this Community Board are:</p>
      <p></p>
      <p>
        <b>{ props.cb.top3Issues1 !== "" ? props.cb.top3Issues1 : props.cb.top3Issues1Other}</b><br />
        { props.cb.top3Issues1Explanation }
      </p>
      <p>
        <b>{ props.cb.top3Issues2 !== "" ? props.cb.top3Issues2 : props.cb.top3Issues2Other}</b><br />
        { props.cb.top3Issues2Explanation }
      </p>
      <p>
        <b>{ props.cb.top3Issues3 !== "" ? props.cb.top3Issues3 : props.cb.top3Issues3Other}</b><br />
        { props.cb.top3Issues3Explanation }
      </p>
      <hr />
    </div>


  )

}
