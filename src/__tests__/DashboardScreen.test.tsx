import { render, screen, fireEvent } from '@testing-library/react-native';

import { DashboardScreen } from '../screens/DashboardScreen';
import { dashboardStats } from '../data/stats';

jest.mock('react-native-safe-area-context', () =>
  require('react-native-safe-area-context/jest/mock').default
);

function makeNavigation() {
  const navigate = jest.fn();
  const parentNavigate = jest.fn();
  const getParent = jest.fn(() => ({ navigate: parentNavigate }));
  return { navigation: { navigate, getParent }, navigate, parentNavigate };
}

describe('DashboardScreen', () => {
  it('uses the required month axis M J A S O N D', () => {
    expect(dashboardStats.chart.months.map((m) => m.label)).toEqual([
      'M',
      'J',
      'A',
      'S',
      'O',
      'N',
      'D',
    ]);
  });

  it('renders the header, search and the four category cards', async () => {
    const { navigation } = makeNavigation();
    await render(<DashboardScreen navigation={navigation as never} route={{} as never} />);

    expect(await screen.findByTestId('dashboard-screen')).toBeTruthy();
    expect(await screen.findByText('Dashboard')).toBeTruthy();
    expect(await screen.findByText('Search')).toBeTruthy();
    expect(await screen.findByText('Time Management')).toBeTruthy();
    expect(await screen.findByText('Money Management')).toBeTruthy();
    expect(await screen.findByText('Food Management')).toBeTruthy();
    expect(await screen.findByText('App Management')).toBeTruthy();
  });

  it('navigates to MoneyManagement when tapping the Money Management card', async () => {
    const { navigation, navigate } = makeNavigation();
    await render(<DashboardScreen navigation={navigation as never} route={{} as never} />);

    await fireEvent.press(await screen.findByTestId('dashboard-card-money-management'));
    expect(navigate).toHaveBeenCalledWith('MoneyManagement');
  });

  it('opens the menu and shows Statistics and Logout entries', async () => {
    const { navigation } = makeNavigation();
    await render(<DashboardScreen navigation={navigation as never} route={{} as never} />);

    await fireEvent.press(await screen.findByTestId('dashboard-menu-toggle'));

    expect(await screen.findByText('Sophie Garnier')).toBeTruthy();
    expect(await screen.findByText('Statistics')).toBeTruthy();
    expect(await screen.findByText('Logout')).toBeTruthy();
  });

  it('opens the statistics view from the menu and returns with the back button', async () => {
    const { navigation } = makeNavigation();
    await render(<DashboardScreen navigation={navigation as never} route={{} as never} />);

    await fireEvent.press(await screen.findByTestId('dashboard-menu-toggle'));
    await fireEvent.press(await screen.findByTestId('menu-statistics'));

    expect(await screen.findByTestId('dashboard-stats-screen')).toBeTruthy();
    expect(await screen.findByText('Since 21. Dec')).toBeTruthy();
    expect(await screen.findByText('Top Run: 20 Days')).toBeTruthy();
    expect(await screen.findByText('Restarts: 4')).toBeTruthy();

    await fireEvent.press(await screen.findByTestId('stats-back'));
    expect(await screen.findByTestId('dashboard-screen')).toBeTruthy();
  });

  it('logs out to Onboarding and closes the menu', async () => {
    const { navigation, parentNavigate } = makeNavigation();
    await render(<DashboardScreen navigation={navigation as never} route={{} as never} />);

    await fireEvent.press(await screen.findByTestId('dashboard-menu-toggle'));
    await fireEvent.press(await screen.findByTestId('menu-logout'));

    expect(parentNavigate).toHaveBeenCalledWith('Onboarding');
  });
});
