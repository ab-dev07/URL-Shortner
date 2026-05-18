import mongoose from "mongoose";
const shortUrlSchema = new mongoose.Schema(
  {
    fullUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    clicks: {
      type: Number,
      required: true,
      default: 0,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      required: false,
    },
    custom: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
    maxClicks: {
      type: Number,
      default: 5000,
    },
  },
  {
    timestamps: true,
  },
);
const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);
export default ShortUrl;
