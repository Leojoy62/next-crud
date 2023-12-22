import connectMongoDB from "@/libs/Mongodb";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";

export async function DELETE(request, content) {
  const id = content.params.id;
  const query = { _id: id };
  await connectMongoDB();
  const result = await Topic.deleteOne(query);
  return NextResponse.json({ result, success: true });
}
export async function GET(request, content) {
  const id = content.params.id;
  const query = { _id: id };
  await connectMongoDB();
  const result = await Topic.findById(query);
  return NextResponse.json({ result, success: true });
}
export async function PUT(request, content) {
  const id = content.params.id;
  const query = { _id: id };
  const { newtitle: title, newdescription: description } = await request.json();
  await connectMongoDB();
  const result = await Topic.findByIdAndUpdate(query, { title, description });
  return NextResponse.json({ result, success: true });
}
