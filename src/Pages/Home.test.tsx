import Home from './Home';
import { render, screen } from '@testing-library/react';

describe('Home test test', () => {
  it('Should render the home Screen', () => {
    render(<Home />);
    expect(screen.getByText('Pagina de inicio')).toBeInTheDocument();
  });
});
