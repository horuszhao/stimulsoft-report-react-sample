import React from 'react';

const Stimulsoft = window.Stimulsoft || {};

class ReportTest extends React.Component {

  componentDidMount(){
    let stiOptions = new Stimulsoft.Viewer.StiViewerOptions();
    this.viewer = new Stimulsoft.Viewer.StiViewer(stiOptions, "content_viewer", false);
    this.viewer.renderHtml("content");
  }

  loadReportData = (data) => {
      let report = new Stimulsoft.Report.StiReport();
      report.loadFile("/reports/JD23.mrt");
      var dsDataSource = new Stimulsoft.System.Data.DataSet();
      dsDataSource.readJson(data);
      report.regData("DataSource",null,dsDataSource);
      this.viewer.report = report;
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
