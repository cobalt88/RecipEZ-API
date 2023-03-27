import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config/database";
import cluster from "node:cluster";

const app = express();
