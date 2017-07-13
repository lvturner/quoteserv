/**
 * Created by lvturner on 13/7/2017.
 */

'use strict';
const TickData = require('tick_data');

class TradeBreakData extends TickData {
  constructor(jsonArray) {
    super(jsonArray);

    this.last_trade_price = jsonArray[9];
    this.volume_at_last_price = jsonArray[10];
  }
}

module.exports = TradeBreakData;
