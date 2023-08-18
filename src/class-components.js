import React, { Component } from "react";

export default class Calendar extends Component {
  getDate() {
    const dayNames = [
      "เสาร์",
      "อาทิตย์",
      "จันทร์",
      "อังคาร",
      "พุธ",
      "พฤหัส",
      "ศุกร์",
      "เสาร์",
    ];
    const monthNames = [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ];
    const date = new Date();
    const weekDay = dayNames[date.getDay()];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear() + 543;
    return `วัน${weekDay} ที่ ${day} ${month} ${year}`;
  }

  render() {
    return <div> {this.getDate()} </div>;
  }
}

export class Button extends Component {
  showAlert(msg) {
    alert(msg);
  }

  onClickButtonOK() {
    this.showAlert("Hello");
  }

  render() {
    return <button onClick={this.onClickButtonOK}> OK </button>;
  }
}
