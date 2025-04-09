const express=require('express'); let app=express(); app.use(express.json())
const fs=require('fs');
let router=express.Router();
let data=JSON.parse(fs.readFileSync('./7a/staff.json')); router.get('/staff/:id',(req,res)=>{
const id=req.params.id*1;
let staff1=data.find(ele=>ele.id===id); if(!staff1){
res.status(404).send("no staff found with id:"+id);
}
res.json(staff1);
})
router.get('/staf/:name',(req,res)=>{ const name=req.params.name;
let staff1=data.find(ele=>ele.name===name); if(!staff1){
res.status(404).send("no staff found with name:"+name);
}
res.json(staff1);
})
router.get('/staf',(req,res)=>{ const name=req.query.name;
let staff1=data.find(ele=>ele.name===name); if(!student){
res.status(404).send("no staff found with name:"+name);
}
res.json(staff1);
})
router.get('/staff',(req,res)=>{ const id=req.query.id*1;
let staff=data.find(ele=>ele.id===id); if(!staff){
res.status(404).send("no staff found with id:"+id);
}
res.json(staff);
})
module.exports=router;

