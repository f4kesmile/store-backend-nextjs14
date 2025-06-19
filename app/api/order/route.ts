
import db from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  const { storeId, items, phone, address, isPaid=false } = await req.json();

  if (!items || items.length === 0) {
    return NextResponse.json({ error: 'No items in cart' }, { status: 400 });
  }

  const orderId = uuidv4();

  try {
    const order = await db.order.create({
      data: {
        id: orderId,
        storeId,
        phone,
        address,
        isPaid,
        orderItems: {
          create: items.map((item: { productId: string }) => ({
            product: { connect: { id: item.productId } },
          })),
        },
      },
      include: {
        orderItems: {
          include: { product: true },
        },
      },
    });

    return NextResponse.json({ order });
  } catch (error) {
    console.error('Order creation failed:', error);
    return NextResponse.json({ error: 'Order creation failed' }, { status: 500 });
  }
}
