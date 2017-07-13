const WebSocket = require('ws');
const ws = new WebSocket("ws://127.0.0.1:1337");
const QuoteData = require("./datatypes/quote_data");

let quotes = {};

ws.on('open', () => {
  ws.send(JSON.stringify({ type: "F" }));
});

ws.on('message', (data, flags) => {
  // Parse the json array response
  let arr = JSON.parse(data);

  if(arr[0] === "Q") {
    // store latest quote for ticker in memory
    let qd = new QuoteData(arr);
    quotes[qd.ticker] = qd;

    console.log(qd);
  }

});