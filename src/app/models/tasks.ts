import mongoose, { Schema, model, models } from "mongoose";
import { ITasks } from "../types";

const taskShema = new Schema<ITasks>({
  task: {
    type: String,
    required: [true, "Task is required."],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = models.Task || model<ITasks>("Task", taskShema);
export default Task;
