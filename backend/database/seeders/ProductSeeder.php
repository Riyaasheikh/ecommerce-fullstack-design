<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            
            ['title' => 'Canon Cmera EOS 2000, Black 10x zoom', 'price' => 998.00, 'img' => 'img1.jpeg', 'order_count' => 154, 'shipping_info' => 'Free Shipping', 'category' => 'Electronics', 'description' => 'High quality camera.', 'stock' => 10],
            ['title' => 'Canon Cmera EOS 2000, Black 10x zoom', 'price' => 998.00, 'img' => 'img2.jpeg', 'order_count' => 154, 'shipping_info' => 'Free Shipping', 'category' => 'Electronics', 'description' => 'High quality camera.', 'stock' => 10],
            ['title' => 'Canon Cmera EOS 2000, Black 10x zoom', 'price' => 1298.00, 'img' => 'image 23.png', 'order_count' => 154, 'shipping_info' => 'Free Shipping', 'category' => 'Electronics', 'description' => 'High quality camera.', 'stock' => 10],
            ['title' => 'Canon Cmera EOS 2000, Black 10x zoom', 'price' => 998.00, 'img' => '6.png', 'order_count' => 154, 'shipping_info' => 'Free Shipping', 'category' => 'Electronics', 'description' => 'High quality camera.', 'stock' => 10],
            ['title' => 'Canon Cmera EOS 2000, Black 10x zoom', 'price' => 998.00, 'img' => 'img2.jpeg', 'order_count' => 154, 'shipping_info' => 'Free Shipping', 'category' => 'Electronics', 'description' => 'High quality camera.', 'stock' => 10],
            ['title' => 'Canon Cmera EOS 2000, Black 10x zoom', 'price' => 998.00, 'img' => 'image 29.png', 'order_count' => 154, 'shipping_info' => 'Free Shipping', 'category' => 'Electronics', 'description' => 'High quality camera.', 'stock' => 10],
            ['title' => 'Canon Cmera EOS 2000, Black 10x zoom', 'price' => 998.00, 'img' => 'img1.jpeg', 'order_count' => 154, 'shipping_info' => 'Free Shipping', 'category' => 'Electronics', 'description' => 'High quality camera.', 'stock' => 10],
            ['title' => 'Canon Cmera EOS 2000, Black 10x zoom', 'price' => 998.00, 'img' => 'image 23.png', 'order_count' => 154, 'shipping_info' => 'Free Shipping', 'category' => 'Electronics', 'description' => 'High quality camera.', 'stock' => 10],
            ['title' => 'Canon Cmera EOS 2000, Black 10x zoom', 'price' => 998.00, 'img' => '6.png', 'order_count' => 154, 'shipping_info' => 'Free Shipping', 'category' => 'Electronics', 'description' => 'High quality camera.', 'stock' => 10],
            ['title' => 'Canon Cmera EOS 2000, Black 10x zoom', 'price' => 998.00, 'img' => 'img2.jpeg', 'order_count' => 154, 'shipping_info' => 'Free Shipping', 'category' => 'Electronics', 'description' => 'High quality camera.', 'stock' => 10],

         
            ['title' => 'Xiaomi Redmi 8 Original', 'price' => 32.00, 'img' => 'picture/image 24.png', 'order_count' => 2, 'shipping_info' => 'Standard Shipping', 'category' => 'Mobile', 'description' => 'Original Xiaomi Redmi 8.', 'stock' => 20],
            ['title' => 'Xiaomi Redmi 8 Original', 'price' => 32.00, 'img' => '6.png', 'order_count' => 0, 'shipping_info' => 'Standard Shipping', 'category' => 'Mobile', 'description' => 'Original Xiaomi Redmi 8.', 'stock' => 20],
            ['title' => 'Xiaomi Redmi 8 Original', 'price' => 32.00, 'img' => 'image 23.png', 'order_count' => 0, 'shipping_info' => 'Standard Shipping', 'category' => 'Mobile', 'description' => 'Original Xiaomi Redmi 8.', 'stock' => 20],
            ['title' => 'Xiaomi Redmi 8 Original', 'price' => 32.00, 'img' => 'image 29.png', 'order_count' => 0, 'shipping_info' => 'Standard Shipping', 'category' => 'Mobile', 'description' => 'Original Xiaomi Redmi 8.', 'stock' => 20],
            ['title' => 'Xiaomi Redmi 8 Original', 'price' => 32.00, 'img' => 'image 24.png', 'order_count' => 0, 'shipping_info' => 'Standard Shipping', 'category' => 'Mobile', 'description' => 'Original Xiaomi Redmi 8.', 'stock' => 20],
            ['title' => 'Xiaomi Redmi 8 Original', 'price' => 32.00, 'img' => 'interior.png', 'order_count' => 0, 'shipping_info' => 'Standard Shipping', 'category' => 'Mobile', 'description' => 'Original Xiaomi Redmi 8.', 'stock' => 20],

         
            ['title' => 'Soft chairs', 'price' => 19.00, 'img' => 'image 92.png', 'order_count' => 12, 'shipping_info' => 'Free Shipping', 'category' => 'Furniture', 'description' => 'Handcrafted soft chair.', 'stock' => 15],
            ['title' => 'Soft chairs', 'price' => 19.00, 'img' => 'picture/2 1.png', 'order_count' => 12, 'shipping_info' => 'Free Shipping', 'category' => 'Furniture', 'description' => 'Handcrafted soft chair.', 'stock' => 15],
            ['title' => 'Kitchen Mixer', 'price' => 100.00, 'img' => 'picture/Bitmap.png', 'order_count' => 45, 'shipping_info' => 'Free Shipping', 'category' => 'Appliances', 'description' => 'Professional mixer.', 'stock' => 8],
            ['title' => 'Soft chairs', 'price' => 19.00, 'img' => 'picture/image 24.png', 'order_count' => 12, 'shipping_info' => 'Free Shipping', 'category' => 'Furniture', 'description' => 'Handcrafted soft chair.', 'stock' => 15],
            ['title' => 'Kitchen Mixer', 'price' => 100.00, 'img' => 'picture/image 26.png', 'order_count' => 45, 'shipping_info' => 'Free Shipping', 'category' => 'Appliances', 'description' => 'Professional mixer.', 'stock' => 8],
            ['title' => 'Soft chairs', 'price' => 19.00, 'img' => 'picture/image 30.png', 'order_count' => 12, 'shipping_info' => 'Free Shipping', 'category' => 'Furniture', 'description' => 'Handcrafted soft chair.', 'stock' => 15],
            ['title' => 'Kitchen Mixer', 'price' => 100.00, 'img' => 'picture/image 85.png', 'order_count' => 45, 'shipping_info' => 'Free Shipping', 'category' => 'Appliances', 'description' => 'Professional mixer.', 'stock' => 8],
            ['title' => 'Soft chairs', 'price' => 19.00, 'img' => 'picture/image 86.png', 'order_count' => 12, 'shipping_info' => 'Free Shipping', 'category' => 'Furniture', 'description' => 'Handcrafted soft chair.', 'stock' => 15],
            ['title' => 'Kitchen Mixer', 'price' => 100.00, 'img' => 'picture/image 90.png', 'order_count' => 45, 'shipping_info' => 'Free Shipping', 'category' => 'Appliances', 'description' => 'Professional mixer.', 'stock' => 8],
            ['title' => 'Kitchen Mixer', 'price' => 100.00, 'img' => 'picture/image 85.png', 'order_count' => 45, 'shipping_info' => 'Free Shipping', 'category' => 'Appliances', 'description' => 'Professional mixer.', 'stock' => 8],
        ];

        foreach ($products as $product) {
            Product::create($product);
            
        }
    }
}