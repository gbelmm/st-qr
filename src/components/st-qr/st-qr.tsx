import { Component, Prop ,Element} from '@stencil/core';

import QRious from 'qrious';

@Component({
  tag: 'st-qr',
  styleUrl: 'st-qr.scss'
})
export class StQr {

  @Prop() data: string;
  @Prop() size: string; 
  @Element() host: HTMLElement
 
  componentDidLoad() {
    
      const container = this.host.querySelector('#qr') as HTMLInputElement;
    
      new QRious({
          element: container,
          value: this.data,
          size:this.size
        });
  }
  render() {
    return (
      <canvas id="qr"  class="qr">
        
      </canvas>
    );
  }
}
