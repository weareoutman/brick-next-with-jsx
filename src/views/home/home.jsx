import FN from '../../resources/functions/index.js';

// Homepage 视图层
export default (
  <sl-card className="card-header">
    <div slot="header">
      {FN.sayHello()}
      <sl-icon-button name="gear" label="Settings" />
    </div>
    This card has a header. You can put all sorts of things in it!
    <sl-button
      slot="footer"
      events={{
        click: {
          action: 'history.push',
          args: ['${APP.homepage}/list'],
        },
      }}
    >
      Go to list
    </sl-button>
  </sl-card>
);
