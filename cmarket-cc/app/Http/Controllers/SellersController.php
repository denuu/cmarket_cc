<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Sellers;

class SellersController extends Controller
{
    public function index() {
        $sellers = Sellers::all()->toArray();
        return array_reverse($sellers); // TODO.
    }

    public function store(Request $request) {
        $seller = new Sellers([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'shop_category' => $request->input('shop_category'),
            'portfolio_link' => $request->input('portfolio_link'),
            'content_owner' => $request->input('content_owner'),
            'existingStore' => $request->input('existingStore'),
            'existingStoreUrls' => $request->input('existingStoreUrls'),
            'qualityPerspective' => $request->input('qualityPerspective'),
            'experienceLevel' => $request->input('experienceLevel'),
            'businessMarketing' => $request->input('businessMarketing')
        ]);
        $seller->save();

        return response()->json('Portfolio submitted via application.');
    }
}
