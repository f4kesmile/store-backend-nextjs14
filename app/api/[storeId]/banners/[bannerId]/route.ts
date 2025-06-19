import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// GET banner by ID
export async function GET(
  req: Request,
  context: { params: Promise<{ bannerId: string }> }
) {
  try {
    const params = await context.params;

    if (!params.bannerId) {
      return new NextResponse("Banner id Dibutuhkan", { status: 400 });
    }

    const banner = await db.banner.findUnique({
      where: {
        id: params.bannerId,
      },
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.log("[BANNER_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

// PATCH update banner
export async function PATCH(
  req: Request,
  context: { params: Promise<{ storeId: string; bannerId: string }> }
) {
  try {
    const params = await context.params;
    const { userId } = await auth();
    const body = await req.json();

    const { label, imageUrl } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!label) {
      return new NextResponse("Harus Menginput label", { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse("Harus Menginput imageUrl", { status: 400 });
    }

    if (!params.bannerId) {
      return new NextResponse("Banner id Dibutuhkan", { status: 400 });
    }

    const storeByUserId = await db.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const banner = await db.banner.updateMany({
      where: {
        id: params.bannerId,
      },
      data: {
        label,
        imageUrl,
      },
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.log("[BANNER_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

// DELETE banner
export async function DELETE(
  req: Request,
  context: { params: Promise<{ storeId: string; bannerId: string }> }
) {
  try {
    const params = await context.params;
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.bannerId) {
      return new NextResponse("Banner id Dibutuhkan", { status: 400 });
    }

    const storeByUserId = await db.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const banner = await db.banner.deleteMany({
      where: {
        id: params.bannerId,
      },
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.log("[BANNER_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
