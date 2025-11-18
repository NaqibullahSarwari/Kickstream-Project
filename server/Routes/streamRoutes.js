import express from "express";
import {
  createIngress,
  resetIngress,
  getStreamByUserId,
  getStreams,
  getStreamById,
} from "../Controller/streamController.js";

const router = express.Router();

// Create or get RTMP ingress
router.post("/ingress", createIngress);

// Reset ingress (delete and create new)
router.post("/ingress/reset", resetIngress);

// Get stream by userId
router.get("/stream/:userId", getStreamByUserId);

// List streams
router.get("/streams", getStreams);

// Get stream by document id
router.get("/stream/id/:id", getStreamById);

export default router;

