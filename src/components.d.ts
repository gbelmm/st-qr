/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';


import {
  StQr as StQr
} from './components/st-qr/st-qr';

declare global {
  interface HTMLStQrElement extends StQr, HTMLElement {
  }
  var HTMLStQrElement: {
    prototype: HTMLStQrElement;
    new (): HTMLStQrElement;
  };
  interface HTMLElementTagNameMap {
    "st-qr": HTMLStQrElement;
  }
  interface ElementTagNameMap {
    "st-qr": HTMLStQrElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "st-qr": JSXElements.StQrAttributes;
    }
  }
  namespace JSXElements {
    export interface StQrAttributes extends HTMLAttributes {
      data?: string;
      size?: string;
    }
  }
}

