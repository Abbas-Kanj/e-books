import { Schema, model, models } from "mongoose";

const ReportSchema = new Schema(
  {
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    resolved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Report = models.Report || model("Report", ReportSchema);

export default Report;
