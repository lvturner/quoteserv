'use strict';
const TickData = require('tick_data');

class TradeData extends TickData {
  constructor(jsonArray) {
    super(jsonArray);

    this.last_trade_price = jsonArray[9];
    this.volume_at_last_price = jsonArray[10];
  }
}

module.exports = TradeData;
