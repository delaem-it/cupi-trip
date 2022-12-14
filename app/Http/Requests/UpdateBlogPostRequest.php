<?php

namespace App\Http\Requests;

use App\Models\BlogPost;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateBlogPostRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('blog_post_edit');
    }

    public function rules()
    {
        return [
            'category_id' => [
                'integer',
                'exists:blog_categories,id',
                'nullable',
            ],
            'title' => [
                'string',
                'nullable',
            ],
            'description' => [
                'string',
                'nullable',
            ],
        ];
    }
}
