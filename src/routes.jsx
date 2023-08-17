import { Route } from 'next-jsx';
import layout from './views/layout/layout.js';

// 路由列表
export default (
  <>
    <Route path="${APP.homepage}" views={layout} />
  </>
);
