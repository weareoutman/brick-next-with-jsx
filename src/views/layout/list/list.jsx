import { APP } from 'next-jsx/runtime';

export default (
  <sl-card className="card-header">
    <div slot="header">
      This is a list
      <sl-icon-button name="gear" label="Settings" />
    </div>
    This card has a header. You can put all sorts of things in it!
    <sl-button
      slot="footer"
      events={{
        click: [
          {
            action: 'history.push',
            args: [`${APP.homepage}`, { notify: false }],
          },
          {
            action: 'context.replace',
            args: ['active', 'home'],
          },
        ],
      }}
    >
      Back to home
    </sl-button>
  </sl-card>
);
