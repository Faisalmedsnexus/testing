import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionSrt } from "../../../lib/db";
import Product from "../../../lib/model/product";

export async function PUT(request, content) {
  const productId = content.params.productid;

  const filter = { _id: productId };
  const payload = await request.json();

  await mongoose.connect(connectionSrt);
  const result = await Product.findOneAndUpdate(filter, payload);

  console.log(result);
  //  const result = [];
  return NextResponse.json({ result, success: true });
}

export async function GET(request, content) {
  const productId = content.params.productid;
  const filter = { _id: productId };

  await mongoose.connect(connectionSrt);
  const result = await Product.findOne(filter);

  return NextResponse.json({ result, success: true });
}

export async function DELETE(request, content) {
  const productId = content.params.productid;
  const filter = { _id: productId };

  await mongoose.connect(connectionSrt);
  const result = await Product.deleteOne(filter);
  return NextResponse.json({ result, success: true });
}
