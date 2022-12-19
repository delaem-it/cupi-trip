<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBlogPostRequest;
use App\Http\Requests\UpdateBlogPostRequest;
use App\Http\Resources\Admin\BlogPostResource;
use App\Models\BlogCategory;
use App\Models\BlogPost;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BlogPostApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('blog_post_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new BlogPostResource(BlogPost::with(['category'])->advancedFilter());
    }

    public function store(StoreBlogPostRequest $request)
    {
        $blogPost = BlogPost::create($request->validated());

        return (new BlogPostResource($blogPost))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('blog_post_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'category' => BlogCategory::get(['id', 'name']),
            ],
        ]);
    }

    public function show(BlogPost $blogPost)
    {
        abort_if(Gate::denies('blog_post_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new BlogPostResource($blogPost->load(['category']));
    }

    public function update(UpdateBlogPostRequest $request, BlogPost $blogPost)
    {
        $blogPost->update($request->validated());

        return (new BlogPostResource($blogPost))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(BlogPost $blogPost)
    {
        abort_if(Gate::denies('blog_post_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new BlogPostResource($blogPost->load(['category'])),
            'meta' => [
                'category' => BlogCategory::get(['id', 'name']),
            ],
        ]);
    }

    public function destroy(BlogPost $blogPost)
    {
        abort_if(Gate::denies('blog_post_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $blogPost->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
