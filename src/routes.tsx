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
    name: '疾病预防',
    path: '/prevention',
    element: <Prevention />
  },
  {
    name: '急救指南',
    path: '/emergency',
    element: <Emergency />
  },
  {
    name: '饮食建议',
    path: '/diet',
    element: <Diet />
  },
  {
    name: '健康自测',
    path: '/selftest',
    element: <SelfTest />
  }
];

export default routes;