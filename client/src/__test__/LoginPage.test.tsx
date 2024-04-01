import { render } from '@testing-library/react';
import LoginPage from '../auth/LoginPage';

describe('LoginPage', () => {
   it('should render LoginPage', () => {
      render(<LoginPage />);
   });
});
