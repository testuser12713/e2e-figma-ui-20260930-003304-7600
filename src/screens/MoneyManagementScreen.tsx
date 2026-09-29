import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { theme } from '../theme';
import type { MainTabParamList } from '../navigation/types';
import { accountBalance, transactions } from '../data/transactions';

type Props = BottomTabScreenProps<MainTabParamList, 'MoneyManagement'>;

type MoneyView = 'overview' | 'report' | 'add';

const illustrationTop = require('../../design/figma/assets/illustration-525x387.png');
const illustrationReport = require('../../design/figma/assets/illustration-256x218.png');
const iconBackLight = require('../../design/figma/assets/noun-back-1227057.png');
const iconBackDark = require('../../design/figma/assets/icon-32x32.png');
const iconCalendar = require('../../design/figma/assets/icon-15x16.png');
const iconNavHome = require('../../design/figma/assets/noun-home-1191731.png');
const iconNavToday = require('../../design/figma/assets/icon-feather-user-check.png');

const TX_LAYOUT = [
  {
    image: require('../../design/figma/assets/illustration-53x53.png'),
    imgLeft: 30,
    imgTop: 436,
    textLeft: 103,
    categoryTop: 439,
    descriptionTop: 454,
    dateTop: 473,
    amountLeft: 308,
    amountTop: 453,
  },
  {
    image: require('../../design/figma/assets/illustration-53x53-2.png'),
    imgLeft: 28,
    imgTop: 519,
    textLeft: 103,
    categoryTop: 522,
    descriptionTop: 537,
    dateTop: 556,
    amountLeft: 308,
    amountTop: 536,
  },
  {
    image: require('../../design/figma/assets/illustration-53x53-3.png'),
    imgLeft: 28,
    imgTop: 602,
    textLeft: 103,
    categoryTop: 605,
    descriptionTop: 620,
    dateTop: 639,
    amountLeft: 307,
    amountTop: 619,
  },
  {
    image: require('../../design/figma/assets/illustration-53x53-4.png'),
    imgLeft: 28,
    imgTop: 685,
    textLeft: 100,
    categoryTop: 688,
    descriptionTop: 703,
    dateTop: 722,
    amountLeft: 306,
    amountTop: 702,
  },
] as const;

const CATEGORY_TILES = [
  { set: 'ion', icon: 'briefcase-outline', left: 69, top: 530, radius: theme.radii['2xl'], iconLeft: 75, iconTop: 539, iconSize: 41 },
  { set: 'mci', icon: 'silverware-fork-knife', left: 175, top: 532, radius: 0, iconLeft: 182, iconTop: 545, iconSize: 41 },
  { set: 'ion', icon: 'home-outline', left: 284, top: 536, radius: 0, iconLeft: 290, iconTop: 542, iconSize: 42 },
  { set: 'ion', icon: 'people-outline', left: 71, top: 622, radius: theme.radii['2xl'], iconLeft: 79, iconTop: 633, iconSize: 40 },
  { set: 'mci', icon: 'shopping-outline', left: 175, top: 622, radius: 0, iconLeft: 184, iconTop: 627, iconSize: 42 },
  { set: 'mci', icon: 'gas-station', left: 284, top: 621, radius: 0, iconLeft: 296, iconTop: 629, iconSize: 39 },
] as const;

export function MoneyManagementScreen({ navigation }: Props) {
  const [view, setView] = useState<MoneyView>('overview');
  const [returnTo, setReturnTo] = useState<MoneyView>('overview');

  const openAdd = () => {
    setReturnTo(view);
    setView('add');
  };

  const closeAdd = () => {
    setView(returnTo);
  };

  return (
    <View style={styles.frame} testID="money-management-screen">
      {view === 'overview' && (
        <Overview
          onOpenReport={() => setView('report')}
          onOpenAdd={openAdd}
          onBack={() => navigation.navigate('Dashboard')}
        />
      )}
      {view === 'report' && <Report onBack={() => setView('overview')} onOpenAdd={openAdd} />}
      {view === 'add' && <AddExpense onBack={closeAdd} onSubmit={closeAdd} />}
    </View>
  );
}

