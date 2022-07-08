import '@patternfly/pfe-band';
import '@patternfly/pfe-button';
import '@patternfly/pfe-icon';
import '@patternfly/pfe-progress-indicator';
import '@patternfly/pfe-select';

const root = document.querySelector('[data-demo="pfe-button"]')?.shadowRoot ?? document;
const form = root.querySelector('#custom-button-styles-form');
const sbmt = form.querySelector('pfe-button');
const slct = form.querySelector('pfe-select');
const logsBtn = root.querySelector('#loading-logs');
const loadBtn = root.querySelector('#loading-scdr');
const iconBtn = root.querySelector('#loading-icon');

logsBtn.addEventListener('click', () => {
  logsBtn.loading = !logsBtn.loading;
  logsBtn.querySelector('button').textContent =
    logsBtn.loading ? 'Pause loading logs' : 'Resume loading logs';
});

loadBtn.addEventListener('click', () => {
  loadBtn.loading = !loadBtn.loading;
  loadBtn.querySelector('button').textContent =
    loadBtn.loading ? 'Click to stop loading' : 'Click to start loading';
});

iconBtn.addEventListener('click', () => {
  iconBtn.loading = !iconBtn.loading;
});

slct.addEventListener('select', () => {
  sbmt.style.setProperty('--pf-c-button--m-primary--BackgroundColor', slct.value);
});

form.addEventListener('submit', event => event.preventDefault());
