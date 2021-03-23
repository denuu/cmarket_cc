<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    // Load the view which contains the Vue app container.
    public function index() {
        return view('welcome');
    }
}
