<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    /**
     * @OA\Post(
     *      path="/api/v1/register",
     *      tags={"User"},
     *      summary="Регистрация пользователя",
     *      description="Возвращается Bearer токен",
     *      @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     property="email",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="password",
     *                     type="string"
     *                 ),
     *                 example={"email": "test@test.ru", "password": "testtest"}
     *             )
     *         )
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *     )
     */
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required|unique:users,email'
        ]);

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        
        $user->update([
            'email_verify_code' => Hash::make($this->sendVerifyCode($user))
        ]);

        return response()->json([
            'status' => true
        ]);
    }

    /**
     * @OA\Post(
     *      path="/api/v1/login",
     *      tags={"User"},
     *      summary="Авторизация пользователя",
     *      description="Возвращается Bearer токен",
     *      @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     property="email",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="password",
     *                     type="string"
     *                 ),
     *                 example={"email": "test@test.ru", "password": "testtest"}
     *             )
     *         )
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *     )
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!Auth::attempt($request->only(['email', 'password']))) {
            return response([
                'status' => false
            ], 400);
        }

        $user = User::where('email', $request->email)->first();

        return response()->json([
            'status' => true,
            'token' => Hash::make($user->createToken("api_token")->plainTextToken)
        ]);
    }


    /**
     * @OA\Post(
     *      path="/api/v1/verify-code",
     *      tags={"User"},
     *      summary="Подтверждение по почте пользователя",
     *      description="Возвращается Bearer токен",
     *      @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     property="email",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="code",
     *                     type="integer"
     *                 ),
     *                 example={"email": "test@test.ru", "code": "1234"}
     *             )
     *         )
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *     )
     */
    public function verifyEmailCode(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'code' => 'required|integer'
        ]);
        

        $user = User::where('email', $request->email)->first();
        
        
        if(!Hash::check($request->code, $user->email_verify_code)) {
            return response([
                'status' => false
            ],400);
        }
    
        // TODO доделать верификацию
        // $user->setEmailVerifiedAtAttribute(Carbon::createFromFormat('d.m.Y H:i:s', now()));

        return response()->json([
            'status' => true,
            'token' => $user->createToken("api_token")->plainTextToken
        ]);
    }


    private function sendVerifyCode(User $user) {
        $code = rand(1000,9999);

        try {
            Mail::send(['text' => 'mail.verify-code'], ['code' => $code], function ($message) use ($user) {
                $message->to($user->email, 'Чистопар')->subject('Просьба перезвонить');
                $message->from(env('MAIL_FROM_ADDRESS'), 'Чистопар');
            });
        } catch (Exception $e) {
            return response([
                'status' => 'non-existent email'
            ], 400);
        }

        return $code;
    }
}
