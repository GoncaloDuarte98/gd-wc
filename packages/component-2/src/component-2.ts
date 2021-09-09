/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import "gd-wc-header/build/gd-wc-header"
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('component-2')
export class Component2 extends LitElement {
  static styles = css`
      div{
        background-color: lightblue;
        width:600px;
        text-align: center;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
        color:#fafafa;
        border-radius:11px;
        display:flex;
        flex-direction:column;
        align-items:center;
      }
  `;

  render() {
    return html`
    <div>
      <p>I am component 2</p>
      <p> And i use component 1</p>
      <gd-wc-header></gd-wc-header>
    </div>
    
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'component-2': Component2;
  }
}
