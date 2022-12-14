<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToBlogCategoriesTable extends Migration
{
    public function up()
    {
        Schema::table('blog_categories', function (Blueprint $table) {
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->foreign('parent_id', 'parent_fk_7752296')->references('id')->on('blog_categories');
        });
    }
}
