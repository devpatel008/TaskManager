const errorHandleMiddleWare=(err,req,res,next)=>{
   res.status(500).json({msg:"something went wrong"});
}

module.exports=errorHandleMiddleWare;