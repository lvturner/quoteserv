/**
 * Created by lvturner on 13/7/2017.
 */
'use strict';

class TickData {
  constructor(jsonArray) {
    // this.type = jsonArray[0];
    this.timestamp = jsonArray[1];
    this.nanoseconds = jsonArray[2];
    this.ticker = jsonArray[3];
    this.asset_halted = jsonArray[11];
    this.after_hours = jsonArray[12];
    this.iso_order = jsonArray[13];
    this.odd_lot = jsonArray[14];
    this.nms611 = jsonArray[15];
  }
}

module.exports = TickData;
