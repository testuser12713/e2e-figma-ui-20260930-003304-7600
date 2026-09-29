import { fireEvent, render, screen } from '@testing-library/react-native';

import { MoneyManagementScreen } from '../screens/MoneyManagementScreen';
import type { MainTabParamList } from '../navigation/types';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

const navigation = { navigate: jest.fn() };

function renderScreen() {
  const props = { navigation, route: { key: 'mm', name: 'MoneyManagement' } } as unknown as BottomTabScreenProps<
    MainTabParamList,
    'MoneyManagement'
  >;
  return render(<MoneyManagementScreen {...props} />);
}

describe('MoneyManagementScreen', () => {
  beforeEach(() => {
    navigation.navigate.mockClear();
  });

  it('shows the account balance and quick categories on the overview', async () => {
    await renderScreen();

    expect(screen.getByText('MontHly EXPENSES')).toBeTruthy();
    expect(screen.getByText('1,345.00€')).toBeTruthy();
    expect(screen.getByText('Quick Categories')).toBeTruthy();
    expect(screen.getByTestId('fab-add-expense')).toBeTruthy();
  });

  it('opens the Add Expense view from the floating add button', async () => {
    await renderScreen();

    await fireEvent.press(screen.getByTestId('fab-add-expense'));

    expect(screen.getByText('Add ExPense')).toBeTruthy();
    expect(screen.getByTestId('add-expense-submit')).toBeTruthy();
    expect(screen.getByTestId('add-name')).toBeTruthy();
  });

  it('returns to the overview after submitting Add Expense', async () => {
    await renderScreen();

    await fireEvent.press(screen.getByTestId('fab-add-expense'));
    await fireEvent.press(screen.getByTestId('add-expense-submit'));

    expect(screen.getByText('MontHly EXPENSES')).toBeTruthy();
    expect(screen.queryByText('Add ExPense')).toBeNull();
  });

  it('shows the weekly report with the transaction list', async () => {
    await renderScreen();

    await fireEvent.press(screen.getByTestId('open-weekly-report'));

    expect(screen.getByText('weekly report')).toBeTruthy();
    expect(screen.getByText('Spend On Fun Mall Cinema')).toBeTruthy();
    expect(screen.getByText('23.00€')).toBeTruthy();
    expect(screen.getByText('Spend On Starbucks')).toBeTruthy();
    expect(screen.getByText('13.00€')).toBeTruthy();
  });
});
