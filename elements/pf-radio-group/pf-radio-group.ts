import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import './pf-radio.js';

import styles from './pf-radio-group.css';

/**
 * Radio Group
 * @slot - Place element content here
 */
@customElement('pf-radio-group')
export class PfRadioGroup extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  render(): TemplateResult<1> {
    return html`
      <div>
        <pf-radio></pf-radio>
        <pf-radio></pf-radio>

        <section>
          <input name="radio" type="radio"/>
          <input name="radio" type="radio"/>
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pf-radio-group': PfRadioGroup;
  }
}
