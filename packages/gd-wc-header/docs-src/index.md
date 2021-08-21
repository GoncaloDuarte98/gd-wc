---
layout: page.11ty.cjs
title: <gd-wc-header> ⌲ Home
---

# &lt;gd-wc-header>

`<gd-wc-header>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<gd-wc-header>` is just an HTML element. You can it anywhere you can use HTML!

```html
<gd-wc-header></gd-wc-header>
```

  </div>
  <div>

<gd-wc-header></gd-wc-header>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<gd-wc-header>` can be configured with attributed in plain HTML.

```html
<gd-wc-header name="HTML"></gd-wc-header>
```

  </div>
  <div>

<gd-wc-header name="HTML"></gd-wc-header>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<gd-wc-header>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;gd-wc-header&gt;</h2>
    <gd-wc-header .name=${name}></gd-wc-header>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;gd-wc-header&gt;</h2>
<gd-wc-header name="lit-html"></gd-wc-header>

  </div>
</section>
