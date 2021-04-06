<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sellers extends Model
{
    use HasFactory;
    protected $fillable = [
        'first_name',
        'last_name',
        'shop_category',
        'portfolio_link',
        'content_owner',
        'existingStore',
        'existingStoreUrls',
        'qualityPerspective',
        'experienceLevel',
        'businessMarketing'
    ];
}
