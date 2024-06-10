<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function getPostsByCategory($category_id)
    {
        $posts = $this->getPost();

        // Filter posts by category_id
        $filteredPosts = array_filter($posts['posts'], function ($post) use ($category_id) {
            return $post['category_id'] == $category_id;
        });

        // Return the filtered posts as a JSON response
        return Inertia::render('Category/category', [
            'posts' => array_values($filteredPosts),
        ]);
    }

    public function getPostsById($id)
    {
        $posts = $this->getPost();

        // Filter posts by id
        $filteredPosts = array_filter($posts['posts'], function ($post) use ($id) {
            return $post['id'] == $id;
        });

        // Return the filtered posts as a JSON response
        return Inertia::render('Detail/detail', [
            'title' => $filteredPosts,
        ]);
    }

    private function getPost()
    {
        // Path to your JSON file
        $path = public_path('/json/data.json');

        // Read the file contents
        $json = file_get_contents($path);

        // Decode the JSON data into an array
        return json_decode($json, true);
    }
}
