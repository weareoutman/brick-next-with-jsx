import { ForEach, If, Switch } from 'next-jsx';
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
        'sl-select': [
          {
            action: 'history.push',
            args: [
              CTX.menus.find((menu) => EVENT.detail.item.value === menu.key)
                .url,
              { notify: false },
            ],
          },
          {
            action: 'context.replace',
            args: ['active', EVENT.detail.item.value],
          },
        ],
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
    </sl-menu>
    <Switch value={bind(CTX.active)}>
      <div slot="home">{home}</div>
      <div slot="list">{list}</div>
    </Switch>
    {/* <If value={bind(CTX.active === 'home')}>{home}</If>
    <If value={bind(CTX.active === 'list')}>{list}</If> */}
  </>
);
