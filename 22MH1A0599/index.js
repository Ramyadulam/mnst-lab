const express=require('express'); 
let app=express(); 
app.listen(3000,()=>{
    console.log("server is running at 3000");
    })
    let students=require('./routes/students.js'); 
    let staff=require('./routes/staff.js'); 
    app.use('/stu',students); 
    app.use('/staf',staff);
    
    