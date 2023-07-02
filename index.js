import express from "express";
import cors from "cors";
import userRoutes from "./src/routes/Users.js";
import questionRoutes from "./src/routes/Questions.js";
import answerRoutes from "./src/routes/Answers.js";
import chatbotRoutes from "./src/routes/Chatbot.js";
import connectDB from './src/db/connectDB.js'
import otpRoutes from './src/routes/Otp.js'
  

connectDB()

const PORT = process.env.PORT || 5000

const app = express();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);
app.use("/chatbot", chatbotRoutes)
app.use('/otp', otpRoutes)


app.get('/', (req, res) => {
  res.send("This is a stack overflow clone's API")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
