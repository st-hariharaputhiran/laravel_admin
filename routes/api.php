<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\RegisterController;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\PostController;

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
//header('Access-Control-Allow-Origin:  *');
//header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
//header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);

Route::get('/posts', [PostController::class, 'index']);
Route::delete('/posts/delete/{id}', [PostController::class, 'delete']);
Route::get('/posts/get/{id}', [PostController::class, 'get']);
Route::post('/posts/save', [PostController::class, 'save']);
Route::post('/posts/update', [PostController::class, 'update']);

Route::get('/users', [UserController::class, 'index']);
Route::delete('/users/delete/{id}', [UserController::class, 'delete']);
Route::get('/users/get/{id}', [UserController::class, 'get']);
Route::post('/users/save', [UserController::class, 'save']);
Route::post('/users/update', [UserController::class, 'update']);
        
