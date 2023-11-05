<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/posts/delete/{id}', [PostController::class, 'delete']);
Route::get('/posts/get/{id}', [PostController::class, 'get']);
Route::post('/posts/save', [PostController::class, 'save']);
Route::post('/posts/update', [PostController::class, 'update']);
        