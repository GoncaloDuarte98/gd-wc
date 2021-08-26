import { html } from 'lit-html';

import '../packages/gd-wc-header/build/gd-wc-header';

export default {
    title: 'Component 1',
    // argTypes: {
    //   projectId: { control: 'number' },
    //   contentId: { control: 'number' },
    //   contentType: { control: 'string' },
    //   mode: { control: 'string' },
    // },
};

export const Default = () =>
  html`
    <gd-wc-header></gd-wc-header>
  `;