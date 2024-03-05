export default function TableOfContents(props) {
  return (
    <>
      <table className="table-content" style={{
        width: '100%'
      }}>
        <tbody><tr style={{
          borderBottom: '1px solid #13527B'
        }}>
          <td style={{
            fontSize: '1rem'
          }} className="pb-1 pt-1">
            <a className="print-black" href="#introduction">Introduction</a>
          </td>
        </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#how_to_use_this_report">How to Use This Report</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#community_board_information">1. Community Board Information</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#2020_census_data">2. 2020 Census Data</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#overview_of_community_district">3. Overview of Community District</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#top_three_pressing_issues_overall">4. Top Three Pressing Issues Overall</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#summary_of_community_district_needs_and_budget_requests">5. Summary of Community District Needs and Budget Requests</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#healthcare_and_human_services">Health Care and Human Services</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#youth_education_and_child_welfare">Youth, Education and Child Welfare</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#public_safety_and_emergency_services">Public Safety and Emergency Services</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#core_infrastructure_city_services_and_resiliency">Core Infrastructure, City Services and Resiliency</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#housing_economic_development_and_land_use">Housing, Economic Development and Land Use</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#transportation">Transportation</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#parks_cultural_and_other_community_facilities">Parks, Cultural and Other Community Facilities</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#other_budget_requests">{props.additionalComments ? "6. Additional Comments and Other Budget Requests" : "6. Other Budget Requests"}</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#summary_of_prioritized_budget_requests">7. Summary of Prioritized Budget Requests</a>
            </td>
          </tr>
        </tbody></table>
    </>
  )
}
