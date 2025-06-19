import db from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { storeId: string; orderId: string } }
) {
  try {
    const { isPaid } = await req.json();

    // Validasi storeId dan orderId
    if (!params.storeId || !params.orderId) {
      return NextResponse.json({ error: 'Store ID and Order ID are required' }, { status: 400 });
    }

    // Cek apakah order ada di store yang benar
    const order = await db.order.findUnique({
      where: {
        id: params.orderId,
        storeId: params.storeId,
      },
    });

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    // Update status pembayaran
    const updatedOrder = await db.order.update({
      where: {
        id: params.orderId,
      },
      data: {
        isPaid,
      },
    });

    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.error('Order update failed:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}