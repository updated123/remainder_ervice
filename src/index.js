const express =require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig');

const setupAndstartserver=()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT,()=>{
      console.log(`serer started at port ${PORT}`);
    });
}

setupAndstartserver();