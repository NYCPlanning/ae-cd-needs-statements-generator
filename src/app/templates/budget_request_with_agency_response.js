import getLocation from "../helpers/get_location";

const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

// const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function BudgetRequestWithAgencyResponse(props) {
  const location = (props.br.siteSpecific === "Yes") ? (getLocation(props.br)) : false;

  return(
    <>
      <div key={props.k} id={`${props.br.responseId}-full`} style={{border: "1px solid #cc6b39", breakInside: "avoid"}} className="mb-4 p-2" >
        {/* <div>HIIII</div> */}
        <div style={{width: "100%", fontSize: "1rem", fontWeight: "700", display: "flex"}}>
          <div style={{width: "5rem", textAlign: "center"}}>
            <a href={`#${props.br.responseId}-abbreviated`}>
              {props.priorityNumerator}
              {props.priorityDenominator && (<span style={{fontWeight: "600", color: "gray"}}> of {props.priorityDenominator}</span>)}
            </a>
            {/* <a href={`#${props.br.responseId}-abbreviated`}>{props.priority}</a> */}
          </div>
          <div style={{width: "100%", display: "flex", justifyContent: "space-between", paddingLeft: "0.5rem"}}>
            <div><a href={`#${props.br.responseId}-abbreviated`}>{props.br.budgetRequestTitle}</a></div>
            <div style={{minWidth: "5rem", paddingLeft: "1rem", textAlign: "end"}}><a href={`#${props.br.responseId}-abbreviated`}>{props.br.agencyAcronym}</a></div>
          </div>
        </div>
        <div style={{width: "100%", display: "flex", borderBottom: "1px solid #cc6b39"}}>
          <p style={{fontSize: "0.9rem", paddingLeft: "5rem", marginBottom: "0.5rem"}}>{props.br.request}</p>
        </div>
        <div style={{width: "100%", display: "flex", fontSize: "0.9rem", marginTop: "0.5rem"}}>
          <div style={{width: "60%", display: "flex"}}>
            <p>
              {location ? `Location: ${location}` : ""}
              {location ?  (<br />) : null}
              {props.br.explanation}
            </p>
          </div>
          <div style={{width: "40%", overflowWrap: "break-word", paddingLeft: "1rem"}}>
            <p>
              <i>
                Agency Response: {props.br.currentFYAgencyCategoryResponse ? props.br.currentFYAgencyCategoryResponse : LOREM_IPSUM} {props.br.currentFYAgencyResponse ? props.br.currentFYAgencyResponse : LOREM_IPSUM}
              </i>
            </p>
          </div>  
        </div>

      </div>
    </>
  )

}
