import Home from './pages/Home';
import Prevention from './pages/Prevention';
import Emergency from './pages/Emergency';
import Diet from './pages/Diet';
import SelfTest from './pages/SelfTest';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: '首页',
    path: '/',
    element: <Home />
  },
  {
    name: '糖尿病管理',
    path: '/prevention',
    element: <Prevention />
  },
  {
    name: '并发症预防',
    path: '/emergency',
    element: <Emergency />
  },
  {
    name: '控糖饮食',
    path: '/diet',
    element: <Diet />
  },
  {
    name: '血糖监测',
    path: '/selftest',
    element: <SelfTest />
  }
];

export default routes;