const mongoose=require('mongoose')
const Campground=require('../model/campground')
const test=require('./test');


mongoose.connect('mongodb://127.0.0.1:27017/RapidLab',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const db=mongoose.connection
db.on("error",console.error.bind(console,"connection error"))
db.once("open",() => {
    console.log('Connected');
})


const seedDB=  async () => {
    await Campground.deleteMany({});
    for (let i=0;i<3;i++){
        const camp=new Campground({
            title:`${test[i].title}`,
            image:`${test[i].image}`,
            description:`${test[i].description}`
        })
        await camp.save()
    }
}

seedDB().then(() =>{
    mongoose.connection.close();
});


