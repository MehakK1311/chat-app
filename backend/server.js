const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const {notFound, errorHandler} = require("./middleware/errorMiddleware")
const chatRoutes = require("./routes/chatRoutes")

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send("API is Running");
});

app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));