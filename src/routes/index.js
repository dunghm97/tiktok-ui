import Following from '@/pages/Following';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import { HeaderOnlyLayout } from '@/components/Layout';

const publicRoutes = [
  // No Need to login to see
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
];
const privateRoutes = [
  // Must login to see
];

export { publicRoutes, privateRoutes };
