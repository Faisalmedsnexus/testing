import { NextResponse } from "next/server";
import { user } from "../../../util/db";
import { Result } from "postcss";

export function GET(resquest, Content) {
  const userData = user.filter((item) => item.id == Content.params.id);
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData, success: true },
    { status: 200 }
  );
}

export async function PUT(request, Content) {
  const payload = await request.json();
  payload.id = Content.params.id;

  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "request data is not valid", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export async function DELETE(request, content) {
  let id = content.params.id;

  if (id) {
    return NextResponse.json(
      { result: "User deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Internal error", success: false },
      { status: 400 }
    );
  }
}
