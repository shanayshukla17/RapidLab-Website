const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const GallerySchema=new Schema({
    image:String,
    lattitude:Number,
    longitude:Number
});

module.exports=mongoose.model('Gallery',GallerySchema);