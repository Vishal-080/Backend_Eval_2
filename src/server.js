const app = require ("./index");
const connect = require("./configs/db");


app.listen(3000, async ()=>{
    await connect();
    console.log("Connected to Port number 3000");
})