import React from 'react';

const Stimulsoft = window.Stimulsoft || {};

class ReportTest extends React.Component {

  componentDidMount(){
    let report = new Stimulsoft.Report.StiReport();
    report.loadFile("/reports/JD23.mrt");
    let stiOptions = new Stimulsoft.Viewer.StiViewerOptions();
    this.viewer = new Stimulsoft.Viewer.StiViewer(stiOptions, "content_viewer", false);
    this.viewer.report = report;
    this.viewer.renderHtml("content");
  }

  loadReportData = (data) => {
      let report = new Stimulsoft.Report.StiReport();
      report.loadFile("/reports/JD23.mrt");
      this.viewer.report = report;
      var dsDataSource = new Stimulsoft.System.Data.DataSet();
      dsDataSource.readJson(data);
      this.viewer.report.regData("DataSource",null,dsDataSource);
      report.renderAsync(function(){},1,report.totalPageCount);
  }

  componentWillReceiveProps(nextProps){
    this.loadReportData(nextProps.data);
  }

  render() {
    return (
      <div id="content">
        
      </div>
    );
  }
}

export default ReportTest;
