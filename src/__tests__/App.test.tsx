import { render, screen, fireEvent } from '@testing-library/react-native';

import App from '../../App';

jest.mock('react-native-safe-area-context', () =>
  require('react-native-safe-area-context/jest/mock').default
);

describe('App', () => {
  it('renders the onboarding slide on start', async () => {
    await render(<App />);
    expect(await screen.findByTestId('onboarding-next')).toBeTruthy();
    expect(await screen.findByTestId('onboarding-skip')).toBeTruthy();
  });

  it('navigates through onboarding to Login and then to Main', async () => {
    await render(<App />);

    await fireEvent.press(await screen.findByTestId('onboarding-next'));
    expect(await screen.findByTestId('onboarding-name-input')).toBeTruthy();

    await fireEvent.press(await screen.findByTestId('onboarding-next'));
    expect(await screen.findByTestId('login-to-dashboard')).toBeTruthy();

    await fireEvent.press(await screen.findByTestId('login-to-dashboard'));
    expect(await screen.findByTestId('dashboard-screen')).toBeTruthy();

    await fireEvent.press(await screen.findByTestId('tab-money-management'));
    expect(await screen.findByTestId('money-management-screen')).toBeTruthy();

    await fireEvent.press(await screen.findByTestId('tab-dashboard'));
    expect(await screen.findByTestId('dashboard-screen')).toBeTruthy();
  });

  it('skip navigates directly to Main', async () => {
    await render(<App />);
    await fireEvent.press(await screen.findByTestId('onboarding-skip'));
    expect(await screen.findByTestId('dashboard-screen')).toBeTruthy();
  });

  it('social button navigates to Main', async () => {
    await render(<App />);
    await fireEvent.press(await screen.findByTestId('onboarding-next'));
    await fireEvent.press(await screen.findByTestId('onboarding-next'));
    await fireEvent.press(await screen.findByTestId('login-social-facebook'));
    expect(await screen.findByTestId('dashboard-screen')).toBeTruthy();
  });
});
