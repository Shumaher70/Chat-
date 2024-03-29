import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/home/Home';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
}));

describe('Home', () => {
   it('home should be rendered', () => {
      render(
         <Provider store={store}>
            <Home />
         </Provider>
      );
   });

   it('at click move to the login page', async () => {
      render(
         <Provider store={store}>
            <Home />
         </Provider>
      );

      const button = await screen.findByText(/get started/i);

      fireEvent.click(button);

      expect(mockedUsedNavigate).toHaveBeenCalledWith('/login');
      mockedUsedNavigate.mockRestore();
   });
});
