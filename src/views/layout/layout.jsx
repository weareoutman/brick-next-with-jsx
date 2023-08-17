import { Route } from 'next-jsx';
import { PATH_NAME } from 'next-jsx/runtime';
import styleText from './style.css';
import home from '../home/home.js';
import home_context from '../home/context.js';
import list from '../list/list.js';

export default (
  <>
    <style>{styleText}</style>
    <tpl-menu active={PATH_NAME === `${APP.homepage}/list` ? 'list' : 'home'} />
    <div>
      <Route path="${APP.homepage}" exact view={home} context={home_context} />
      <Route path="${APP.homepage}/list" exact view={list} />
    </div>
  </>
);
