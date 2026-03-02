<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/products', [ProductController::class, 'index']); 
Route::get('/products/{id}', [ProductController::class, 'show']); 


Route::middleware('auth:sanctum')->group(function () {
    
    
    Route::get('/user', function (Request $request) { return $request->user(); });
    Route::post('/logout', [AuthController::class, 'logout']); 

    
    Route::prefix('cart')->group(function () {
        Route::get('/', [CartController::class, 'index']);
        Route::post('/add', [CartController::class, 'store']);
        Route::delete('/{id}', [CartController::class, 'destroy']);
    });

    
    Route::post('/checkout', [OrderController::class, 'checkout']);
    Route::get('/my-orders', [OrderController::class, 'userOrders']);
});


Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);
    
    
    Route::get('/admin/orders', [OrderController::class, 'allOrders']);
    Route::put('/admin/orders/{id}/status', [OrderController::class, 'updateStatus']);
});