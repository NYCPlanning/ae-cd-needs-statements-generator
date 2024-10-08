// Based upon templates/dcp/widgets/requests_widget_main.html.twig

function getLocation(br) {
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

export default function BudgetRequest(props) {
  const location = (props.br.siteSpecific === "Yes") ? (getLocation(props.br)) : false;

  return(
    <>
      <tr key={props.k} id={`${props.br.responseId}-full`}>
        <td width="15%"><a href={`#${props.br.responseId}-abbreviated`}>{props.br.budgetRequestTitle}</a></td>
        <td width="10%"><a href={`#${props.br.responseId}-abbreviated`}>{props.priority}</a></td>
        <td width="10%"><a href={`#${props.br.responseId}-abbreviated`}>{props.br.agencyAcronym}</a></td>
        <td width="21%"><a href={`#${props.br.responseId}-abbreviated`}><b>{props.br.request}</b></a></td>
        <td>
          <a href={`#${props.br.responseId}-abbreviated`}>
            {location ? `Location: ${location}` : ""}
            {location ?  (<br />) : null}
            <i>{props.br.explanation}</i>
          </a>
        </td>
      </tr>
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