const express=require('express');
const path=require('path')
const app=express();
const mongoose=require('mongoose');
const Campground=require('./model/campground')
const Gallery=require('./model/gallery')
const methodOverride=require('method-override')
const ejsMate=require('ejs-mate')

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.engine('ejs',ejsMate)

mongoose.connect('mongodb://127.0.0.1:27017/RapidLab',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const db=mongoose.connection
db.on("error",console.error.bind(console,"connection error"))
db.once("open",() => {
    console.log('DATABASE CONNECTED');
})


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname,'public')))


app.listen(3000,()=>{
    console.log('Listening to the port 3000');
})


app.get('/home',async(req,res)=>{
    const campgrounds=await Campground.find({})
    res.render('home',{campgrounds})
})



app.get('/home/add',async(req,res)=>{
    res.render('add');
})


app.post('/home',async (req,res)=>{
    const campground=new Campground(req.body.campground)
    await campground.save()
    res.redirect('/home');
})



app.get('/home/gallery',async(req,res)=>{
   // await Gallery.deleteMany({});
    const galleries=await Gallery.find({})
    res.render('image',{galleries});
})



app.get('/home/gallery/add',async(req,res)=>{
    //await Gallery.deleteMany();
    res.render('add_photo');
})


app.post('/home/gallery',async(req,res)=>{
    const gallery_recieve=new Gallery(req.body.gallery);
    await gallery_recieve.save();
    res.redirect('/home/gallery')
})



app.get('/home/gallery/delete',async(req,res)=>{
    res.render('delete_photo');
})


app.delete('/home/gallery',async(req,res)=>{
    console.log(req.body.image)
    await Gallery.deleteOne({image:req.body.image});
    res.redirect('/home/gallery');

})



app.get('/home/contact',async(req,res)=>{
    res.render('contact_us');
})