function Overview({
  onOpenReport,
  onOpenAdd,
  onBack,
}: {
  onOpenReport: () => void;
  onOpenAdd: () => void;
  onBack: () => void;
}) {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={[styles.whiteTop, { height: 406 }]} />
      <Image source={illustrationTop} style={styles.illustrationTop} />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Back"
        testID="overview-back"
        onPress={onBack}
        hitSlop={16}
        style={styles.backLightHit}
      >
        <Image source={iconBackLight} style={styles.backLightIcon} />
      </Pressable>

      <View style={styles.avatar}>
        <Text style={styles.avatarLetter}>R</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Open weekly report"
        testID="open-weekly-report"
        onPress={onOpenReport}
        style={styles.balanceBlock}
      >
        <Text style={styles.sectionLabel}>MontHly EXPENSES</Text>
        <Text style={styles.amountDisplay}>{accountBalance}</Text>
      </Pressable>

      <View style={styles.quickCard}>
        <Text style={styles.quickTitle}>Quick Categories</Text>
        {CATEGORY_TILES.map((tile) => (
          <View
            key={tile.icon}
            style={[styles.tile, { left: tile.left, top: tile.top, borderRadius: tile.radius }]}
          >
            {tile.set === 'ion' ? (
              <Ionicons
                name={tile.icon as keyof typeof Ionicons.glyphMap}
                size={tile.iconSize}
                color={theme.colors.fgBlack}
                style={[styles.tileIcon, { left: tile.iconLeft, top: tile.iconTop }]}
              />
            ) : (
              <MaterialCommunityIcons
                name={tile.icon as keyof typeof MaterialCommunityIcons.glyphMap}
                size={tile.iconSize}
                color={theme.colors.fgBlack}
                style={[styles.tileIcon, { left: tile.iconLeft, top: tile.iconTop }]}
              />
            )}
          </View>
        ))}
      </View>

      <Navbar />
      <FloatingAddButton onPress={onOpenAdd} />
    </View>
  );
}

function Report({ onBack, onOpenAdd }: { onBack: () => void; onOpenAdd: () => void }) {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={[styles.whiteTop, { height: 407 }]} />
      <Text style={styles.reportHeader}>weekly report</Text>

      <DarkBackButton onPress={onBack} />

      <Image source={illustrationReport} style={styles.reportIllustration} />

      <View style={styles.legend}>
        <View style={[styles.legendSwatch, { backgroundColor: theme.colors.accent }]} />
        <Text style={styles.legendLabel}>expenses</Text>
        <View style={[styles.legendSwatch, { left: 84, backgroundColor: theme.colors.legendDeposit }]} />
        <Text style={[styles.legendLabel, { left: 102 }]}>deposit</Text>
      </View>

      {transactions.map((tx, index) => {
        const layout = TX_LAYOUT[index];
        return (
          <View key={tx.id}>
            <Image source={layout.image} style={[styles.txImage, { left: layout.imgLeft, top: layout.imgTop }]} />
            <Text style={[styles.txCategory, { left: layout.textLeft, top: layout.categoryTop }]}>{tx.category}</Text>
            <Text style={[styles.txDescription, { left: layout.textLeft, top: layout.descriptionTop }]}>{tx.description}</Text>
            <Text style={[styles.txDate, { left: layout.textLeft, top: layout.dateTop }]}>{tx.date}</Text>
            <Text style={[styles.txAmount, { left: layout.amountLeft, top: layout.amountTop }]}>{tx.amount}</Text>
          </View>
        );
      })}

      <Navbar />
      <FloatingAddButton onPress={onOpenAdd} />
    </View>
  );
}

function AddExpense({ onBack, onSubmit }: { onBack: () => void; onSubmit: () => void }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={[styles.whiteTop, { height: 138 }]} />
      <Text style={styles.reportHeader}>Add ExPense</Text>

      <DarkBackButton onPress={onBack} />

      <Field
        top={176}
        icon="search-outline"
        iconLeft={55}
        iconTop={189}
        iconSize={16}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        testID="add-name"
      />
      <Field
        top={239}
        icon="map-outline"
        iconLeft={56}
        iconTop={251}
        iconSize={18}
        placeholder="Beschreibung"
        value={description}
        onChangeText={setDescription}
        testID="add-description"
      />
      <Field
        top={302}
        icon="map-outline"
        iconLeft={57}
        iconTop={314}
        iconSize={18}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        testID="add-amount"
        keyboardType="decimal-pad"
      />
      <Field
        top={365}
        icon="calendar"
        iconLeft={57}
        iconTop={379}
        iconSize={16}
        placeholder="Select Date"
        testID="add-date"
        useImageIcon
      />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Add Expense"
        testID="add-expense-submit"
        onPress={onSubmit}
        style={({ pressed }) => [styles.submitButton, pressed && styles.pressedDim]}
      >
        <Text style={styles.submitLabel}>Add Expense</Text>
      </Pressable>

      <Navbar />
    </View>
  );
}

