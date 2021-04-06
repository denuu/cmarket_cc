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
            'portfolio_link' => $request->input('portfolio_link')
        ]);
        $seller->save();

        return response()->json('Portfolio submitted via application.');
    }

    public function show($id) {
        $seller = Sellers::find($id);
        return response()->json($seller);
    }

    // Can't update, since portfolio links unique.
    public function update($id, Request $request) {
        $seller = Sellers::find($id);
        $seller->update($request->all());

        return response()->json('Seller updated.');
    }

    public function destroy($id) {
        $seller = Sellers::find($id);
        $seller->delete();

        return response()->json('Seller deleted.');
    }
}
