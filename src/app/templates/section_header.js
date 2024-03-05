// Based upon /templates/dcp/widgets/submission_widget_main.html.twig rows 5-13


export default function SectionHeader(props) {
  const headerOptions = {
    fontSize: props.fontSize ? props.fontSize : "1.75rem",
    borderSize: "1px",
    noBorder: props.noBorder ? props.noBorder : false
  }

  // const id = (props.sectionName[1] === ".") ? (props.sectionName.toLowerCase().replaceAll(" ", "_").replaceAll(",", "").slice(3)) : (props.sectionName.toLowerCase().replaceAll(" ", "_").replaceAll(",", ""))

  return(
    <>
      <div id={props.id ? props.id : null}>
        <h5 className="mb-2" style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: headerOptions.fontSize,
          border: headerOptions.noBorder ? "none" : `${headerOptions.borderSize} solid #cc6b39`, 
        }}>
					<div style={{display: "flex"}}>
						<div className="icon p-1 noprint" style={{background: "#cc6b39"}}>
							<i className="fas fa-chevron-right white"></i>
            </div>
            <div className="p-1" style={{textTransform: "uppercase"}}>
              {props.sectionName}
            </div>
					</div>
				</h5>
			</div>
    </>
  )

}

{/* <div href="#section_widgets_{{ section.getId }}">
				<h5 className="mb-2" style='display: flex;justify-content: space-between;font-size:{{ widget.options.size_header }}; {% if widget.options.no_border %} {{ 'border:none' }} {% else %} border:{% if widget.options.size_border is defined %}{{ widget.options.size_border }}{% endif %} solid #cc6b39{% endif %}'>
					<div style='display: flex;'>
						<div className="icon p-1 noprint" style='background: #cc6b39'>
							<i className="fas fa-chevron-right white"></i></div>
						<div className="p-1" style='text-transform: uppercase'>{% if widget.options.title %}{{ widget.options.title }}{% else %}{{ section.getName() }}{% endif %}</div>
					</div>
				</h5>
			</div> */}