import { Component, ForEach } from 'next-jsx';
import { EVENT, STATE, ITEM, bind } from 'next-jsx/runtime';
import state from './state.js';
import styleText from './style.css';

export default (
  <Component name="tpl-menu" state={state}>
    <sl-menu
      style={{ display: 'flex' }}
      events={{
        'sl-select': [
          {
            action: 'history.push',
            args: [
              STATE.menus.find((menu) => EVENT.detail.item.value === menu.key)
                .url,
              { notify: false },
            ],
          },
          {
            action: 'tpl.dispatchEvent',
            args: ['menu-select', { detail: EVENT.detail.item.value }],
          },
        ],
      }}
    >
      <ForEach value={STATE.menus}>
        <sl-menu-item
          value={ITEM.key}
          className={bind(STATE.active === ITEM.key ? 'active' : '')}
        >
          {ITEM.label}
        </sl-menu-item>
      </ForEach>
    </sl-menu>
    <style>{styleText}</style>
  </Component>
);
