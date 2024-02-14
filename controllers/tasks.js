const Task=require("../model/task");
const asyncWrapper=require("../middleware/async");


const GetAllTasks= asyncWrapper(async(req,res)=>{
    
    const tasks= await Task.find({})
    res.status(200).json({tasks});
        
    
    
})

const CreateTask= asyncWrapper(async(req,res)=>{

        const task=await Task.create(req.body);
        res.status(201).json({task});
  
})



const GetSingleTask= asyncWrapper(async (req,res)=>{

        const{id:taskID}=req.params;
        const task=await Task.findOne({_id: taskID});
     if(!task){
         return res.json({msg:`No Task With id: ${taskID}`});
     }
     
        res.status(200).json({task});
    
})



const DeleteTask= asyncWrapper(async(req,res)=>{
        const{id:taskID}=req.params;
        const task=await Task.findOneAndDelete({_id: taskID});
     if(!task){
         return res.json({msg:`No Task With id: ${taskID}`});
     }
     res.status(200).json({task});
})



const UdateTask= asyncWrapper(async(req,res)=>{
   
        
        const{id:taskID}=req.params;
        const task=await Task.findByIdAndUpdate({_id:taskID},req.body,{
         new:true,
         runValidators:true,
        }); 
        if(!task){
            return res.json({msg:`No Task With id: ${taskID}`});
        }
        res.status(200).json({task});
   
})


module.exports={
    GetAllTasks,CreateTask,GetSingleTask,UdateTask,DeleteTask
}


