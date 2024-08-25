import mongoose from "mongoose";

export const dbConnect = ()=> {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "hospital_management_system"
    }).then(()=>{
        console.log("Connected to Db");
    }).catch(error=>{
        console.log(`error occured while connecting db: ${error}`);
    })
}