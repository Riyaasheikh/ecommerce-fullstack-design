<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{
    /**
     * Display a listing of products with search and category filters.
     */
    public function index(Request $request)
{
    $query = Product::query();

    // 1. Search (Title or Category)
    if ($request->filled('search')) {
        $searchItem = $request->query('search');
        
        // IMPORTANT: We use a function here to group the OR conditions 
        // so they don't interfere with "where category" or "where brand"
        $query->where(function($q) use ($searchItem) {
            $q->where('title', 'LIKE', "%{$searchItem}%")
              ->orWhere('category', 'LIKE', "%{$searchItem}%")
              // Optional: Add description search if needed
              ->orWhere('description', 'LIKE', "%{$searchItem}%");
        });
    }

    // 2. Category Filter (Matches search result)
    if ($request->filled('category') && $request->query('category') !== 'All Category') {
        $query->where('category', $request->query('category'));
    }

    // 2. Brands (Handles multiple checkboxes from React)
    if ($request->filled('brands')) {
        // query() handles both arrays and strings gracefully
        $brands = $request->query('brands');
        $brandArray = is_array($brands) ? $brands : explode(',', $brands);
        $query->whereIn('brand', $brandArray);
    }

    // 3. Price Range
    if ($request->filled('priceMin')) {
        $query->where('price', '>=', $request->query('priceMin'));
    }
    if ($request->filled('priceMax')) {
        $query->where('price', '<=', $request->query('priceMax'));
    }

    // 4. Ratings
    if ($request->filled('ratings')) {
        $ratings = $request->query('ratings');
        $ratingArray = is_array($ratings) ? $ratings : explode(',', $ratings);
        $query->whereIn('rating', $ratingArray);
    }

    if ($request->query('verified') === 'true') {
    $query->where('is_verified', 1); 
}
    $sort = $request->query('sort', 'newest'); 

    switch ($sort) {
        case 'price_low_high':
            $query->orderBy('price', 'asc');
            break;
        case 'price_high_low':
            $query->orderBy('price', 'desc');
            break;
        default:
            $query->latest();
            break;
    }

    return response()->json($query->get());
}

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title'         => 'required|string|max:255',
            'price'         => 'required|numeric',
            'category'      => 'required|string',
            'description'   => 'required|string',
            'stock'         => 'required|integer',
            'shipping_info' => 'nullable|string',
            'image'         => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // 2MB Limit
        ]);

        $filename = null;

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('images'), $filename); 
        }

        $product = Product::create([
            'title'         => $validatedData['title'],
            'price'         => $validatedData['price'],
            'category'      => $validatedData['category'],
            'description'   => $validatedData['description'],
            'stock'         => $validatedData['stock'],
            'shipping_info' => $request->shipping_info,
            'img'           => $filename, 
            'order_count'   => 0,
        ]);

        return response()->json($product, 201);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'title'         => 'string|max:255',
            'price'         => 'numeric',
            'stock'         => 'integer',
            'category'      => 'string',
            'description'   => 'string',
            'shipping_info' => 'nullable|string',
        ]);

        $product->update($request->all());

        return response()->json([
            'message' => 'Product updated successfully!',
            'product' => $product
        ]);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        if ($product->img) {
            $imagePath = public_path('images/' . $product->img);
            if (File::exists($imagePath)) {
                File::delete($imagePath);
            }
        }

        $product->delete();
        return response()->json(['message' => 'Product deleted successfully']);
    }
}