// Based upon templates/dcp/widgets/requests_widget_main.html.twig
import getLocation from "../helpers/get_location";

const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function BudgetRequest(props) {
  const location = (props.br.siteSpecific === "Yes") ? (getLocation(props.br)) : false;

  return(
    <>
      <div key={props.k} id={`${props.br.responseId}-full`} style={{border: "1px solid #cc6b39", breakInside: "avoid"}} className="mb-4 p-2" >
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
          <div style={{width: "100%", display: "flex"}}>
            <p style={{marginBottom: "0"}}>
              {location ? `Location: ${location}` : ""}
              {location ?  (<br />) : null}
              {props.br.explanation}
            </p>
          </div>
          {/* <div style={{width: "40%", overflowWrap: "break-word", paddingLeft: "1rem"}}>
            <p>
              <i>
                Agency Response: {props.br.currentFYAgencyCategoryResponse ? props.br.currentFYAgencyCategoryResponse : LOREM_IPSUM} {props.br.currentFYAgencyResponse ? props.br.currentFYAgencyResponse : LOREM_IPSUM}
              </i>
            </p>
          </div>   */}
        </div>

      </div>
    </>
  )

}

{/* <h5 class="mb-2" style='font-size:{{ widget.options.size_header }}!important; {% if widget.options.no_border %} {{ 'border:none' }} {% else %} border:{% if widget.options.size_border is defined %}{{ widget.options.size_border }}{% endif %} solid #cc6b39{% endif %}'>
		<div class="icon p-1 noprint"><i class="fas fa-chevron-right white"></i></div>
		<div class="p-1">{% if widget.options.title %}{{ widget.options.title }}{% else %}TOP{% if not widget.options.all %} 10{% endif %} PRIORITY{% if widget.options.type == 1 %} CAPITAL{% elseif widget.options.type == 2 %} EXPENSE{% endif %} BUDGET REQUESTS{% endif %}</div>
	</h5>
	{% if widget.options.district == -1 and not district %}<div class="mb-2"><strong>The data depends on the district</strong></div>{% endif %}
	{% if budget_requests|length or budget_requests_continued|length %}
	<table class="table mt-4 widget_request_table" style='table-layout: fixed;'>
		<tr>
			{% if widget.options.info and not district %}<th width='12%'>CD</th>{% endif %}
			<th width='10%'>Priority</th>
			<th width='10%'>Agency</th>
			<th width='21%'>Request</th>
			<th>Explanation</th>
			<th width='15%'>Location</th>
		</tr>
		{% if budget_requests|length %}
			{% for d_idx, d_requests in budget_requests %}
				{% for idx, budget_request in d_requests %}
					{% set agencies = budget_request.getParentRequest.getNeed.getAgencies.toArray %}
					<tr>
						{% if widget.options.info and not district %}
							<td width='12%'>{{ budget_request.district.borough.name }} {{ budget_request.district.cDistrict }}</td>{% endif %}
						<td width='10%'>{{ budget_request.getPosition }}/{{ br_count[d_idx][budget_request.getParentRequest.getType] }}</td>
						<td width='10%'>{% for idx, agency in agencies %}{{ agency.getName }}{% if idx+1 < agencies|length %}, {% endif %}{% endfor %}</td>
						<td width='21%'><b>{{ budget_request.getParentRequest.getTitle }}</b></td>
						<td><i>{{ budget_request.getDescription|raw|e }}</i></td>
						<td width='15%'>{% if br_locations[d_idx] is defined and br_locations[d_idx][budget_request.getId] is defined %}{% set location = br_locations[d_idx][budget_request.getId]|replace({'<br/>':' '}) %}{{ location|striptags }}{% endif %}</td>
					</tr>
				{% endfor %}
			{% endfor %}
		{% endif %}
		{% if budget_requests_continued|length %}
			{% for d_idx, d_requests in budget_requests_continued %}
				{% for idx, budget_request in d_requests %}
					{% set agencies = budget_request.getParentRequest.getNeed.getAgencies.toArray %}
					<tr>
						{% if widget.options.info and not district %}
							<td width='12%'>{{ budget_request.district.borough.name }} {{ budget_request.district.cDistrict }}</td>{% endif %}
						<td width='10%'>CS</td>
						<td width='10%'>{% for idx, agency in agencies %}{{ agency.getName }}{% if idx+1 < agencies|length %}, {% endif %}{% endfor %}</td>
						<td width='21%'><b>{{ budget_request.getParentRequest.getTitle }}</b></td>
						<td><i>{{ budget_request.getDescription|raw|e }}</i></td>
						<td width='15%'>{% if br_locations_continued[d_idx] is defined and br_locations_continued[d_idx][budget_request.getId] is defined %}{% set location = br_locations_continued[d_idx][budget_request.getId]|replace({'<br/>':' '}) %}{{ location|striptags }}{% endif %}</td>
					</tr>
				{% endfor %}
			{% endfor %}
		{% endif %}
	</table>
	{% else %}
		<div class='widget_request_not-submit-text'>The Community Board did not submit any Budget Requests in this category.</div>
	{% endif %} */}