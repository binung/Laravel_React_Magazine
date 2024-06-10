<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/category', function () {
    return Inertia::render('Category/category');
})->name('category');

Route::get('/detail', function () {
    return Inertia::render('Detail/detail');
})->name('detail');


Route::get('/posts/category/{category_id}', [PostController::class, 'getPostsByCategory'])->name('category.show');
Route::get('/posts/detail/{id}', [PostController::class, 'getPostsById'])->name('post.detail');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__ . '/auth.php';
