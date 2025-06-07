import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shreyanshshrivastavss08:Q86AIOIiSJTjoG2L@cluster1.bnraw1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1').then(() => console.log("DB connected"));
}