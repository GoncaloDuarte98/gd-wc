/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('gd-wc-header')
export class GdWcHeader extends LitElement {
  static styles = css`
      div{
        background-color:red;
        width:300px;
        text-align: center;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
        color:#fafafa;
        border-radius:15px;
      }
  `;

  render() {
    return html`
    <div>
      <p>I am component 1</p>
    </div>
    
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gd-wc-header': GdWcHeader;
  }
}
