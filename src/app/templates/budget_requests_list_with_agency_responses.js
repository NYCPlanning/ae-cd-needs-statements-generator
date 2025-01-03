// Based upon templates/dcp/widgets/requests_widget_main.html.twig

import SectionHeader from "./section_header"
import BudgetRequestWithAgencyResponse from "./budget_request_with_agency_response";

export default function BudgetRequestsListWithAgencyResponses(props) {
	// Filter the list of brs to the section, if necessary
	const brs = props.section ? props.brs.filter((request) => request.policyArea === props.section) : props.brs;

	const capital = brs.filter((request) => ((request.type === "Capital") && (request.continuedSupport !== "Continued Support"))).sort((a, b) => a.currentFYRanking - b.currentFYRanking);
	const continuedSupport = brs.filter((request) => ((request.type === "Capital") && (request.continuedSupport === "Continued Support"))).sort((a, b) => a.currentFYRanking - b.currentFYRanking);
	const expense = brs.filter((request) => request.type === "Expense").sort((a, b) => a.currentFYRanking - b.currentFYRanking);

	return (
		<>
			<SectionHeader fontSize="1.25rem" sectionName="Capital Budget Requests" noBorder={true} />
			<div className="widget-requests">
				{	(capital.length || continuedSupport.length) ? (
					<>
						{
							capital.map((br, i) =>
								// <BudgetRequestWithAgencyResponse br={br} priority={`${i+1} / ${capital.length}`} k={`${props.section}${br.responseId}`} key={`${props.section}${br.responseId}`} />
							<BudgetRequestWithAgencyResponse br={br} priorityNumerator={br.currentFYRanking} priorityDenominator={capital.length} k={`${props.section}${br.responseId}`} key={`${props.section}${br.responseId}`} />
							)
						}
						{
							continuedSupport.map((br, i) =>
								<BudgetRequestWithAgencyResponse br={br} priorityNumerator={`CS`} k={`${props.section}${br.responseId}`} key={`${props.section}${br.responseId}`} />
							)
						}
					</>) : 
					<p>The Community Board did not submit any Budget Requests in this category.</p>

				}
				
			</div>

			<SectionHeader fontSize="1.25rem" sectionName="Expense Budget Requests" noBorder={true} />
			<div className="widget-requests">
				{ expense.length ? (
						<>
							{
									expense.map((br, i) =>
										<BudgetRequestWithAgencyResponse br={br} priorityNumerator={br.currentFYRanking} priorityDenominator={expense.length} k={`${props.section}${br.responseId}`} key={`${props.section}${br.responseId}`} />
									)
									
							}
						</>
					) : 
					<p>The Community Board did not submit any Budget Requests in this category.</p>
				}
			</div>
		</>
	)

}
