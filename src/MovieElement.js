import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './MovieElement-styles.js';
import '@capacitacion-practica/description-movie/description-movie.js';
import '@capacitacion-practica/nav-tab-movie/nav-tab-movie.js';
import '@capacitacion-practica/rate-movie/rate-movie.js';
import '@capacitacion-practica/title-page/title-page.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<movie-element></movie-element>
```

##styling-doc

@customElement movie-element
*/
export class MovieElement extends LitElement {
  static get is() {
    return 'movie-element';
  }

  // Declare properties
  static get properties() {
    return {
      title: { type: String, },
      dataList: {type:Object}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.title = 'Movie';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('movie-element-shared-styles')
    ];
  }

  _setProperties(data) {
    this.dataList = data;
    this.dataList.navbar[1].data.height=300;
    this.dataList.navbar[0].data.height=300;
  }

  // Define a template
  render() {
    return html`
      <title-page .title=${this.title}></title-page>
      <div class="container">
        <div class="left">
          <description-movie .dataList=${this.dataList.movie} ></description-movie>
          <nav-tab-movie .dataList=${this.dataList.navbar} ></nav-tab-movie>
        </div>
        <div class="right">
          <rate-movie .dataList=${this.dataList.rating} ></rate-movie>
        </div>
      </div>
    `;
  }
}
