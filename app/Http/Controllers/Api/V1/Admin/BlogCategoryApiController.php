<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBlogCategoryRequest;
use App\Http\Requests\UpdateBlogCategoryRequest;
use App\Http\Resources\Admin\BlogCategoryResource;
use App\Models\BlogCategory;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BlogCategoryApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('blog_category_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new BlogCategoryResource(BlogCategory::with(['parent'])->advancedFilter());
    }

    public function store(StoreBlogCategoryRequest $request)
    {
        $blogCategory = BlogCategory::create($request->validated());

        return (new BlogCategoryResource($blogCategory))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('blog_category_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'parent' => BlogCategory::get(['id', 'name']),
            ],
        ]);
    }

    public function show(BlogCategory $blogCategory)
    {
        abort_if(Gate::denies('blog_category_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new BlogCategoryResource($blogCategory->load(['parent']));
    }

    public function update(UpdateBlogCategoryRequest $request, BlogCategory $blogCategory)
    {
        $blogCategory->update($request->validated());

        return (new BlogCategoryResource($blogCategory))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(BlogCategory $blogCategory)
    {
        abort_if(Gate::denies('blog_category_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new BlogCategoryResource($blogCategory->load(['parent'])),
            'meta' => [
                'parent' => BlogCategory::get(['id', 'name']),
            ],
        ]);
    }

    public function destroy(BlogCategory $blogCategory)
    {
        abort_if(Gate::denies('blog_category_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $blogCategory->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
