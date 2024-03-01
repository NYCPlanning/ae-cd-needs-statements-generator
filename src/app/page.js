'use client'
import Image from "next/image";
import { useState } from "react";
let allStatements = require("/public/jsondata/statements.json");
let allBudgetRequests = require("/public/jsondata/brs.json");
import PageBreak from "./templates/page_break";
import SectionHeader from "./templates/section_header";
import Introduction from "./templates/static/introduction";
import HowToUseThisReport from "./templates/static/how_to_use_this_report";
import Disclaimer from "./templates/static/disclaimer";
import TableOfContents from "./templates/static/table_of_contents";
import CommunityBoardInfo from "./templates/community_board_info";
import CensusData from "./templates/static/census_data";
import CommunityDistrictOverview from "./templates/community_district_overview";
import Top3Issues from "./templates/top_3_issues";
import NeedsGroup from "./templates/needs_group";
import BudgetRequestsList from "./templates/budget_requests_list";

export default function Home() {
  const [selectedCB, setSelectedCB] = useState("SI99");
  const cb = allStatements.find((statement) => statement.communityBoardID === selectedCB);
  const brs = allBudgetRequests.filter((request) => request.communityBoardID === selectedCB);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container-fluid print-form print-report">
        <div className="text-center">
          {/* <div className="printonly text-boro-cd">{% if district %}{{ district.getTitle }}{% endif %}</div> */}
          <form action="" method="GET">
            {/* <select className="noprint" name="district" onChange="form.submit()"> */}
            <select className="noprint" name="district" onChange={(e) => setSelectedCB(e.target.value)}>
              <option value="-1"> - Select District - </option>
              {allStatements.map((statement) => (
                <option value={statement.communityBoardID}>{statement.communityBoardID}</option> 
              ))}
              {/* {% for d in districts %}
              <option value="{{ d.getId }}"{% if district and district.getId == d.getId %} selected{% endif %}>{{ d.getTitle }}</option>
              {% endfor %} */}
            </select>
          </form>
        </div>
        <div className="print-button">
          {/* {#<a href="javascript:" title="Download" className="center pdfDownloadReport mr-3" data-id="{{ report.getId }}" data-district_id="{% if district %}{{ district.getId }}{% else %}-1{% endif %}"><i className="fas fa-download"></i> PDF</a>#} */}
          <a href="javascript:" title="Download" className="center pdfDownloadReport mr-3" data-id="SI99" data-district_id="SI99"><i className="fas fa-download"></i> PDF</a>
          <a href="javascript:window.print();" title="Print" className="center"><i className="dcp fa-print"></i> Print</a>
        </div>

        <h1 className="form-title"></h1>
        <p>Cover page goes here</p>
        <PageBreak />
        <SectionHeader sectionName="Introduction" />
        <Introduction />

        <SectionHeader sectionName="How To Use This Report" />
        <HowToUseThisReport />
        <PageBreak />

        <Disclaimer />
        <PageBreak />

        <SectionHeader sectionName="Table of Contents" />
        <TableOfContents />
        <PageBreak />

        <SectionHeader sectionName="1. Community Board Information" />
        <CommunityBoardInfo cb={cb} />
        <PageBreak />

        <SectionHeader sectionName="2. 2020 Census Data" />
        <CensusData />
        <PageBreak />

        <SectionHeader sectionName="3. Overview of Community District" />
        <CommunityDistrictOverview cb={cb} />
        <PageBreak />

        <SectionHeader sectionName="4. Top Three Pressing Issues Overall" />
        <Top3Issues cb={cb} />
        <PageBreak />

        <SectionHeader sectionName="5. Summary of Community District Needs and Budget Requests" />
          <SectionHeader fontSize="1.5rem" sectionName="Healthcare and Human Services" />
          <NeedsGroup cb={cb} group="Healthcare and Human Services" />
          <PageBreak />
          <BudgetRequestsList brs={brs} section="Health Care and Human Services" />
          <PageBreak />

          <SectionHeader fontSize="1.5rem" sectionName="Youth, Education and Child Welfare" />
          <NeedsGroup cb={cb} group="Youth, Education and Child Welfare" />
          <PageBreak />
          <BudgetRequestsList brs={brs} section="Youth, Education, and Child Welfare" />
          <PageBreak />

          <SectionHeader fontSize="1.5rem" sectionName="Public Safety and Emergency Services" />
          <NeedsGroup cb={cb} group="Public Safety and Emergency Services" />
          <PageBreak />
          <BudgetRequestsList brs={brs} section="Public Safety and Emergency Services" />
          <PageBreak />

          <SectionHeader fontSize="1.5rem" sectionName="Core Infrastructure, City Services and Resiliency" />
          <NeedsGroup cb={cb} group="Core Infrastructure, City Services and Resiliency" />
          <PageBreak />
          <BudgetRequestsList brs={brs} section="Core Infrastructure, City Services, and Resiliency" />
          <PageBreak />

          <SectionHeader fontSize="1.5rem" sectionName="Housing, Economic Development and Land Use" />
          <NeedsGroup cb={cb} group="Housing, Economic Development and Land Use" />
          <PageBreak />
          <BudgetRequestsList brs={brs} section="Housing, Economic Development, and Land Use" />
          <PageBreak />

          <SectionHeader fontSize="1.5rem" sectionName="Transportation and Mobility" />
          <NeedsGroup cb={cb} group="Transportation and Mobility" />
          <PageBreak />
          <BudgetRequestsList brs={brs} section="Transportation and Mobility" />
          <PageBreak />

          <SectionHeader fontSize="1.5rem" sectionName="Parks, Cultural and Other Community Facilities" />
          <NeedsGroup cb={cb} group="Parks, Cultural and Other Community Facilities" />
          <PageBreak />
          <BudgetRequestsList brs={brs} section="Parks, Cultural, and Other Community Facilities" />

        <PageBreak />

        <SectionHeader sectionName="6. Other Budget Requests" />
          <p>Does anything else go here?  anyNeedsNotDetailedInThePrecedingPolicyArea and anyAdditionalCommentsRelatedToYourDistrictsNeedsAndBudgetRequests are unused</p>
          <BudgetRequestsList brs={brs} section="Other Needs" />
        <PageBreak />

        <SectionHeader sectionName="7. Summary of Prioritized Budget Requests" />
          <BudgetRequestsList brs={brs} />
        <PageBreak />

        {/* {% for widget in widgets %}
          <div className="preview-widget section_mb" id="preview_widget_{{ widget.getConfig().getId() }}">
            {{ widget.renderReport(district) | raw }}
          </div>
        {% endfor %} */}

        <div className="print-button">
          {/* {#<a href="javascript:" title="Download" className="center pdfDownloadReport mr-3" data-id="{{ report.getId }}" data-district_id="{% if district %}{{ district.getId }}{% else %}-1{% endif %}"><i className="fas fa-download"></i> PDF</a>#} */}
          <a href="javascript:" title="Download" className="center pdfDownloadReport mr-3" data-id="SI99" data-district_id="SI99"><i className="fas fa-download"></i> PDF</a>
          <a href="javascript:window.print();" title="Print" className="center"><i className="dcp fa-print"></i> Print</a>
        </div>
      </div>

      {/* <script>
        var url_pdf_download_report = "\/cb\/print\/pdf\/download\u002Dreport";
        var url_pdf_download_report_dcp = "\/dcp\/print\/pdf\/download\u002Dreport";
        var side = "dcp";
	    </script> */}
      <script src="/cdneeds.app.js"></script>
      {/* <script type="text/javascript" src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
      <script type="text/javascript" src="/jquery.canvasjs.min.js"></script> */}
    </main>
  );
}