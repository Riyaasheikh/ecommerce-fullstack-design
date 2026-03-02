<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


    class Order extends Model
{
    protected $fillable = ['user_id', 'total_amount', 'status', 'shipping_address', 'payment_status', 'payment_id'];

    public function items() {
        return $this->hasMany(OrderItem::class); 
    }

    public function user() {
        return $this->belongsTo(User::class); 
    }
}
