// Based upon templates/dcp/widgets/CBInfo_widget_main.html.twig


export default function CommunityBoardInfo(props) {

  return (
    <div className="district-info">
      <h6>{props.cb.boro} Community Board {props.cb.boardNumber}</h6>
      <hr />
      <div className="row">
        <div className="col-6">
          <table>
            <tr>
              <td>Address: </td>
              <td>{props.cb.communityBoardOfficeAddress}</td>
            </tr>
            <tr>
              <td>Phone: </td>
              <td>{props.cb.communityBoardOfficePhoneNumber}</td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>{props.cb.communityBoardOfficeEmailAddress}</td>
            </tr>
            <tr>
              <td>Website: </td>
              <td>{props.cb.communityBoardWebsiteUrl}</td>
            </tr>
          </table>
        </div>
        <div className="col-6">
          <table>
            <tr>
              <td>Chair: </td>
              <td>{props.cb.communityBoardChair}</td>
            </tr>
            <tr>
              <td>District Manager: </td>
              <td>{props.cb.districtManager}</td>
            </tr>
          </table>
        </div>
      </div>
      <hr />
    </div>
  )

}

{/* <div className="widget-requests">
	{% if district %}
	<div className="district-info">
		<h6>{{ district.getBorough.getName }} Community Board {{ district.getCDistrict }}</h6>
		<hr>
		<div className="row">
			<div className="col-6">
				<table>
					<tr>
						<td>Address: </td>
						<td>{{ district.getStreetNumber }} {{ district.getStreet }}{% if district.getRoom %}, {{ district.getRoom }}{% endif %}</td>
					</tr>
					<tr>
						<td>Phone: </td>
						<td>{{ district.getPhone }}</td>
					</tr>
					<tr>
						<td>Email: </td>
						<td>{% if district.getEmail is defined %}{{ district.getEmail }}{% endif %}</td>
					</tr>
					<tr>
						<td>Website: </td>
						<td>{{ district.getWebsite }}</td>
					</tr>
				</table>
			</div>
			<div className="col-6">
				<table>
					<tr>
						<td>Chair: </td>
						<td>{{ district.getChair }}</td>
					</tr>
					<tr>
						<td>District Manager: </td>
						<td>{% if district_user %}{{ district_user.getFullname }}{% endif %}</td>
					</tr>
				</table>
			</div>
		</div>
		<hr>
	</div>
{% endif %} */}
