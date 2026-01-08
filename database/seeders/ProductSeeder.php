<?php

namespace Database\Seeders;

use App\Models\Products;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $products = [
            [
                'name' => 'Laptop',
                'price' => 49999,
                'stock' => 10,
            ],
            [
                'name' => 'Mouse',
                'price' => 599,
                'stock' => 30,
            ],
            [
                'name' => 'Keyboard',
                'price' => 1299,
                'stock' => 15,
            ],
        ];

        foreach ($products as $product) {
            Products::create($product);
        }
    }
}
