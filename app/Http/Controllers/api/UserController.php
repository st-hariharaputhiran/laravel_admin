<?php
  
namespace App\Http\Controllers\api;
   
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
  
class UserController extends BaseController
{
    function index()
    {
        //return view('post',['posts' => Post::all()]);
        $user=User::all();
        //dd($post);
        //return response(['status' => 'success', 'posts' => Post::all(), 'code' => 200]);
        return $this->sendResponse($user,"Success");
    }

    function save(Request $request)
    {
        //$request->validate(['email' => 'required', 'password' => 'required']);
        $user = new User();
        $password = bcrypt($request->password['password']);
        $user->firstname = $request->fname;
        $user->lastname = $request->lname;
        $user->email = $request->email;
        $user->password = $password;
        $user->status = \is_null($request->status)?0:$request->status;
        $user->role = 'user';
        $user->save();

        return $this->sendResponse($user,"Success");
    }

    // get post by id
    function get($id)
    {
        $user = User::find($id);
        return $this->sendResponse($user,"Success");
    }

    function update(Request $request)
    {
        //dd($request->all);
        //$request->validate(['email' => 'required', 'password' => 'required']);
        $user = User::find($request->id);
       // dd($user);
        $password = bcrypt($request->password['password']);
        $user->firstname = $request->fname;
        $user->lastname = $request->lname;
        $user->email = $request->email;
        $user->password = $password;
        $user->status = \is_null($request->status)?0:$request->status;
        $user->role = 'user';
        $user->save();

        return $this->sendResponse($user,"Success");
    }

    function delete($id)
    {
        $user = User::find($id);
        $user->delete();
        return $this->sendResponse([],"Success");
    }
}