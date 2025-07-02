import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/applicantion.router.js";

dotenv.config({});
const app = express();

// const _dirname = path.resolve()
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: 'https://job-frontend-dusky-phi.vercel.app/',
    // origin:"https://job-hunt-frontend-t6um.onrender.com",
    // origin: ["http://localhost:5173", "https://your-frontend-service.onrender.com"],
    credentials: true,
};
app.use(cors(corsOptions));
 
app.get("/test",(req,res)=>{
    res.send("chal rha hai bhai");
})

// Server
const port = process.env.PORT || 3000;

app.use("/api/v1/user",userRoute) 
app.use("/api/v1/company",companyRoute)
app.use("/api/v1/job",jobRoute)
app.use("/api/v1/application",applicationRoute)

// app.use(express.static(path.join(_dirname,"/Frontend/dist")));
// app.get('*',(_,res)=>{
//     res.sendFile(path.resolve(_dirname,"Frontend","dist","index.html"));
// });


const server = app.listen(port, () => {
    connectDB();
    console.log(`Server running at port ${port}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`❌ Port ${port} is already in use. Please stop the other process or use a different port.`);
    process.exit(1);
  } else {
    console.error("❌ Server error: ", err);
  }
});



   // "multer": "^1.4.5"