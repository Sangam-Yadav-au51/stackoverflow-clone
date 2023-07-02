import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://vishalrao026:vishal123@cluster0.cappgfo.mongodb.net/", { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    })
    console.log(`Connected to MongoDB successfully`)
  } catch (error) {
    console.log(`MongoDB Error: ${error}`)
  }
} 

export default connectDB