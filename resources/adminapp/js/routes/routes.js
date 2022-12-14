import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      },
      {
        path: 'reviews',
        name: 'reviews.index',
        component: () => import('@cruds/Reviews/Index.vue'),
        meta: { title: 'cruds.review.title' }
      },
      {
        path: 'reviews/create',
        name: 'reviews.create',
        component: () => import('@cruds/Reviews/Create.vue'),
        meta: { title: 'cruds.review.title' }
      },
      {
        path: 'reviews/:id',
        name: 'reviews.show',
        component: () => import('@cruds/Reviews/Show.vue'),
        meta: { title: 'cruds.review.title' }
      },
      {
        path: 'reviews/:id/edit',
        name: 'reviews.edit',
        component: () => import('@cruds/Reviews/Edit.vue'),
        meta: { title: 'cruds.review.title' }
      },
      {
        path: 'blog',
        name: 'blog',
        component: View,
        redirect: { name: 'blog_categories.index' },
        children: [
          {
            path: 'blog-categories',
            name: 'blog_categories.index',
            component: () => import('@cruds/BlogCategories/Index.vue'),
            meta: { title: 'cruds.blogCategory.title' }
          },
          {
            path: 'blog-categories/create',
            name: 'blog_categories.create',
            component: () => import('@cruds/BlogCategories/Create.vue'),
            meta: { title: 'cruds.blogCategory.title' }
          },
          {
            path: 'blog-categories/:id',
            name: 'blog_categories.show',
            component: () => import('@cruds/BlogCategories/Show.vue'),
            meta: { title: 'cruds.blogCategory.title' }
          },
          {
            path: 'blog-categories/:id/edit',
            name: 'blog_categories.edit',
            component: () => import('@cruds/BlogCategories/Edit.vue'),
            meta: { title: 'cruds.blogCategory.title' }
          },
          {
            path: 'blog-posts',
            name: 'blog_posts.index',
            component: () => import('@cruds/BlogPosts/Index.vue'),
            meta: { title: 'cruds.blogPost.title' }
          },
          {
            path: 'blog-posts/create',
            name: 'blog_posts.create',
            component: () => import('@cruds/BlogPosts/Create.vue'),
            meta: { title: 'cruds.blogPost.title' }
          },
          {
            path: 'blog-posts/:id',
            name: 'blog_posts.show',
            component: () => import('@cruds/BlogPosts/Show.vue'),
            meta: { title: 'cruds.blogPost.title' }
          },
          {
            path: 'blog-posts/:id/edit',
            name: 'blog_posts.edit',
            component: () => import('@cruds/BlogPosts/Edit.vue'),
            meta: { title: 'cruds.blogPost.title' }
          }
        ]
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
