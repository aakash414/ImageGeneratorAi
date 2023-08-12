import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAiApi } from "openai";
import PostSchema from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();
