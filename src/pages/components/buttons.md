---
title: "Buttons"
layout: "../../layouts/MainLayout.astro"
setup: |
  import MainButton from '../../components/MainButton.vue'
---

## All buttons

This page is an example on how to document your button components, most of the copy was written by AI so don't take it very seriously.

Find the code for this page in the `src/pages/components/buttons.md` file.

<div class="component-preview">
    <MainButton primary>Primary</MainButton>
    <MainButton secondary>Secondary</MainButton>
    <MainButton text>Text</MainButton>
</div>

```js
  <MainButton primary>Primary</MainButton>
  <MainButton secondary>Secondary</MainButton>
  <MainButton text>Text</MainButton>
```

## Primary button

We use the primary button for main actions like saving a form or creating a new item.

<div class="component-preview">
    <MainButton primary>Primary button</MainButton>
</div>

```js
<MainButton primary>Primary button</MainButton>
```

## Secondary button

Secondary buttons accompany primary buttons to provide additional actions.
For example, cancel buttons are secondary buttons.

<div class="component-preview">
    <MainButton secondary>Secondary button</MainButton>
</div>

```js
<MainButton secondary>Secondary button</MainButton>
```

## Text button

Text buttons are used for actions that do not require a primary or secondary button.

<div class="component-preview">
    <MainButton text>Text button</MainButton>
</div>

```js
<MainButton text>Text button</MainButton>
```
