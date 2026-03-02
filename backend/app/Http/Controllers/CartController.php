<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function store(Request $request) {
    $cartItem = Cart::updateOrCreate(
        ['user_id' => $request->user()->id, 'product_id' => $request->product_id],
        ['quantity' => DB::raw('quantity + 1')] 
    );

    return response()->json(['message' => 'Added to cart!', 'cart' => $cartItem]);
}
}
