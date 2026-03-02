<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('products', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->decimal('price', 10, 2);
        $table->decimal('old_price', 10, 2)->nullable(); 
        $table->string('img')->nullable();
        $table->integer('order_count')->default(0);
        $table->string('shipping_info')->nullable();
        $table->text('description');
        $table->string('category');
        $table->string('brand')->nullable();
        $table->string('condition')->nullable();
        $table->integer('rating')->default(4);
        $table->integer('stock')->default(10);
        $table->boolean('is_verified')->default(false); 
        $table->boolean('is_featured')->default(false); 
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
