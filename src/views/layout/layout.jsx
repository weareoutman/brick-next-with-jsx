import { Route } from 'next-jsx';
import home from '../home/home.js';
import home_context from '../home/context.js';
import list from '../list/list.js';

// 路由列表
export default (
  <>
    <Route path="${APP.homepage}" views={layout}>
      <Route path="${APP.homepage}" exact view={home} context={home_context} />
      <Route path="${APP.homepage}/list" exact view={list} />
    </Route>
  </>
);
