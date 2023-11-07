<?php
namespace App\Http\Controllers\api;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;

class PostController extends BaseController
{
    function index()
    {
        //return view('post',['posts' => Post::all()]);
        $post=Post::all();
        //dd($post);
        //return response(['status' => 'success', 'posts' => Post::all(), 'code' => 200]);
        return $this->sendResponse($post,"Success");
    }

    function save(Request $request)
    {
        $request->validate(['title' => 'required', 'description' => 'required']);
        $post = new Post();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();

        return $this->sendResponse($post,"Success");
    }

    // get post by id
    function get($id)
    {
        $post = Post::find($id);
        return $this->sendResponse($post,"Success");
    }

    function update(Request $request)
    {
        $request->validate(['title' => 'required', 'description' => 'required']);
        $post = Post::find($request->id);
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();

        return $this->sendResponse($post,"Success");
    }

    function delete($id)
    {
        $post = Post::find($id);
        $post->delete();
        return $this->sendResponse([],"Success");
    }
}
?>
        

