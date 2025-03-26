import Home from './Home';
import { render } from '@testing-library/react';

describe('First test', () => {
  it('Should render component', () => {
    render(<Home />);
    expect(true).toBeTruthy();
  });
});