function Field({
  top,
  icon,
  iconLeft,
  iconTop,
  iconSize,
  placeholder,
  value,
  onChangeText,
  testID,
  keyboardType,
  useImageIcon,
}: {
  top: number;
  icon: string;
  iconLeft: number;
  iconTop: number;
  iconSize: number;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  testID: string;
  keyboardType?: 'decimal-pad';
  useImageIcon?: boolean;
}) {
  return (
    <View style={[styles.field, { top }]}>
      {useImageIcon ? (
        <Image source={iconCalendar} style={[styles.fieldImageIcon, { left: iconLeft, top: iconTop }]} />
      ) : (
        <Ionicons
          name={icon as keyof typeof Ionicons.glyphMap}
          size={iconSize}
          color={theme.colors.fg}
          style={[styles.fieldIcon, { left: iconLeft, top: iconTop }]}
        />
      )}
      <TextInput
        style={styles.fieldInput}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.fgAlt}
        value={value}
        onChangeText={onChangeText}
        testID={testID}
        accessibilityLabel={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
}

function DarkBackButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Back"
      testID="dark-back"
      onPress={onPress}
      hitSlop={4}
      style={({ pressed }) => [styles.darkBackButton, pressed && styles.darkBackPressed]}
    >
      <Image source={iconBackDark} style={styles.darkBackIcon} />
    </Pressable>
  );
}

function FloatingAddButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Add Expense"
      testID="fab-add-expense"
      onPress={onPress}
      style={({ pressed }) => [styles.fab, pressed && styles.pressedDim]}
    >
      <View style={styles.fabPlusVertical} />
      <View style={styles.fabPlusHorizontal} />
    </Pressable>
  );
}

