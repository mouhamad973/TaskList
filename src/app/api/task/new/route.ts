import Task from "@/app/models/tasks";
import { connectToDB } from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { task } = await req.json();
  try {
    await connectToDB();
    const newTask = new Task({ task });
    await newTask.save();
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create a new task", { status: 500 });
  }
}
