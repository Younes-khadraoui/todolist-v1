const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

const items = ["Buy Food","cook food","Eat food"];
const workItems = []; 

app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const day = date.getDate();
  res.render('list', {
    theListType: day ,
    newListItem : items
  })
})

app.post('/', (req, res) => {
  const item = req.body.newItem

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  } else { 
    items.push(item);
    res.redirect("/");
  }
})

app.get("/work", (req, res) => {
  res.render('list', {
    theListType: "Work List",
    newListItem : workItems
  })
  
})

app.get("/about", (req, res) => {
  res.render("about");
})











app.listen(3500 , () => {
  console.log("listening on port 3500");
})
