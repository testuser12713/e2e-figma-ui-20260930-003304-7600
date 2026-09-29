import { StyleSheet, Text, View } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { theme } from '../theme';
import type { MainTabParamList } from '../navigation/types';

type Props = BottomTabScreenProps<MainTabParamList, 'MoneyManagement'>;

export function MoneyManagementScreen(_props: Props) {
  return (
    <View style={styles.container} testID="money-management-screen">
      <Text style={styles.heading}>Money Management</Text>
      <Text style={styles.body}>Money Management Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bgAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: theme.typography.headline24.fontSize,
    lineHeight: theme.typography.headline24.lineHeight,
    color: theme.colors.fg,
  },
  body: {
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: theme.typography.text16Alt.fontSize,
    lineHeight: theme.typography.text16Alt.lineHeight,
    color: theme.colors.fg,
    marginTop: theme.spacing.space3,
  },
});
