// Based upon templates/dcp/widgets/line_break_widget_report.html.twig


export default function PageBreak() {
  const reportTitle = "FY2025 Community District Priorities"
  const cd = {
    district: "SI99"
  }

  return(
    <>
      <div className="page-break line-break-print">
        <span className="text-center text_line_break">Page break</span>
      </div>
      <div className="line-break">
        <table>
          <tr>
            <td style={{width: "49%"}}>{ reportTitle }</td>
            <td style={{width: "49%"}} align='right'>{ cd.district }</td>
          </tr>
        </table>
      </div>
    </>
  )

}
{/* <div className="{% if line_break_for_printing %} page-break line-break-print {% else %} line-break {% endif %}">
	<span className="text-center text_line_break">Page break</span>
</div>
<div className="{% if header_page %} header-print_page-break {% else %} line-break {% endif %}">
	<table>
		<tr>
			<td style='width: 49%'>{{ currentForm.get(district)['name_dashboard'] }}</td>
			<td style='width: 49%' align='right'>{{ currentForm.get(district)['district_title'] }}</td></tr>
		</tr>
	</table>
</div> */}
