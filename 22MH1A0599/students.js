
const express=require('express'); let app=express();
const fs=require('fs'); app.use(express.json())
let router=express.Router();
let data=JSON.parse(fs.readFileSync('./7a/students.json')); router.get('/students/:id',(req,res)=>{
const id=req.params.id*1;
let student=data.find(ele=>ele.id===id); if(!student){
res.status(404).send("no student found with id:"+id);
}
res.json(student);
})
router.get('/student/:name',(req,res)=>{ const name=req.params.name;
let student=data.find(ele=>ele.name===name); if(!student){
res.status(404).send("no student found with name:"+name);
}
res.json(student);
})
router.get('/student',(req,res)=>{ const name=req.query.name;
let student=data.find(ele=>ele.name===name); if(!student){
res.status(404).send("no student found with name:"+name);
}
res.json(student);
})
router.get('/students',(req,res)=>{ const id=req.query.id*1;
let student=data.find(ele=>ele.id===id); if(!student)
    {
        res.status(404).send("no student found with id:"+id);
    }
    res.json(student);
    })
    module.exports=router;
    
    
