const express=require("express");
const router=express.Router();
const {GetAllTasks,CreateTask,GetSingleTask,UdateTask,DeleteTask}=require('../controllers/tasks');

router.get("/",GetAllTasks)

router.post("/",CreateTask)

router.get("/:id",GetSingleTask)

router.patch("/:id",UdateTask)

router.delete("/:id",DeleteTask)


module.exports=router;

