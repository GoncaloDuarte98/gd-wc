import { html } from 'lit-html';

import '../packages/component-2/build/component-2';

export default {
    title: 'Component 2',
    // argTypes: {
    //   projectId: { control: 'number' },
    //   contentId: { control: 'number' },
    //   contentType: { control: 'string' },
    //   mode: { control: 'string' },
    // },
};

export const Default = () =>
  html`
    <component-2></component-2>
  `;

  
  