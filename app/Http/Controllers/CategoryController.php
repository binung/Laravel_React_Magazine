<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Category');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // Validate the incoming request data
        $validated = $request->validate([
            'description' => 'required|string',
            'title' => 'required|string',
        ]);

        // Path to your JSON file
        $path = public_path('json/data.json');

        // Read the file contents
        $json = File::get($path);

        // Decode the JSON data into an array
        $data = json_decode($json, true);

        // Add the new post to the posts array
        $data['categories'][] = [
            'id' => 4,
            'description' => $validated['description'],
            'title' => $validated['title'],
            'DateTime' => now()
        ];

        // Encode the updated data back to JSON
        $newJsonData = json_encode($data, JSON_PRETTY_PRINT);

        // Write the new JSON data back to the file
        File::put($path, $newJsonData);

        // Return a response
        return redirect(route('category.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
