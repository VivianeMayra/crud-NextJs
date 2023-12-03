import { NextRequest, NextResponse } from "next/server"

import prisma from "../../../../lib/db"

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json({ message: "OK", users })
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      {
        status: 500,
      }
    )
  }
}

export async function POST(req: Request) {
  const { name, email, phone, adress, pet } = await req.json()
  try {
    const user = await prisma.user.create({
      data: { name, email, phone, adress, pet },
    })
    return NextResponse.json({ message: "OK", user })
  } catch (err) {
    console.error("Erro ao criar usuário:", err)
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      {
        status: 500,
      }
    )
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json()
  try {
    const user = await prisma.user.delete({
      where: { id },
    })
    return NextResponse.json({ message: "OK", user })
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      {
        status: 500,
      }
    )
  }
}

export async function PUT(req: Request) {
  const { id, name, email, phone, adress, pet } = await req.json()
  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        phone,
        adress,
        pet,
      },
    })
    return NextResponse.json({ message: "OK", user })
  } catch (err) {
    console.error("Erro ao atualizar usuário:", err)
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      {
        status: 500,
      }
    )
  }
}
