const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+ "/date.js");

console.log(date.getDay());
console.log(date.getDate())



const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var items = ["Build Snake Game","Learn EJS","Algorithms"];
var workItems = [];

app.get('/', function(req,res){

    let day = date.getDate();
    
    res.render("lists", {listTitle: day, addItem: items});


});

app.get('/work', function(req,res){
    res.render("lists", {listTitle: "Work List", addItem: workItems})

})

app.get('/about',function(req,res){
    res.render("about")
})


app.post("/",function(req,res){

    console.log(req.body)

    if(req.body.lists === "Work"){
        var work = req.body.newItem
        workItems.push(work);
        res.redirect("/work")

    }
    else {
        var item = req.body.newItem;
        items.push(item);
        res.redirect("/");
    }
});

app.listen(4040, function(){
    console.log("server up and running at port: 4040");
})