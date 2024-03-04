export default function TableOfContents(props) {
  return (
    <>
  <p>The Anchor Links in here need to be updated</p>
      <table className="table-content" style={{
        width: '100%'
      }}>
        <tbody><tr style={{
          borderBottom: '1px solid #13527B'
        }}>
          <td style={{
            fontSize: '1rem'
          }} className="pb-1 pt-1">
            <a className="print-black" href="#preview_widget_1360185">Introduction</a>
          </td>
        </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360187">How to Use This Report</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360194">1. Community Board Information</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360197">2. 2020 Census Data</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360200">3. Overview of Community District</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360201">4. Top Three Pressing Issues Overall</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360202">5. Summary of Community District Needs and Budget Requests</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360203">Health Care and Human Services</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360208">Youth, Education and Child Welfare</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360213">Public Safety and Emergency Services</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360218">Core Infrastructure, City Services and Resiliency</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360223">Housing, Economic Development and Land Use</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360228">Transportation</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem',
              paddingLeft: 30
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360233">Parks, Cultural and Other Community Facilities</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360238">{props.additionalComments ? "6. Additional Comments and Other Budget Requests" : "6. Other Budget Requests"}</a>
            </td>
          </tr>
          <tr style={{
            borderBottom: '1px solid #13527B'
          }}>
            <td style={{
              fontSize: '1rem'
            }} className="pb-1 pt-1">
              <a className="print-black" href="#preview_widget_1360243">7. Summary of Prioritized Budget Requests</a>
            </td>
          </tr>
        </tbody></table>
    </>
  )
}
