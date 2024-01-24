import MainLayout from '@layouts/MainLayout';
import Bookmark from '@pages/Bookmark';
import CreateJourney from '@pages/CreateJourney';
import Detail from '@pages/Detail';

import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import Profile from '@pages/Profile';
import Register from '@pages/Register';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    protected: false,
    component: Bookmark,
    layout: MainLayout,
  },
  {
    path: '/profile',
    name: 'Profile',
    protected: false,
    component: Profile,
    layout: MainLayout,
  },
  {
    path: '/detail',
    name: 'Detail',
    protected: false,
    component: Detail,
    layout: MainLayout,
  },
  {
    path: '/create',
    name: 'Create',
    protected: false,
    component: CreateJourney,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
