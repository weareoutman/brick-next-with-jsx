import { Route } from 'next-jsx';
import layout from './views/layout/layout.js';
import layout_context from './views/layout/context.js';

// 路由列表
export default (
  <>
    <Route path="${APP.homepage}" view={layout} context={layout_context} />
  </>
);
