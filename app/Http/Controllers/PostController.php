<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;

class PostController extends Controller
{
    public function storePost(Request $request)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'category_id' => 'required|integer',
            'title' => 'required|string',
            'SEOSlug' => 'required|string',
            'metatitle' =>  'required|string',
            'keyword' => 'required|string',
            'description' => 'required|string',
        ]);

        // Path to your JSON file
        $path = public_path('json/data.json');

        // Read the file contents
        $json = File::get($path);

        // Decode the JSON data into an array
        $data = json_decode($json, true);

        // Add the new post to the posts array
        $data['posts'][] = [
            'id' => $validated['id'],
            'category_id' => $validated['category_id'],
            'title' => $validated['title'],
            'SEOSlug' => $validated['SEOSlug'],
            'metatitle' => $validated['metatitle'],
            'keyword' => $validated['keyword'],
            'description' => $validated['description'],
        ];

        // Encode the updated data back to JSON
        $newJsonData = json_encode($data, JSON_PRETTY_PRINT);

        // Write the new JSON data back to the file
        File::put($path, $newJsonData);

        // Return a response
        return response()->json(['message' => 'Post added successfully'], 200);
    }

    public function getPostsByCategory($category_id)
    {
        $data = $this->getPost();

        // Filter posts by category_id
        $filteredPosts = array_filter($data['posts'], function ($post) use ($category_id) {
            return $post['category_id'] == $category_id;
        });

        // Return the filtered posts as a JSON response
        return Inertia::render('Category/category', [
            'posts' => array_values($filteredPosts),
        ]);
    }

    public function getPostsById($id)
    {
        $data = $this->getPost();

        // Find the post by id
        $post = null;
        foreach ($data['posts'] as $item) {
            if ($item['id'] == $id) {
                $post = $item;
                break;
            }
        }

        // dump($post);

        // Return the filtered posts as a JSON response
        return Inertia::render('Detail/detail', [
            'post' => $post,
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
