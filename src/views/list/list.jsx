import { APP } from 'next-jsx/runtime';
import styleText from './style.css';

export default (
  <>
    <tpl-menu active="list" />
    <sl-card className="card-header">
      <div slot="header">
        This is a list
        <sl-icon-button name="gear" label="Settings" />
      </div>
      This card has a header. You can put all sorts of things in it!
      <sl-button
        slot="footer"
        events={{
          click: {
            action: 'history.push',
            args: [`${APP.homepage}`],
          },
        }}
      >
        Back to home
      </sl-button>
    </sl-card>

    <style>{styleText}</style>
  </>
);
