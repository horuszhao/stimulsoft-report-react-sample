import React from 'react';
// import logo from './logo.svg';
import ReportTest from './reportTest';
// import './App.css';

let data = [{"groupId":null,"groupName":"dd1---974736182722561","roomNumber":"--","roomPrice":228.00,"roomType":"hhs","customerName":"dd11","arriveTime":"2019-11-05 13:00:00","departureTime":"2019-11-10 12:00:00","checkinStatus":"预订","debitFee":null,"roomFee":null,"otherFee":null,"totalFee":null,"remark":null,"url":"/bookingdetail/974736182722603/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-11-05 13:00:00"},{"groupId":null,"groupName":"dd1---974736182722561","roomNumber":"--","roomPrice":200.00,"roomType":"大床房225","customerName":"dd11","arriveTime":"2019-11-05 13:00:00","departureTime":"2019-11-06 12:00:00","checkinStatus":"预订","debitFee":2.00,"roomFee":2.00,"otherFee":0.00,"totalFee":3.00,"remark":null,"url":"/bookingdetail/974736182722603/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-11-05 13:00:00"},{"groupId":null,"groupName":"dd1---974736182722561","roomNumber":"--","roomPrice":200.00,"roomType":"大床房225","customerName":"dd11","arriveTime":"2019-11-07 13:00:00","departureTime":"2019-11-09 12:00:00","checkinStatus":"预订","debitFee":null,"roomFee":null,"otherFee":null,"totalFee":null,"remark":null,"url":"/bookingdetail/974736182722603/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-11-05 13:00:00"},{"groupId":null,"groupName":"fasdf---972580900126723","roomNumber":"团队主账","roomPrice":null,"roomType":"--","customerName":"bb","arriveTime":"2019-10-31 13:00:00","departureTime":"2019-11-01 12:00:00","checkinStatus":null,"debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":null,"url":"/checkin/group/972580900126723/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-31 13:00:00"},{"groupId":null,"groupName":"ff---972575955042305","roomNumber":"团队主账","roomPrice":null,"roomType":"--","customerName":"ff","arriveTime":"2019-10-31 13:00:00","departureTime":"2019-11-01 12:00:00","checkinStatus":null,"debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":null,"url":"/checkin/group/972575955042305/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-31 13:00:00"},{"groupId":null,"groupName":"ff---972575955042305","roomNumber":"4104","roomPrice":200.00,"roomType":"大床房225","customerName":"ff","arriveTime":"2019-10-31 16:00:03","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":1600.00,"roomFee":1600.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/972576017956866/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-31 13:00:00"},{"groupId":null,"groupName":"hj---962677061713942","roomNumber":"团队主账","roomPrice":null,"roomType":"--","customerName":"ds","arriveTime":"2019-10-08 13:00:00","departureTime":"2019-10-09 12:00:00","checkinStatus":null,"debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":null,"url":"/checkin/group/962677061713942/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-08 13:00:00"},{"groupId":null,"groupName":"sds---962677581807640","roomNumber":"团队主账","roomPrice":null,"roomType":"--","customerName":"s","arriveTime":"2019-10-08 13:00:00","departureTime":"2019-10-09 12:00:00","checkinStatus":null,"debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":null,"url":"/checkin/group/962677581807640/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-08 13:00:00"},{"groupId":null,"groupName":"tettas---966511570239727","roomNumber":"--","roomPrice":200.00,"roomType":"e门店简称","customerName":"sadsa","arriveTime":"2019-10-17 13:00:00","departureTime":"2019-10-18 12:00:00","checkinStatus":"预订","debitFee":null,"roomFee":null,"otherFee":null,"totalFee":null,"remark":null,"url":"/bookingdetail/966511570242385/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-17 13:00:00"},{"groupId":null,"groupName":"tettas---966511570239727","roomNumber":"--","roomPrice":200.00,"roomType":"大床房225","customerName":"sadsa","arriveTime":"2019-10-17 13:00:00","departureTime":"2019-10-18 12:00:00","checkinStatus":"预订","debitFee":4500.00,"roomFee":0.00,"otherFee":4500.00,"totalFee":0.00,"remark":null,"url":"/bookingdetail/966511570242385/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-17 13:00:00"},{"groupId":null,"groupName":"tettas---966511570239727","roomNumber":"--","roomPrice":200.00,"roomType":"大床房225","customerName":"sadsa","arriveTime":"2019-10-17 13:00:00","departureTime":"2019-10-18 12:00:00","checkinStatus":"预订","debitFee":null,"roomFee":null,"otherFee":null,"totalFee":null,"remark":null,"url":"/bookingdetail/966511570242385/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-17 13:00:00"},{"groupId":null,"groupName":"tettas---966511570239727","roomNumber":"--","roomPrice":200.00,"roomType":"大床房225","customerName":"sadsa","arriveTime":"2019-10-17 13:00:00","departureTime":"2019-10-18 12:00:00","checkinStatus":"预订","debitFee":null,"roomFee":null,"otherFee":null,"totalFee":null,"remark":null,"url":"/bookingdetail/966511570242385/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-17 13:00:00"},{"groupId":null,"groupName":"嘿嘿---963023057551361","roomNumber":"团队主账","roomPrice":null,"roomType":"--","customerName":"迭代","arriveTime":"2019-10-09 13:00:00","departureTime":"2019-10-10 12:00:00","checkinStatus":null,"debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":null,"url":"/checkin/group/963023057551361/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-09 13:00:00"},{"groupId":null,"groupName":"嘿嘿---963023057551361","roomNumber":"7706","roomPrice":200.00,"roomType":"门店房型简称1111","customerName":"迭代","arriveTime":"2019-10-09 13:17:13","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":5800.00,"roomFee":5800.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/963023162408961/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-09 13:00:00"},{"groupId":null,"groupName":"嘿嘿---963023057551361","roomNumber":"7708","roomPrice":200.00,"roomType":"门店房型简称1111","customerName":"迭代","arriveTime":"2019-10-09 13:17:46","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":5800.00,"roomFee":5800.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/963023325986819/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-09 13:00:00"},{"groupId":null,"groupName":"团队2---975142613729283","roomNumber":"团队主账","roomPrice":null,"roomType":"--","customerName":"联系人2","arriveTime":"2019-11-06 13:00:00","departureTime":"2019-11-07 12:00:00","checkinStatus":null,"debitFee":20.00,"roomFee":0.00,"otherFee":20.00,"totalFee":10.00,"remark":null,"url":"/checkin/group/975142613729283/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-11-06 13:00:00"},{"groupId":null,"groupName":"团队2---975142613729283","roomNumber":"146","roomPrice":200.00,"roomType":"大床房225","customerName":"联系人2","arriveTime":"2019-11-06 14:36:30","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":520.00,"roomFee":500.00,"otherFee":20.00,"totalFee":110.00,"remark":"1","url":"/checkin/detail/975142961856513/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-11-06 13:00:00"},{"groupId":null,"groupName":"团队test1---975139849682945","roomNumber":"--","roomPrice":228.00,"roomType":"hhs","customerName":"联系人1","arriveTime":"2019-11-06 13:00:00","departureTime":"2019-11-09 12:00:00","checkinStatus":"预订","debitFee":null,"roomFee":null,"otherFee":null,"totalFee":null,"remark":null,"url":"/bookingdetail/975139849682945/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-11-06 13:00:00"},{"groupId":null,"groupName":"团队test1---975139849682945","roomNumber":"--","roomPrice":200.00,"roomType":"大床房225","customerName":"联系人1","arriveTime":"2019-11-06 13:00:00","departureTime":"2019-11-07 12:00:00","checkinStatus":"预订","debitFee":210.00,"roomFee":200.00,"otherFee":10.00,"totalFee":10.00,"remark":null,"url":"/bookingdetail/975139849682945/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-11-06 13:00:00"},{"groupId":null,"groupName":"团队test1---975139849682945","roomNumber":"--","roomPrice":200.00,"roomType":"大床房225","customerName":"联系人1","arriveTime":"2019-12-01 13:00:00","departureTime":"2019-12-31 12:00:00","checkinStatus":"预订","debitFee":null,"roomFee":null,"otherFee":null,"totalFee":null,"remark":null,"url":"/bookingdetail/975139849682945/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-11-06 13:00:00"},{"groupId":null,"groupName":"的时代---964262589104131","roomNumber":"团队主账","roomPrice":null,"roomType":"--","customerName":"1问问","arriveTime":"2019-10-12 13:00:00","departureTime":"2019-10-13 12:00:00","checkinStatus":null,"debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":null,"url":"/checkin/group/964262589104131/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"的时代---964262589104131","roomNumber":"4190","roomPrice":200.00,"roomType":"大床房225","customerName":"11","arriveTime":"2019-10-12 10:05:48","departureTime":"2019-10-12 10:06:05","checkinStatus":"已退房","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964262807207952/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"的时代---964262589104131","roomNumber":"4190","roomPrice":200.00,"roomType":"大床房225","customerName":"22","arriveTime":"2019-10-12 10:05:48","departureTime":"2019-10-12 10:06:04","checkinStatus":"已退房","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964262811402258/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"的时代---964262589104131","roomNumber":"4191","roomPrice":200.00,"roomType":"大床房225","customerName":"33","arriveTime":"2019-10-12 10:05:49","departureTime":"2019-10-12 10:06:05","checkinStatus":"已退房","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964262811402260/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"的时代---964262589104131","roomNumber":"4192","roomPrice":200.00,"roomType":"大床房225","customerName":"44","arriveTime":"2019-10-12 10:05:49","departureTime":"2019-10-12 10:06:05","checkinStatus":"已退房","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964262811402262/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"的时代---964262589104131","roomNumber":"4193","roomPrice":200.00,"roomType":"大床房225","customerName":"1问问","arriveTime":"2019-10-12 10:05:48","departureTime":"2019-10-12 10:06:04","checkinStatus":"已退房","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964262807207938/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"的时代---964262589104131","roomNumber":"4194","roomPrice":200.00,"roomType":"大床房225","customerName":"1问问","arriveTime":"2019-10-12 10:05:48","departureTime":"2019-10-12 10:06:04","checkinStatus":"已退房","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964262807207939/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"的时代---964262589104131","roomNumber":"4195","roomPrice":200.00,"roomType":"大床房225","customerName":"1问问","arriveTime":"2019-10-12 10:05:48","departureTime":"2019-10-12 10:06:04","checkinStatus":"已退房","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964262807207940/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"的时代---964262589104131","roomNumber":"4196","roomPrice":200.00,"roomType":"大床房225","customerName":"1问问","arriveTime":"2019-10-12 10:05:48","departureTime":"2019-10-12 10:06:05","checkinStatus":"已退房","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964262807207941/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"的时代---964262589104131","roomNumber":"4197","roomPrice":200.00,"roomType":"大床房225","customerName":"1问问","arriveTime":"2019-10-12 10:05:48","departureTime":"2019-10-12 10:06:05","checkinStatus":"已退房","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964262807207942/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"的时代---964262589104131","roomNumber":"4198","roomPrice":200.00,"roomType":"大床房225","customerName":"1问问","arriveTime":"2019-10-12 10:05:48","departureTime":"2019-10-12 10:06:05","checkinStatus":"已退房","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964262807207943/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"的时代---964262589104131","roomNumber":"4199","roomPrice":200.00,"roomType":"大床房225","customerName":"1问问","arriveTime":"2019-10-12 10:05:48","departureTime":"2019-10-12 10:06:05","checkinStatus":"已退房","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964262807207944/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"团队主账","roomPrice":null,"roomType":"--","customerName":"3规范","arriveTime":"2019-10-12 13:00:00","departureTime":"2019-10-13 12:00:00","checkinStatus":null,"debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":null,"url":"/checkin/group/964263352467461/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"3010","roomPrice":200.00,"roomType":"大床房225","customerName":"11","arriveTime":"2019-10-12 10:08:22","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":5200.00,"roomFee":5200.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964263578959907/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"3010","roomPrice":200.00,"roomType":"大床房225","customerName":"22","arriveTime":"2019-10-12 10:08:22","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964263578959923/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"3011","roomPrice":200.00,"roomType":"大床房225","customerName":"33","arriveTime":"2019-10-12 10:08:22","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":5200.00,"roomFee":5200.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964263578959925/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"3011","roomPrice":200.00,"roomType":"大床房225","customerName":"44","arriveTime":"2019-10-12 10:08:23","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":0.00,"roomFee":0.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964263583154231/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"3012","roomPrice":200.00,"roomType":"大床房225","customerName":"55","arriveTime":"2019-10-12 10:08:23","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":5200.00,"roomFee":5200.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964263583154233/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"3013","roomPrice":200.00,"roomType":"大床房225","customerName":"3规范","arriveTime":"2019-10-12 10:08:22","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":5200.00,"roomFee":5200.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964263578959909/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"3014","roomPrice":200.00,"roomType":"大床房225","customerName":"3规范","arriveTime":"2019-10-12 10:08:22","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":5200.00,"roomFee":5200.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964263578959910/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"3015","roomPrice":200.00,"roomType":"大床房225","customerName":"3规范","arriveTime":"2019-10-12 10:08:22","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":5200.00,"roomFee":5200.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964263578959911/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"3016","roomPrice":200.00,"roomType":"大床房225","customerName":"3规范","arriveTime":"2019-10-12 10:08:22","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":5200.00,"roomFee":5200.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964263578959912/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"3017","roomPrice":200.00,"roomType":"大床房225","customerName":"3规范","arriveTime":"2019-10-12 10:08:22","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":5200.00,"roomFee":5200.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964263578959913/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"3018","roomPrice":200.00,"roomType":"大床房225","customerName":"3规范","arriveTime":"2019-10-12 10:08:22","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":5200.00,"roomFee":5200.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964263578959914/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"},{"groupId":null,"groupName":"高贵妃---964263352467461","roomNumber":"3019","roomPrice":200.00,"roomType":"大床房225","customerName":"3规范","arriveTime":"2019-10-12 10:08:22","departureTime":"2019-11-07 12:00:00","checkinStatus":"在住","debitFee":5200.00,"roomFee":5200.00,"otherFee":0.00,"totalFee":0.00,"remark":"","url":"/checkin/detail/964263578959915/bill?OrgId=1","occupationId":null,"estimateArriveTime":"2019-10-12 13:00:00"}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }

  componentDidMount() {
    let self = this;
    setTimeout(() => {
      self.changeLoad();
    },3000);

    setTimeout(() => {
      self.changeLoad([]);
    },6000);
  }

  changeLoad = (d) => {
    let nd = d||data;
    console.log(nd.length);
    this.setState({data:nd});
  }

  render() {
    return (
      <ReportTest data={this.state.data} />
    );
  }
}

export default App;
