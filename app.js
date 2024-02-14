const express=require("express");
 const notFound=require("./middleware/not-found")
 const errorHandleMiddleWare=require("./middleware/error-handler");
const app =  express();
const port = 3000;
const router=require("./routes/TASK");
const connectDB=require("./db/connect");
require("dotenv").config()
//
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/tasks",router);
app.use(notFound);
app.use(errorHandleMiddleWare);


 const start= async ()=>{
   try{
      await connectDB(process.env.MONGO_URI);
       app.listen(port, () => console.log(`Example app listening on port ${port}!`));
   }
   catch(err){
        console.log(err);
   }

}


start();
 
 
