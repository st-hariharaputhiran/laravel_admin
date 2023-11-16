<?php
     
namespace App\Http\Controllers\api;
     
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Validator;
use Illuminate\Http\JsonResponse;
     
class RegisterController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request): JsonResponse
    {
        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'fullname' => 'required',
            'email' => 'required|email',
            'password.password' => 'required',
            'password.confirm' => 'required|same:password.password',
        ]);
     
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
     
        $input = $request->all();
        //dd($input);
        $input['password'] = bcrypt($input['password']['password']);
        //$input['password'] = bcrypt($input['password']['password']);
        //dd($input['password']['password']);
        $user = User::create([
            'firstname' => $input['fullname'],
            'email' => $input['email'],
            'password' => $input['password'],
            'role' => "admin",
            'status' => 1
        ]);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
   
        return $this->sendResponse($success, 'User register successfully.');
    }
     
    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request): JsonResponse
    {
        //$hashed = bcrypt($request->password);
        //dd($hashed);
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')-> accessToken; 
            $success['name'] =  $user->name;
            $success['role'] =  $user->role;
            $success['status'] = $user->status;
   
            return $this->sendResponse($success, 'User login successfully.');
        } 
        else{ 
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        } 
    }
}