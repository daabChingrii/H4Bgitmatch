import express from "express";
import cors from "cors";

const PORT  = process.env.PORT || 8000
const app = express();
app.use(cors());

app.listen(PORT, ()=>console.log(`Port is running on ${PORT}`));