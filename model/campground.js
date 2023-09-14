const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const CampgroundSchema=new Schema({
    title:String,
    image:String,
    description:String
});


module.exports=mongoose.model('Campground',CampgroundSchema);