<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['web', 'auth'])->group(function () {
    // Your routes here
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
});


//Auth::routes();

Route::get('/{any}', function () {
    return view('home');
})->where('any', '.*');

Route::fallback(function () {
    abort(404);
});
