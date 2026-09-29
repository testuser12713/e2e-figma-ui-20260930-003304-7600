import { render, screen, fireEvent } from '@testing-library/react-native';

import App from '../../App';

jest.mock('react-native-safe-area-context', () =>
  require('react-native-safe-area-context/jest/mock').default
);

describe('App', () => {
  it('renders the login screen on start', async () => {
    await render(<App />);
    expect(await screen.findByTestId('login-to-dashboard')).toBeTruthy();
  });

  it('navigates to Main and switches tabs', async () => {
    await render(<App />);
    await fireEvent.press(await screen.findByTestId('login-to-dashboard'));

    expect(await screen.findByTestId('dashboard-screen')).toBeTruthy();

    await fireEvent.press(await screen.findByTestId('tab-money-management'));
    expect(await screen.findByTestId('money-management-screen')).toBeTruthy();

    await fireEvent.press(await screen.findByTestId('tab-dashboard'));
    expect(await screen.findByTestId('dashboard-screen')).toBeTruthy();
  });
});
