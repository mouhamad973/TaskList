import Task from "@/app/models/tasks";
import { connectToDB } from "@/app/utils/database";

import { NextResponse } from "next/server";
import { IDeleteTaskRequestParam } from "@/app/types";

export const PATCH = async (
  request: Request,
  { params }: IDeleteTaskRequestParam
) => {
  try {
    await connectToDB();
    const existingTask = await Task.findById(params.id);
    if (!existingTask) {
      return NextResponse.json("Task not found", { status: 404 });
    }
    existingTask.completed = true;
    await existingTask.save();
    return NextResponse.json(existingTask, { status: 200 });
  } catch (error) {
    console.error("Error completing task:", error);
    return NextResponse.json(
      { error: "Internal server error while completing task" }, 
      { status: 500 }
    );
  }
};
