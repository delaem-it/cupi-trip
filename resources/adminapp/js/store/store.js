import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'
import I18NStore from './modules/i18n'

import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import ReviewsIndex from './cruds/Reviews'
import ReviewsSingle from './cruds/Reviews/single'
import BlogCategoriesIndex from './cruds/BlogCategories'
import BlogCategoriesSingle from './cruds/BlogCategories/single'
import BlogPostsIndex from './cruds/BlogPosts'
import BlogPostsSingle from './cruds/BlogPosts/single'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    I18NStore,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    ReviewsIndex,
    ReviewsSingle,
    BlogCategoriesIndex,
    BlogCategoriesSingle,
    BlogPostsIndex,
    BlogPostsSingle
  },
  strict: debug
})
