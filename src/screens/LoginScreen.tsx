import { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { theme } from '../theme';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const EMAIL = 'mauricio@divelement.io';
const PASSWORD = '***********';

export function LoginScreen({ navigation }: Props) {
  const [step, setStep] = useState(0);

  const goToMain = () => navigation.navigate('Main');

  if (step === 0) {
    return <LoginSlide onNext={() => setStep(1)} onSkip={goToMain} />;
  }

  if (step === 1) {
    return <LoginSlideTwo onNext={() => setStep(2)} />;
  }

  return <LoginForm onLogin={goToMain} />;
}

function LoginSlide({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <View style={styles.screen}>
      <Image
        source={require('../../design/figma/assets/jo-sonn-m-tzzd5z720-unsplash.png')}
        style={styles.slide1Image}
      />
      <View style={styles.slide1GreenOverlay} />
      <View style={styles.slide1Panel} />
      <View style={[styles.dot, styles.dot1]} />
      <View style={[styles.dot, styles.dot2]} />
      <View style={[styles.dot, styles.dot3]} />
      <Text style={styles.slide1Headline}>best tips for your motivation</Text>
      <Text style={styles.slide1Quote}>
        Quisque sit amet sagittis erat. Duis pharetra ornare venenatis. Nulla
        maximus porta velit ut molestie. Proin quis convallis mauris. In
        facilisis justo at mi pha…
      </Text>
      <Pressable
        accessibilityRole="button"
        testID="onboarding-next"
        onPress={onNext}
        style={({ pressed }) => [styles.slide1Next, pressed && styles.pressed]}
      >
        <Text style={styles.slide1NextLabel}>Next</Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        testID="onboarding-skip"
        onPress={onSkip}
        hitSlop={12}
        style={styles.slide1Skip}
      >
        <Text style={styles.slide1SkipLabel}>Skip step</Text>
      </Pressable>
    </View>
  );
}

function LoginSlideTwo({ onNext }: { onNext: () => void }) {
  return (
    <View style={styles.screen}>
      <View style={styles.slide2GreenFaded} />
      <View style={styles.slide2GreenSolid} />
      <Image
        source={require('../../design/figma/assets/undraw-workout-gcgu.png')}
        style={styles.slide2Illustration}
      />
      <Text style={styles.slide2Headline}>
        {"Let's achive the best Version\nof yourself katy"}
      </Text>
      <TextInput
        accessibilityLabel="Name"
        testID="onboarding-name-input"
        placeholder="What is your Name?"
        placeholderTextColor={theme.colors.fg}
        style={styles.slide2NameField}
      />
      <TextInput
        accessibilityLabel="Age"
        testID="onboarding-age-input"
        placeholder="What is your Age?"
        placeholderTextColor={theme.colors.fg}
        style={styles.slide2AgeField}
      />
      <Text style={styles.slide2Steps}>1/1 steps</Text>
      <Pressable
        accessibilityRole="button"
        testID="onboarding-next"
        onPress={onNext}
        style={styles.slide2Next}
      >
        <View style={styles.slide2NextCircle}>
          <Ionicons name="chevron-forward" size={28} color={theme.colors.onAccent} />
        </View>
        <Text style={styles.slide2NextLabel}>Next</Text>
      </Pressable>
    </View>
  );
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
  return (
    <View style={styles.screen}>
      <View style={styles.loginFooter}>
        <View style={styles.loginFooterOverlay} />
        <Text style={styles.loginFooterSaltar}>saltar</Text>
        <Text style={styles.loginFooterSiguiente}>siguiente</Text>
      </View>
      <Image
        source={require('../../design/figma/assets/gruppe-maskieren-2.png')}
        style={styles.loginTopImage}
      />
      <TextInput
        accessibilityLabel="Email"
        testID="login-email-input"
        defaultValue={EMAIL}
        onSubmitEditing={onLogin}
        style={styles.loginEmailField}
      />
      <TextInput
        accessibilityLabel="Password"
        testID="login-password-input"
        defaultValue={PASSWORD}
        onSubmitEditing={onLogin}
        style={styles.loginPasswordField}
      />
      <Ionicons name="checkmark" size={17} color={theme.colors.fg} style={styles.loginCheckIcon} />
      <Ionicons name="eye" size={18} color={theme.colors.fg} style={styles.loginViewIcon} />
      <Text style={styles.loginWelcome}>Welcome</Text>
      <Pressable
        accessibilityRole="button"
        testID="login-to-dashboard"
        onPress={onLogin}
        style={({ pressed }) => [styles.loginButton, pressed && styles.pressed]}
      >
        <Text style={styles.loginButtonLabel}>Login</Text>
      </Pressable>
      <Text style={styles.loginForgot}>Forgot you password?</Text>
      <Text style={styles.loginSignup}>Don't have an account? sign up</Text>
      <Pressable
        accessibilityRole="button"
        testID="login-social-facebook"
        onPress={onLogin}
        style={({ pressed }) => [styles.loginSocial, styles.loginSocialFacebook, pressed && styles.pressed]}
      >
        <Image
          source={require('../../design/figma/assets/facebook-2.png')}
          style={styles.facebookIcon}
        />
      </Pressable>
      <Pressable
        accessibilityRole="button"
        testID="login-social-google"
        onPress={onLogin}
        style={({ pressed }) => [styles.loginSocial, styles.loginSocialGoogle, pressed && styles.pressed]}
      >
        <Image
          source={require('../../design/figma/assets/search-1.png')}
          style={styles.googleIcon}
        />
      </Pressable>
    </View>
  );
}

const inputField = {
  position: 'absolute' as const,
  width: 336,
  height: 54,
  backgroundColor: theme.colors.surface,
  borderRadius: theme.radii.md,
  color: theme.colors.fg,
  fontFamily: theme.fonts.body,
  fontWeight: '400' as const,
  fontSize: 14,
  lineHeight: 18,
  shadowColor: theme.colors.shadowInput,
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 1,
  shadowRadius: 10,
  elevation: 4,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.85,
  },

  // Login Slide
  slide1Image: {
    position: 'absolute',
    left: -64,
    top: -85,
    width: 486,
    height: 729,
  },
  slide1GreenOverlay: {
    position: 'absolute',
    left: -97,
    top: 332,
    width: 527,
    height: 552,
    backgroundColor: theme.colors.accent,
    opacity: 0.47,
  },
  slide1Panel: {
    position: 'absolute',
    left: -90,
    top: 344,
    width: 527,
    height: 552,
    backgroundColor: theme.colors.bg,
  },
  dot: {
    position: 'absolute',
    top: 617,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.mutedDot,
  },
  dot1: {
    left: 186,
    backgroundColor: theme.colors.accentLight,
  },
  dot2: {
    left: 207,
  },
  dot3: {
    left: 228,
  },
  slide1Headline: {
    position: 'absolute',
    left: 48,
    top: 667,
    width: 329,
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 32,
    color: theme.colors.fg,
  },
  slide1Quote: {
    position: 'absolute',
    left: 45,
    top: 730,
    width: 324,
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: theme.typography.text10.fontSize,
    lineHeight: theme.typography.text10.lineHeight,
    color: theme.colors.muted,
    textAlign: 'center',
  },
  slide1Next: {
    position: 'absolute',
    left: 251,
    top: 825,
    width: 115,
    height: 42,
    borderRadius: theme.radii.lg,
    backgroundColor: theme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1NextLabel: {
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 19,
    color: theme.colors.onAccent,
  },
  slide1Skip: {
    position: 'absolute',
    left: 53,
    top: 835,
  },
  slide1SkipLabel: {
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 19,
    color: theme.colors.mutedSkip,
  },

  // Login Slide 2
  slide2GreenFaded: {
    position: 'absolute',
    left: -193,
    top: -347,
    width: 815,
    height: 997,
    backgroundColor: theme.colors.accent,
    opacity: 0.2,
  },
  slide2GreenSolid: {
    position: 'absolute',
    left: -186,
    top: -387,
    width: 767,
    height: 887,
    backgroundColor: theme.colors.accent,
  },
  slide2Illustration: {
    position: 'absolute',
    left: 92,
    top: 192,
    width: 242,
    height: 190,
  },
  slide2Headline: {
    position: 'absolute',
    left: 45,
    top: 432,
    width: 324,
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: theme.typography.headline25.fontSize,
    lineHeight: theme.typography.headline25.lineHeight,
    color: theme.colors.accent,
    textAlign: 'center',
  },
  slide2NameField: {
    ...inputField,
    left: 39,
    top: 527,
    paddingLeft: 17,
  },
  slide2AgeField: {
    ...inputField,
    left: 39,
    top: 605,
    paddingLeft: 17,
  },
  slide2Steps: {
    position: 'absolute',
    left: 39,
    top: 750,
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: theme.colors.fgBlack,
    opacity: 0.54,
  },
  slide2Next: {
    position: 'absolute',
    left: 179,
    top: 734,
    width: 56,
    alignItems: 'center',
  },
  slide2NextCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.shadowSocial,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 6,
  },
  slide2NextLabel: {
    marginTop: 8,
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: theme.colors.fgBlack,
  },

  // Login
  loginFooter: {
    position: 'absolute',
    left: 0,
    top: 722,
    width: 414,
    height: 174,
    backgroundColor: theme.colors.accent,
  },
  loginFooterOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 414,
    height: 174,
    backgroundColor: theme.colors.accentLight,
    opacity: 0.2,
  },
  loginFooterSaltar: {
    position: 'absolute',
    left: 42,
    top: 146,
    fontFamily: theme.fonts.body,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 19,
    color: theme.colors.onAccent,
  },
  loginFooterSiguiente: {
    position: 'absolute',
    left: 308,
    top: 146,
    fontFamily: theme.fonts.body,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 19,
    color: theme.colors.onAccent,
  },
  loginTopImage: {
    position: 'absolute',
    left: -2,
    top: -4,
    width: 417,
    height: 201,
  },
  loginEmailField: {
    ...inputField,
    left: 39,
    top: 321,
    paddingLeft: 25,
  },
  loginPasswordField: {
    ...inputField,
    left: 39,
    top: 411,
    paddingLeft: 25,
  },
  loginCheckIcon: {
    position: 'absolute',
    left: 329,
    top: 339,
  },
  loginViewIcon: {
    position: 'absolute',
    left: 329,
    top: 432,
  },
  loginWelcome: {
    position: 'absolute',
    left: 120,
    top: 230,
    width: 174,
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: theme.typography.welcome40.fontSize,
    lineHeight: theme.typography.welcome40.lineHeight,
    color: theme.colors.fg,
    textAlign: 'center',
  },
  loginButton: {
    position: 'absolute',
    left: 42,
    top: 529,
    width: 333,
    height: 54,
    borderRadius: theme.radii.buttonLogin,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonLabel: {
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: theme.typography.button20.fontSize,
    lineHeight: theme.typography.button20.lineHeight,
    color: theme.colors.onAccent,
  },
  loginForgot: {
    position: 'absolute',
    left: 139,
    top: 489,
    width: 136,
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.mutedText,
    textAlign: 'center',
  },
  loginSignup: {
    position: 'absolute',
    left: 119,
    top: 602,
    width: 191,
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.mutedLink,
    textAlign: 'center',
  },
  loginSocial: {
    position: 'absolute',
    top: 649,
    width: 82,
    height: 51,
    borderRadius: theme.radii.xl,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.shadowSocial,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
  },
  loginSocialFacebook: {
    left: 115,
  },
  loginSocialGoogle: {
    left: 218,
  },
  facebookIcon: {
    width: 12,
    height: 24,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
});
