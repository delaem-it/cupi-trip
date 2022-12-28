<?php

use Illuminate\Http\Request;


Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1'], function () {
    // Search
    Route::get('search', 'TravelPayoutsController@index');

    // Auth
    Route::post('register', 'Auth\AuthController@register');
    Route::post('login', 'Auth\AuthController@login');
    Route::post('email-verify', 'Auth\AuthController@verifyEmailCode');
});

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:sanctum']], function () {
    // Abilities
    Route::apiResource('abilities', 'AbilitiesController', ['only' => ['index']]);

    // Locales
    Route::get('locales/languages', 'LocalesController@languages')->name('locales.languages');
    Route::get('locales/messages', 'LocalesController@messages')->name('locales.messages');

    // Permissions
    Route::resource('permissions', 'PermissionsApiController');

    // Roles
    Route::resource('roles', 'RolesApiController');

    // Users
    Route::resource('users', 'UsersApiController');

    // Reviews
    Route::resource('reviews', 'ReviewsApiController');

    // Blog Category
    Route::resource('blog-categories', 'BlogCategoryApiController');

    // Blog Post
    Route::resource('blog-posts', 'BlogPostApiController');
});
