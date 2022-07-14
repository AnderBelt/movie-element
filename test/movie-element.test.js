/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../movie-element.js';

suite('MovieElement', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<movie-element></movie-element>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});
