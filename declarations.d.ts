declare namespace JSX {
  interface IntrinsicElements {
    'basic-bricks_general-button': BrickProps & {
      buttonName?: string;
      buttonType?: string;
    };

    'basic-bricks_micro-view': BrickProps & {
      pageTitle?: string;
    };

    'forms_general-input': FormItemProps;
    'forms_general-select': FormItemProps;
    'forms_general-textarea': FormItemProps;
    'forms_general-checkbox': FormItemProps;
    'forms_general-radio': FormItemProps;
    'forms_general-switch': FormItemProps;
  }

  interface BrickProps {
    // HTML properties:
    id?: string;
    slot?: string;
    title?: string;
    className?: string;
    style?: import('csstype').Properties;

    // Brick configurations:
    ref?: string;
    if?: unknown;
    portal?: unknown;
    events?: import('@next-core/types').BrickEventsMap;
    lifeCycle?: import('@next-core/types').BrickLifeCycle;

    // JSX
    children?: any;
  }

  interface FormItemProps extends BrickProps {
    name?: string;
    label?: string;
    placeholder?: string;
    value?: unknown;
  }
}
