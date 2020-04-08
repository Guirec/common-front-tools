import { addDecorator, addParameters } from '@storybook/html';
import { withHTML } from '@whitespace/storybook-addon-html/html';

addDecorator(
  withHTML({
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'css',
    },
  }),
);

addParameters({
  options: {
    showRoots: true,
  },
  dependencies: {
    hideEmpty: true,
  },
});

// Import assets
import '../assets/scss/common.scss';
import '../assets/scss/utils.scss';
