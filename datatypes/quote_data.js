/**
 * Created by lvturner on 13/7/2017.
 */
'use strict';
const TickData = require('tick_data');

class QuoteData extends TickData {
  constructor(jsonArray) {
    super(jsonArray);

    this.shares_at_bid_price = jsonArray[4];
    this.current_bid_price = jsonArray[5];
    this.latest_mid_price = jsonArray[6];
    this.current_ask_price = jsonArray[7];
    this.shares_at_ask_price = jsonArray[8];
  }
}

module.exports = QuoteData;
