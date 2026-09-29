import { StyleSheet, Text, View, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { theme } from '../theme';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.body}>Login Screen</Text>
      <Pressable
        accessibilityRole="button"
        testID="login-to-dashboard"
        onPress={() => navigation.navigate('Main')}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonLabel}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: theme.typography.welcome40.fontSize,
    lineHeight: theme.typography.welcome40.lineHeight,
    color: theme.colors.fg,
  },
  body: {
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: theme.typography.text16Alt.fontSize,
    lineHeight: theme.typography.text16Alt.lineHeight,
    color: theme.colors.fg,
    marginTop: theme.spacing.space3,
    marginBottom: theme.spacing.space5,
  },
  button: {
    minHeight: 54,
    paddingHorizontal: theme.spacing.space5,
    paddingVertical: theme.spacing.space3,
    borderRadius: theme.radii.buttonLogin,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonLabel: {
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: theme.typography.button20.fontSize,
    lineHeight: theme.typography.button20.lineHeight,
    color: theme.colors.onAccent,
  },
});
