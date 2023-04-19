


const express = require("express")
const app = express();


app.set("view engine", "ejs");
app.use(express.static("SASKE"));

app.get("/store", function (req, res){
  fs.readFile("data.json", function (e, data) {
    if (e) {
      res.status(500).end();
    } else {
      res.render("store.ejs",{
        items: JSON.parse(data),
      });
    }
  });
});


app.listen(5000, () => console.log("Server has been started on port 5000..."));