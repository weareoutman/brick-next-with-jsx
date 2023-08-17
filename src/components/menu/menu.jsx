import { Component, ForEach } from 'next-jsx';
import { EVENT, STATE, ITEM } from 'next-jsx/runtime';
import state from './state.js';
import styleText from './style.css';

export default (
  <Component name="tpl-menu" state={state}>
    <sl-menu
      style={{ display: 'flex' }}
      events={{
        'sl-select': {
          action: 'history.push',
          args: [EVENT.detail.item.value],
        },
      }}
    >
      <ForEach value={STATE.menus}>
        <sl-menu-item
          value={ITEM.url}
          className={STATE.active === ITEM.key ? 'active' : ''}
        >
          {ITEM.label}
        </sl-menu-item>
      </ForEach>
    </sl-menu>
    <style>{styleText}</style>
  </Component>
);
