import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rupsha:9836851445@cluster0.y17ux70.mongodb.net/food-del').then(()=>console.log("DB connected"));
}