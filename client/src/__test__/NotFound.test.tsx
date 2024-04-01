import { fireEvent, render, screen } from '@testing-library/react';

import NotFound from '../pages/notFound/NotFound';

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useNavigate: jest.fn(),
}));

describe('NotFound', () => {
   it('redirects to /not-found on mount', () => {
      const navigate = jest.fn();
      require('react-router-dom').useNavigate.mockReturnValue(navigate);

      render(<NotFound />);

      expect(navigate).toHaveBeenCalledWith('/not-found');
   });

   it('if click on button to home page', async () => {
      const navigate = jest.fn();
      require('react-router-dom').useNavigate.mockReturnValue(navigate);

      render(<NotFound />);

      const button = await screen.findByText(/to home/i);

      fireEvent.click(button);

      expect(navigate).toHaveBeenCalledWith('/');
   });
});
