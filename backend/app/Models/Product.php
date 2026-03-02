<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['title', 'price', 'img', 'order_count', 'shipping_info', 'description', 'category', 'stock'];
}
