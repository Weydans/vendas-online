<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request) 
    {
        $credentials = $request->only(['email', 'password']);

        if ( !auth()->attempt($credentials) ) {
            return abort(401, 'Invalid credentials');
        }

        return response()->json([
            'data' => [
                'token' => auth()->user()->createToken('default')->plainTextToken,
            ],
        ]);
    }
}
