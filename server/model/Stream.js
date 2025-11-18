import mongoose from "mongoose";

const StreamSchema = new mongoose.Schema(
  {
    ingressId: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    thumbnailUrl: {
      type: String,
      default: "",
    },
    replayUrl: {
      type: String,
      default: "",
    },
    serverUrl: {
      type: String,
    },
    streamKey: {
      type: String,
    },
    streamUrl: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    isLive: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    startedAt: {
      type: Date,
    },
    endedAt: {
      type: Date,
    },
    viewerCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model re-compilation during development
const Stream = mongoose.models.Stream || mongoose.model("Stream", StreamSchema);

export default Stream;

