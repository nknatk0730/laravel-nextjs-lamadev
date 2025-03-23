<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        Post::all();

        if (Post::all()->isEmpty()) {
            return response()->json([
                'message' => 'No posts found'
            ], 404);

        }

        return response()->json([
            'message' => 'success',
            'posts' => Post::all(),
        ], 200);
    }

    public function show(Post $post)
    {
        if (!$post) {
            return response()->json([
                'message' => 'No post found'
            ], 404);
        }

        return response()->json([
            'message' => 'success',
            'post' => $post,
        ], 200);
    }
}
