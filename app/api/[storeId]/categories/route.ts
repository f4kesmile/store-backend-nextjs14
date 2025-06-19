import { NextResponse } from "next/server";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

// GET /api/[storeId]/categories
export async function GET(
  req: Request,
  context: { params: Promise<{ storeId: string }> }
) {
  try {
    const { storeId } = await context.params;

    if (!storeId) {
      return new NextResponse("Store ID tidak valid", { status: 400 });
    }

    const categories = await db.category.findMany({
      where: { storeId },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.log("[CATEGORIES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

// POST /api/[storeId]/categories
export async function POST(
  req: Request,
  context: { params: Promise<{ storeId: string }> }
) {
  try {
    const { storeId } = await context.params;
    const { userId } = await auth();
    const { name, bannerId } = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    if (!name) return new NextResponse("Nama Category perlu diinput", { status: 400 });
    if (!bannerId) return new NextResponse("Banner Id perlu diinput", { status: 400 });

    const storeByUserId = await db.store.findFirst({
      where: { id: storeId, userId },
    });

    if (!storeByUserId) return new NextResponse("Unauthorized", { status: 403 });

    const category = await db.category.create({
      data: { name, bannerId, storeId },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORIES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
