const mongoose=require('mongoose')




 const connectDB=(url)=>{
   return mongoose.connect(url,{
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify:false,
    useUnifiedTopology:true
 } )
 
 }

 mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);



module.exports=connectDB;


