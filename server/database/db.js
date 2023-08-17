import mongoose from "mongoose";

const Connection = async (username ='kheriwalprince6108', password ='iamroot')=>
{
    const URL = `mongodb+srv://${username}:${password}@cluster0.jfgdwga.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser:true});
        console.log('database connected succesfully');
    }catch(error){
        console.log('Eror while connecting to the datbase',error);
    }
}
export default Connection;
