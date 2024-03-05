// Based upon templates/dcp/widgets/requests_widget_main.html.twig

import SectionHeader from "./section_header"

export default function NeedsGroupBudgetRequestsList(props) {
	// Filter the list of brs to the section, if necessary
	const brs = props.section ? props.brs.filter((request) => request.policyArea === props.section) : props.brs;

	const capital = brs.filter((request) => ((request.type === "Capital") && (request.continuedSupport !== "Continued Support"))).sort((a, b) => a.currentFYRanking - b.currentFYRanking);
	const continuedSupport = brs.filter((request) => ((request.type === "Capital") && (request.continuedSupport === "Continued Support"))).sort((a, b) => a.currentFYRanking - b.currentFYRanking);
	const expense = brs.filter((request) => request.type === "Expense").sort((a, b) => a.currentFYRanking - b.currentFYRanking);

	return (
		<>
			<p style={{fontStyle: "italic"}}>Note: Please see Section 7 for the full content of each request</p>
			<SectionHeader fontSize="1.25rem" sectionName="Capital Budget Requests" noBorder={true} />

			<div className="widget-requests">
				{	(capital.length || continuedSupport.length) ? (
					<table className="table widget_request_table" style={{tableLayout: "fixed"}}>
						<thead><tr>
							<th width="12%" style={{textAlign: "center", padding: "0.25rem 0.75rem"}}>Priority</th>
							<th style={{padding: "0.25rem 0.75rem", width: "12%"}}>Agency</th>
							<th style={{padding: "0.25rem 0.75rem"}}>Title</th>
						</tr></thead>
						<tbody>
							{
								capital.map((br, i) =>
									// <NeedsGroupBudgetRequest br={br} priority={`${i+1} / ${capital.length}`} k={`${props.section}${br.responseId}`} />
									<tr key={`${props.section}${br.responseId}`}>
										<td width="12%" style={{textAlign: "center", padding: "0.25rem 0.75rem"}}>{`${i+1} / ${capital.length}`}</td>
										<td style={{textAlign: "center", padding: "0.25rem 0.75rem", width: "12%"}}>{br.agencyAcronym}</td>
										<td style={{padding: "0.25rem 0.75rem"}}>{br.budgetRequestTitle}</td>
									</tr>
								)
							}
							{
								continuedSupport.map((br, i) =>
									// <NeedsGroupBudgetRequest br={br} priority={`CS`} k={`${props.section}${br.responseId}`} />
									<tr key={`${props.section}${br.responseId}`} className="abbreviated-request-list">
										<td width="12%" style={{textAlign: "center", padding: "0.25rem 0.75rem"}}>CS</td>
										<td style={{textAlign: "center", padding: "0.25rem 0.75rem", width: "12%"}}>{br.agencyAcronym}</td>
										<td style={{padding: "0.25rem 0.75rem"}}>{br.budgetRequestTitle}</td>
									</tr>
								)
							}
						</tbody>
					</table>) : 
					<p>The Community Board did not submit any Budget Requests in this category.</p>

				}
				
			</div>

			<SectionHeader fontSize="1.25rem" sectionName="Expense Budget Requests" noBorder={true} />
			<div className="widget-requests">
				{ expense.length ? (
					<table className="table widget_request_table" style={{tableLayout: "fixed"}}>
						
						<thead><tr>
							<th width="12%" style={{textAlign: "center", padding: "0.25rem 0.75rem"}}>Priority</th>
							<th style={{padding: "0.25rem 0.75rem", width: "12%"}}>Agency</th>
							<th style={{padding: "0.25rem 0.75rem"}}>Title</th>
						</tr></thead>
						<tbody>
							{

									expense.map((br, i) =>
										// <NeedsGroupBudgetRequest br={br} priority={`${i+1} / ${expense.length}`} k={`${props.section}${br.responseId}`} />
										<tr key={`${props.section}${br.responseId}`}>
											<td width="12%" style={{textAlign: "center", padding: "0.25rem 0.75rem"}}>{`${i+1} / ${expense.length}`}</td>
											<td style={{textAlign: "center", padding: "0.25rem 0.75rem", width: "12%"}}>{br.agencyAcronym}</td>
											<td style={{padding: "0.25rem 0.75rem"}}>{br.budgetRequestTitle}</td>
										</tr>
									)
									
							}
						</tbody>
					</table>) : 
					<p>The Community Board did not submit any Budget Requests in this category.</p>
				}
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