function Navbar() {
  return (
    <View style={styles.navbar}>
      <Image source={iconNavHome} style={styles.navHomeIcon} />
      <Text style={[styles.navLabel, { left: 36 }]}>Home</Text>

      <MaterialCommunityIcons name="store-outline" size={19} color={theme.colors.mutedNav} style={[styles.navIcon, { left: 93, top: 18 }]} />
      <Text style={[styles.navLabel, { left: 87 }]}>Products</Text>

      <Ionicons name="heart-outline" size={20} color={theme.colors.mutedNav} style={[styles.navIcon, { left: 296, top: 18 }]} />
      <Text style={[styles.navLabel, { left: 297 }]}>Liked</Text>

      <Image source={iconNavToday} style={styles.navTodayIcon} />
      <Text style={[styles.navLabel, { left: 354 }]}>Today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: theme.colors.bgAlt,
  },
  whiteTop: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    backgroundColor: theme.colors.surface,
  },
  illustrationTop: {
    position: 'absolute',
    left: -73,
    top: -74,
    width: 525,
    height: 387,
  },
  backLightHit: {
    position: 'absolute',
    left: 22,
    top: 25,
    width: 11,
    height: 18,
  },
  backLightIcon: {
    width: 11,
    height: 18,
  },
  avatar: {
    position: 'absolute',
    left: 296,
    top: 77,
    width: 51,
    height: 51,
    borderRadius: 26,
    backgroundColor: theme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.shadowFab,
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  avatarLetter: {
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 41,
    color: theme.colors.onAccent,
  },
  balanceBlock: {
    position: 'absolute',
    left: 49,
    top: 282,
    width: 217,
    height: 73,
  },
  sectionLabel: {
    fontFamily: theme.fonts.body,
    fontWeight: '100',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 2.4,
    color: theme.colors.fgBlack,
  },
  amountDisplay: {
    fontFamily: theme.fonts.body,
    fontWeight: '500',
    fontSize: 45,
    lineHeight: 57,
    color: theme.colors.fgBlack,
    marginTop: theme.spacing.space0,
  },
  quickCard: {
    position: 'absolute',
    left: 45,
    top: 453,
    width: 330,
    height: 276,
    borderRadius: theme.radii.card,
    backgroundColor: theme.colors.surface,
  },
  quickTitle: {
    position: 'absolute',
    left: 137,
    top: 487,
    fontFamily: theme.fonts.body,
    fontWeight: '100',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 2.4,
    color: theme.colors.fgBlack,
  },
  tile: {
    position: 'absolute',
    width: 55,
    height: 55,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: theme.colors.fgBlack,
  },
  tileIcon: {
    position: 'absolute',
  },
  reportHeader: {
    position: 'absolute',
    left: 129,
    top: 61,
    fontFamily: theme.fonts.body,
    fontWeight: '100',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 2.8,
    textTransform: 'uppercase',
    color: theme.colors.fgBlack,
  },
  darkBackButton: {
    position: 'absolute',
    left: 47,
    top: 55,
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: theme.colors.fg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkBackPressed: {
    opacity: 0.8,
  },
  darkBackIcon: {
    width: 32,
    height: 32,
  },
  reportIllustration: {
    position: 'absolute',
    left: 74,
    top: 110,
    width: 256,
    height: 218,
  },
  legend: {
    position: 'absolute',
    left: 74,
    top: 358,
    width: 140,
    height: 13,
  },
  legendSwatch: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 13,
    height: 13,
    borderRadius: theme.radii.sm,
  },
  legendLabel: {
    position: 'absolute',
    left: 18,
    top: 1,
    fontFamily: theme.fonts.body,
    fontWeight: '100',
    fontSize: 9,
    lineHeight: 11,
    textTransform: 'uppercase',
    color: theme.colors.fgBlack,
  },
  txImage: {
    position: 'absolute',
    width: 53,
    height: 53,
  },
  txCategory: {
    position: 'absolute',
    fontFamily: theme.fonts.body,
    fontWeight: '100',
    fontSize: 9,
    lineHeight: 11,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
    color: theme.colors.fgBlack,
  },
  txDescription: {
    position: 'absolute',
    fontFamily: theme.fonts.body,
    fontWeight: '100',
    fontSize: 12,
    lineHeight: 15,
    color: theme.colors.fgBlack,
  },
  txDate: {
    position: 'absolute',
    fontFamily: theme.fonts.body,
    fontWeight: '100',
    fontSize: 9,
    lineHeight: 11,
    textTransform: 'uppercase',
    color: theme.colors.fgBlack,
  },
  txAmount: {
    position: 'absolute',
    fontFamily: theme.fonts.body,
    fontWeight: '100',
    fontSize: 14,
    lineHeight: 18,
    color: theme.colors.fgBlack,
  },
  field: {
    position: 'absolute',
    left: 40,
    width: 334,
    height: 43,
    borderRadius: theme.radii.lg,
    backgroundColor: theme.colors.surface,
    shadowColor: theme.colors.shadowSoft,
    shadowOpacity: 1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  fieldIcon: {
    position: 'absolute',
  },
  fieldImageIcon: {
    position: 'absolute',
    width: 15,
    height: 16,
  },
  fieldInput: {
    position: 'absolute',
    left: 37,
    right: 12,
    top: 0,
    bottom: 0,
    paddingVertical: 12,
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: theme.colors.fgAlt,
  },
  submitButton: {
    position: 'absolute',
    left: 40,
    top: 437,
    width: 334,
    height: 43,
    borderRadius: theme.radii.lg,
    backgroundColor: theme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.shadowSoft,
    shadowOpacity: 1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  pressedDim: {
    opacity: 0.85,
  },
  submitLabel: {
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: theme.colors.onAccent,
  },
  fab: {
    position: 'absolute',
    left: 175,
    bottom: 55,
    width: 64,
    height: 63,
    borderRadius: 32,
    backgroundColor: theme.colors.accent,
    borderWidth: 4,
    borderColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.shadowFab,
    shadowOpacity: 1,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 3 },
    elevation: 8,
  },
  fabPlusVertical: {
    position: 'absolute',
    width: 3,
    height: 20,
    backgroundColor: theme.colors.onAccent,
  },
  fabPlusHorizontal: {
    position: 'absolute',
    width: 20,
    height: 3,
    backgroundColor: theme.colors.onAccent,
  },
  navbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 77,
    backgroundColor: theme.colors.surface,
    shadowColor: theme.colors.shadowNav,
    shadowOpacity: 1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },
  navHomeIcon: {
    position: 'absolute',
    left: 35,
    top: 17,
    width: 22,
    height: 21,
  },
  navTodayIcon: {
    position: 'absolute',
    left: 357,
    top: 18,
    width: 15,
    height: 18,
  },
  navIcon: {
    position: 'absolute',
  },
  navLabel: {
    position: 'absolute',
    top: 43,
    fontFamily: theme.fonts.nav,
    fontWeight: '700',
    fontSize: 7,
    lineHeight: 5,
    color: theme.colors.mutedNav,
  },
});
