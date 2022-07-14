/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

title-page {
  margin-left: 10%;
  margin-right: 10%;
}

nav-tab-movie {
  margin-left: 10%;
  margin-right: 10%;
}

@media only screen and (min-width: 600px) {
  .container {
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    justify-content: space-between;
  }

  .left {
    width: 48%;
  }

  .right {
    width: 48%;
  }
}
`;