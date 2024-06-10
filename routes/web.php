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

// Route::get('/category', function () {
//     return Inertia::render('Category/category');
// })->name('category');

// Route::get('/detail', function () {
//     return Inertia::render('Detail/detail');
// })->name('detail');

Route::get('/search-result', function () {
    return Inertia::render('Page/SearchResult');
})->name('search-result');

Route::get('/blog', function () {
    return Inertia::render('Page/Blog');
})->name('blog');

Route::get('/about', function () {
    return Inertia::render('Page/About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Page/Contact');
})->name('contact');


Route::get('/posts/category/{category_id}', [PostController::class, 'getPostsByCategory'])->name('category.show');
Route::get('/posts/detail/{id}', [PostController::class, 'getPostsById'])->name('post.detail');
Route::post('/post', [PostController::class, 'storePost']);


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__ . '/auth.php';
