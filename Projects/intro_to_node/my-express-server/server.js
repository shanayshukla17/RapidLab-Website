//  jshint esversion:6
const express=require("express");
const app=express();
app.get("/",function(request,response)
{
  response.send("<h1>Hello</h1>");
})
app.get("/contact",function(request,response)
{
  response.send("Contact me");
})
app.get("/about",function(request,response)
{
  response.send("I am Shanay Shukle");
})
app.listen(3000,function(){
  console.log("Server has started ")
});
