import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import './pf-radio.js';

import styles from './pf-radio-group.css';
import { property } from 'lit/decorators/property.js';

/**
 * Radio Group
 * @slot - Place element content here
 */
@customElement('pf-radio-group')
export class PfRadioGroup extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];
  @property({ attribute: 'radio-group-name' }) radioGroupName = 'contact';
  @property({ attribute: 'radio-input' }) radioInput?: any = [
    {
      label: 'Email',
      value: 'email',
      id: 'contactChoice1',
    }, {
      label: 'Phone',
      value: 'phone',
      id: 'contactChoice2',
    }];

  render(): TemplateResult<1> {
    return html`
      <div class="pf-c-radio-group">
        ${this.radioInput?.map((radio: any) => {
          return html`
            <div class="pf-c-radio">
              <input
                type="radio"
                id=${radio.id}
                name=${this.radioGroupName}
                value=${radio.value}
              />
              <label class="pf-c-radio--label" for=${radio.id}>${radio.label}</label>
            </div>
          `;
        })}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pf-radio-group': PfRadioGroup;
  }
}
