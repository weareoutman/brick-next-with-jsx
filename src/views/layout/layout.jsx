import { ForEach, Fragment, Switch } from 'next-jsx';
import { CTX, bind } from 'next-jsx/runtime';
import styleText from './style.css';
import home from './home/home.js';
import list from './list/list.js';

export default (
  <>
    <style>{styleText}</style>

    <sl-menu
      style={{ display: 'flex' }}
      events={{
        'sl-select': {
          action: 'context.replace',
          args: ['active', EVENT.detail.item.value],
        },
      }}
    >
      <ForEach value={CTX.menus}>
        <sl-menu-item
          value={ITEM.key}
          className={bind(CTX.active === ITEM.key ? 'active' : '')}
        >
          {ITEM.label}
        </sl-menu-item>
      </ForEach>

      <sl-input
        size="small"
        placeholder="Search..."
        style={{ marginLeft: '2em', alignSelf: 'center' }}
      />
    </sl-menu>

    <Switch value={bind(CTX.active)}>
      <Fragment slot="home">{home}</Fragment>
      <Fragment slot="list">{list}</Fragment>
    </Switch>
  </>
);
