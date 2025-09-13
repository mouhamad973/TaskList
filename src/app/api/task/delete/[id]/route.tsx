import Task from "@/app/models/tasks";
import { connectToDB } from "@/app/utils/database";

import { NextResponse } from "next/server";
import { IDeleteTaskRequestParam } from "@/app/types";

export const DELETE = async (
  request: Request,
  { params }: IDeleteTaskRequestParam
) => {
  try {
    await connectToDB(), await Task.findByIdAndDelete(params.id);
    return NextResponse.json("Task deleted successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to delete a task", { status: 500 });
  }
};
