import React from 'react';
import { render, screen , waitFor} from '@testing-library/react';
import App from './App';

test('renders the department title', () => {

  render(<App />);
  const linkElement = screen.getByText(/fakelandia justice department/i);
  waitFor ( ( ) => expect(linkElement).toBeInTheDocument() );
  
});
