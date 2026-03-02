<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function checkout(Request $request)
    {
        $request->validate([
            'shipping_address' => 'required|string',
            'total_amount' => 'required|numeric',
        ]);

        $user = $request->user();

        $cartItems = Cart::where('user_id', $user->id)->get();

        if ($cartItems->isEmpty()) {
            return response()->json(['message' => 'Cart is empty'], 400);
        }

        return DB::transaction(function () use ($request, $user, $cartItems) {
            
            $order = Order::create([
                'user_id' => $user->id,
                'total_amount' => $request->total_amount,
                'shipping_address' => $request->shipping_address,
                'status' => 'pending',
                'payment_status' => 'pending', 
            ]);

            foreach ($cartItems as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item->product_id,
                    'quantity' => $item->quantity,
                    'price' => $item->product->price, 
                ]);
            }

            Cart::where('user_id', $user->id)->delete();

            return response()->json([
                'message' => 'Order placed successfully!',
                'order_id' => $order->id
            ], 201);
        });
    }
    public function userOrders(Request $request) {
        return response()->json(
            Order::with('items.product')->where('user_id', $request->user()->id)->latest()->get()
        );
    }
}