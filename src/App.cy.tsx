import App from './App';
import './index.css';
import '../dist/output.css';
import { mount } from 'cypress/react18';

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<App />);
  });
});
