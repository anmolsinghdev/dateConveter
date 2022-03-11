const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));

app.post("/date", (req, res, next) => {
  const { month } = req.body;
  var date = Date.now(); //current Date
  var dateOne = new Date(); //current Date in Timestamp

  var dateOne = dateOne.toLocaleString().split(",")[0]; //convert into normal format

  var dateTwo = new Date(); //initialize date Again for Add month
  var timestamp = dateTwo.setMonth(dateTwo.getMonth() + month); //adding month into Date

  //!convert normal Date Into TimeStamp
  var timestamp2 = new Date(timestamp);
  var AddedDate = timestamp2.toLocaleString().split(",")[0]; //convert into normal format
  res.json({
    CurrentDate: dateOne,
    CurrentDateIntoTimeStamp: date,
    AddedMonthDate: AddedDate,
    AddedMonthDateIntoTimeStamp: timestamp,
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
