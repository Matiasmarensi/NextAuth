import { NextResponse } from "next/server";
import User from "@/models/users";
import bcryptjs from "bcryptjs";
import { conectDB } from "@/libs/mogodb";
export async function POST(request: Request) {
  const { fullname, email, password } = await request.json();

  if (!fullname || !email || !password) {
    return NextResponse.json({ message: "faltan datos" }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json({ message: "contraseña muy corta" }, { status: 400 });
  }
  try {
    await conectDB();

    const userFound = await User.findOne({ email });

    if (userFound) {
      return NextResponse.json({ message: "usuario ya existe" }, { status: 409 });
    }
    const hashedPassword = await bcryptjs.hash(password, 12);

    const user = new User({ fullname, email, password: hashedPassword });

    const userSeved = await user.save();

    return NextResponse.json({ message: "singup" });
  } catch (error) {
    console.log(error);
  }
}
