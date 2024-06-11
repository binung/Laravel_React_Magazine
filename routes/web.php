<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
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
})->name('welcome');

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


Route::get('/posts/category/{category_id}', [PostController::class, 'getPostsByCategory'])->name('cagegory.show');
Route::get('/posts/detail/{id}', [PostController::class, 'getPostsById'])->name('post.show');

Route::middleware('admin')->group(function () {
    Route::post('/posts', [PostController::class, 'store'])->name('post.store');
    Route::patch('/posts/{post_id}', [PostController::class, 'update'])->name('post.update');
    Route::delete('/posts/{post_id}', [PostController::class, 'destroy'])->name('post.destroy');

    Route::get('/user', [UserController::class, 'edit'])->name('users.show');
    Route::get('/user/{user_id}', [UserController::class, 'edit'])->name('users.edit');
    Route::patch('/user/{user_id}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/user/{user_id}', [UserController::class, 'destroy'])->name('users.destroy');

    Route::resource('category', CategoryController::class);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__ . '/auth.php';
