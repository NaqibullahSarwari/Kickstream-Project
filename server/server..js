import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const server = express()

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));



server.listen(process.env.PORT, (req, res) => console.log(`Server is running on PORT ${process.env.PORT}` ))