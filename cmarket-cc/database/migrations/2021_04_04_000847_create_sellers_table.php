<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSellersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sellers', function (Blueprint $table) {
            $table->id();
            
            $table->string('first_name');
            $table->string('last_name');
            $table->text('shop_category');
            $table->string('portfolio_link')->unique();
            $table->boolean('content_owner');
            $table->boolean('existingStore');
            $table->text('existingStoreUrls')->nullable();
            $table->tinyInteger('qualityPerspective');
            $table->tinyInteger('experienceLevel');
            $table->tinyInteger('businessMarketing');

            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sellers');
    }
}
