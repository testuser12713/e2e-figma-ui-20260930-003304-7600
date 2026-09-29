import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '../theme';
import type { MainTabParamList, RootStackParamList } from '../navigation/types';
import { dashboardStats } from '../data/stats';

type Props = BottomTabScreenProps<MainTabParamList, 'Dashboard'>;

type CardDef = {
  id: string;
  title: string;
  source: number;
  imgStyle: { left: number; top: number; width: number; height: number };
  navigateTo?: 'MoneyManagement';
};

const cards: CardDef[] = [
  {
    id: 'time-management',
    title: 'Time Management',
    source: require('../../design/figma/assets/illustration-128x114.png'),
    imgStyle: { left: 15, top: 93, width: 128, height: 114 },
  },
  {
    id: 'money-management',
    title: 'Money Management',
    source: require('../../design/figma/assets/illustration-118x109.png'),
    imgStyle: { left: 19, top: 101, width: 118, height: 109 },
    navigateTo: 'MoneyManagement',
  },
  {
    id: 'food-management',
    title: 'Food Management',
    source: require('../../design/figma/assets/undraw-personal-site-xyd1.png'),
    imgStyle: { left: 32, top: 91, width: 88, height: 130 },
  },
  {
    id: 'app-management',
    title: 'App Management',
    source: require('../../design/figma/assets/illustration-120x133.png'),
    imgStyle: { left: 15, top: 85, width: 120, height: 133 },
  },
];

const shadowSoft = {
  shadowColor: theme.colors.shadowSoft,
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 1,
  shadowRadius: 16,
  elevation: 3,
};

export function DashboardScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [menuOpen, setMenuOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);

  const openStats = () => {
    setMenuOpen(false);
    setStatsOpen(true);
  };

  const logout = () => {
    setMenuOpen(false);
    navigation.getParent<NativeStackNavigationProp<RootStackParamList>>()?.navigate('Onboarding');
  };

  const renderCard = (card: CardDef) => {
    const inner = (
      <>
        <Text style={styles.cardTitle}>{card.title}</Text>
        <Image source={card.source} style={[styles.cardIllustration, card.imgStyle]} />
      </>
    );

    if (card.navigateTo) {
      return (
        <Pressable
          key={card.id}
          accessibilityRole="button"
          testID={`dashboard-card-${card.id}`}
          onPress={() => navigation.navigate(card.navigateTo as 'MoneyManagement')}
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        >
          {inner}
        </Pressable>
      );
    }

    return (
      <View key={card.id} style={styles.card}>
        {inner}
      </View>
    );
  };

  return (
    <View style={styles.root}>
      {statsOpen ? (
        <StatsView onBack={() => setStatsOpen(false)} />
      ) : (
        <View style={styles.safeRoot} testID="dashboard-screen">
          <View style={styles.header}>
            <View style={[styles.headerContent, { marginTop: insets.top }]}>
              <Pressable
                accessibilityRole="button"
                testID="dashboard-menu-toggle"
                onPress={() => setMenuOpen(true)}
                style={({ pressed }) => [styles.menuButton, pressed && styles.iconPressed]}
              >
                <Ionicons name="menu" size={22} color={theme.colors.onAccent} />
              </Pressable>
              <Text style={styles.headerTitle}>Dashboard</Text>
              <View style={styles.headerUser}>
                <Ionicons name="person-outline" size={27} color={theme.colors.onAccent} />
              </View>
            </View>
          </View>

          <View style={styles.body}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <View style={styles.search}>
                <Text style={styles.searchText}>Search</Text>
                <View style={styles.searchIcon}>
                  <Ionicons name="search" size={16} color={theme.colors.fgAlt} />
                </View>
              </View>

              <View style={styles.cardsRow}>
                {renderCard(cards[0])}
                {renderCard(cards[1])}
              </View>
              <View style={[styles.cardsRow, styles.cardsRowSecond]}>
                {renderCard(cards[3])}
                {renderCard(cards[2])}
              </View>
            </ScrollView>
          </View>
        </View>
      )}

      {menuOpen && !statsOpen && (
        <View style={styles.menuOverlay}>
          <Pressable
            accessibilityRole="button"
            testID="dashboard-menu-scrim"
            onPress={() => setMenuOpen(false)}
            style={styles.menuScrim}
          />
          <View style={styles.menuPanel}>
            <View style={styles.menuHeader}>
              <Image
                source={require('../../design/figma/assets/profile-image.png')}
                style={styles.menuProfileImage}
              />
              <Text style={styles.menuName}>Sophie Garnier</Text>
              <Text style={styles.menuLocation}>Luxembourg</Text>
              <Image
                source={require('../../design/figma/assets/icon-13x13.png')}
                style={styles.menuHeaderIcon}
              />
            </View>

            <MenuItem
              testID="menu-statistics"
              top={246}
              icon="stats-chart-outline"
              iconSize={18}
              label="Statistics"
              onPress={openStats}
            />
            <MenuItem
              testID="menu-account-settings"
              top={301}
              icon="person-outline"
              iconSize={19}
              label="Account Settings"
              onPress={() => setMenuOpen(false)}
            />
            <MenuItem
              testID="menu-help"
              top={357}
              icon="help-circle-outline"
              iconSize={17}
              label="Help"
              onPress={() => setMenuOpen(false)}
            />
            <MenuItem
              testID="menu-logout"
              top={836}
              icon="log-out-outline"
              iconSize={20}
              label="Logout"
              onPress={logout}
            />
          </View>
        </View>
      )}
    </View>
  );
}

function MenuItem({
  testID,
  top,
  icon,
  iconSize,
  label,
  onPress,
}: {
  testID: string;
  top: number;
  icon: keyof typeof Ionicons.glyphMap;
  iconSize: number;
  label: string;
  onPress: () => void;
}) {
  return (
    <View style={[styles.menuItem, { top }]}>
      <Pressable
        accessibilityRole="button"
        testID={testID}
        onPress={onPress}
        style={({ pressed }) => [styles.menuItemPressable, pressed && styles.menuItemPressed]}
      >
        <View style={styles.menuItemIcon}>
          <Ionicons name={icon} size={iconSize} color={theme.colors.fg} />
        </View>
        <Text style={styles.menuItemLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

function StatsView({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.statsRoot} testID="dashboard-stats-screen">
      <ScrollView contentContainerStyle={styles.statsScroll}>
        <View style={[styles.statsTop, { height: 120 + insets.top }]}>
          <Image
            source={require('../../design/figma/assets/gruppe-maskieren-6.png')}
            style={styles.statsBanner}
          />
          <Pressable
            accessibilityRole="button"
            testID="stats-back"
            onPress={onBack}
            style={({ pressed }) => [styles.statsBack, { top: 29 + insets.top }, pressed && styles.iconPressed]}
          >
            <Image
              source={require('../../design/figma/assets/noun-back-1227057.png')}
              style={styles.statsBackIcon}
            />
          </Pressable>
          <View style={[styles.statsUser, { top: 25 + insets.top }]}>
            <Ionicons name="person-outline" size={27} color={theme.colors.iconNavy} />
          </View>
        </View>

        <Text style={styles.statsTitle}>Statistics</Text>

        <Text style={styles.statsSince}>{dashboardStats.restRate.since}</Text>
        <View style={styles.statsRestRateValue}>
          <Text style={styles.statsRestRateNumber}>{dashboardStats.restRate.value} </Text>
          <Text style={styles.statsRestRateUnit}>{dashboardStats.restRate.unit}</Text>
        </View>
        <Text style={styles.statsPeriod}>{dashboardStats.restRate.period}</Text>

        <View style={styles.statsSwitch}>
          {dashboardStats.periods.map((p, i) => (
            <Text key={p} style={[styles.statsSwitchLabel, statsSwitchPositions[i]]}>
              {p}
            </Text>
          ))}
          <View style={styles.statsSwitchPill}>
            <Text style={styles.statsSwitchPillLabel}>{dashboardStats.activePeriod}</Text>
          </View>
        </View>

        <View style={styles.statsChartCard}>
          <Image
            source={require('../../design/figma/assets/gruppe-maskieren-1.png')}
            style={styles.statsChartImage}
          />
          {dashboardStats.chart.months.map((m) => (
            <Text key={m.label + m.x} style={[styles.statsChartMonth, { left: m.x - 39 }]}>
              {m.label}
            </Text>
          ))}
          {dashboardStats.chart.yAxis.map((y) => (
            <Text key={y.label} style={[styles.statsChartYAxis, { top: y.y - 342 }]}>
              {y.label}
            </Text>
          ))}
          <View style={styles.statsTooltip}>
            <Text style={styles.statsTooltipText}>
              {dashboardStats.restRate.value} {dashboardStats.restRate.unit}
            </Text>
          </View>
        </View>

        <Text style={styles.statsTopRun}>{dashboardStats.topRun}</Text>
        <Text style={styles.statsRestarts}>{dashboardStats.restarts}</Text>
      </ScrollView>
    </View>
  );
}

const statsSwitchPositions = [
  { left: 21, top: 9 },
  { left: 116, top: 9 },
  { left: 211, top: 9 },
];

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.accent,
  },
  safeRoot: {
    flex: 1,
    backgroundColor: theme.colors.accent,
  },
  header: {
    backgroundColor: theme.colors.accent,
  },
  headerContent: {
    height: 126,
    width: '100%',
  },
  menuButton: {
    position: 'absolute',
    left: 20,
    top: 33,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    position: 'absolute',
    left: 18,
    top: 62,
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: theme.typography.headline24.fontSize,
    lineHeight: theme.typography.headline24.lineHeight,
    color: theme.colors.onAccent,
  },
  headerUser: {
    position: 'absolute',
    left: 367,
    top: 25,
    width: 27,
    height: 27,
  },
  body: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  scrollContent: {
    paddingBottom: 96,
  },
  search: {
    marginTop: 39,
    marginLeft: 40,
    width: 334,
    height: 43,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.lg,
    justifyContent: 'center',
    ...shadowSoft,
  },
  searchText: {
    position: 'absolute',
    left: 16,
    top: 11,
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: theme.typography.text16Alt.fontSize,
    lineHeight: theme.typography.text16Alt.lineHeight,
    color: theme.colors.fgAlt,
    opacity: 0.2,
  },
  searchIcon: {
    position: 'absolute',
    right: 14,
    top: 13,
    width: 16,
    height: 16,
  },
  cardsRow: {
    flexDirection: 'row',
    marginTop: 37,
    marginLeft: 40,
  },
  cardsRowSecond: {
    marginTop: 20,
  },
  card: {
    width: 157,
    height: 280,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.lg,
    marginRight: 21,
    ...shadowSoft,
  },
  cardPressed: {
    opacity: 0.85,
  },
  cardTitle: {
    position: 'absolute',
    left: 15,
    top: 19,
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: theme.typography.text16.fontSize,
    lineHeight: theme.typography.text16.lineHeight,
    color: theme.colors.fg,
  },
  cardIllustration: {
    position: 'absolute',
  },
  iconPressed: {
    opacity: 0.7,
  },

  menuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  menuScrim: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000',
    opacity: 0.4,
  },
  menuPanel: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 294,
    backgroundColor: theme.colors.surface,
    shadowColor: theme.colors.shadowFab,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 4,
  },
  menuHeader: {
    height: 208,
    backgroundColor: theme.colors.accent,
  },
  menuProfileImage: {
    position: 'absolute',
    left: 23,
    top: 87,
    width: 75,
    height: 75,
    borderRadius: 999,
  },
  menuName: {
    position: 'absolute',
    left: 106,
    top: 100,
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: theme.typography.text16.fontSize,
    lineHeight: theme.typography.text16.lineHeight,
    color: theme.colors.fg,
  },
  menuLocation: {
    position: 'absolute',
    left: 106,
    top: 126,
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: theme.typography.text14Alt.fontSize,
    lineHeight: theme.typography.text14Alt.lineHeight,
    color: theme.colors.fg,
  },
  menuHeaderIcon: {
    position: 'absolute',
    left: 260,
    top: 87,
    width: 13,
    height: 13,
  },
  menuItem: {
    position: 'absolute',
    left: 0,
    width: 294,
  },
  menuItemPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    height: 56,
  },
  menuItemPressed: {
    backgroundColor: theme.colors.bg,
  },
  menuItemIcon: {
    width: 22,
    alignItems: 'flex-start',
  },
  menuItemLabel: {
    marginLeft: 4,
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: theme.typography.text14.fontSize,
    lineHeight: theme.typography.text14.lineHeight,
    color: theme.colors.fg,
    opacity: 0.6,
  },

  statsRoot: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  statsScroll: {
    paddingBottom: 96,
  },
  statsTop: {
    width: '100%',
  },
  statsBanner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 455,
    height: 120,
  },
  statsBack: {
    position: 'absolute',
    left: 40,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  statsBackIcon: {
    width: 11,
    height: 18,
  },
  statsUser: {
    position: 'absolute',
    left: 348,
    width: 27,
    height: 27,
  },
  statsTitle: {
    marginTop: 15,
    marginLeft: 40,
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: theme.typography.text16.fontSize,
    lineHeight: theme.typography.text16.lineHeight,
    color: theme.colors.fgAlt,
  },
  statsSince: {
    marginTop: 39,
    marginLeft: 40,
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: theme.typography.text14Alt.fontSize,
    lineHeight: theme.typography.text14Alt.lineHeight,
    color: theme.colors.fg,
  },
  statsRestRateValue: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 9,
    marginLeft: 40,
  },
  statsRestRateNumber: {
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 29,
    color: theme.colors.fgAlt,
  },
  statsRestRateUnit: {
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: theme.typography.text14Alt.fontSize,
    lineHeight: theme.typography.text14Alt.lineHeight,
    color: theme.colors.fgAlt,
    marginBottom: 4,
  },
  statsPeriod: {
    marginTop: 7,
    marginLeft: 40,
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: theme.typography.text14Alt.fontSize,
    lineHeight: theme.typography.text14Alt.lineHeight,
    color: theme.colors.fgAlt,
  },
  statsSwitch: {
    marginTop: 21,
    marginLeft: 40,
    width: 335,
    height: 34,
    backgroundColor: theme.colors.surfaceSunken,
    borderRadius: theme.radii.lg,
  },
  statsSwitchLabel: {
    position: 'absolute',
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: theme.typography.text12Alt.fontSize,
    lineHeight: theme.typography.text12Alt.lineHeight,
    color: theme.colors.fgAlt,
  },
  statsSwitchPill: {
    position: 'absolute',
    left: 290,
    top: 4,
    width: 41,
    height: 26,
    backgroundColor: theme.colors.surface,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.shadowFab,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 2,
  },
  statsSwitchPillLabel: {
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
    color: theme.colors.fgAlt,
  },
  statsChartCard: {
    marginTop: 15,
    marginLeft: 39,
    width: 336,
    height: 336,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.lg,
    ...shadowSoft,
  },
  statsChartImage: {
    position: 'absolute',
    left: 3,
    top: 2,
    width: 293,
    height: 333,
  },
  statsChartMonth: {
    position: 'absolute',
    top: 314,
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
    color: theme.colors.fgAlt,
    opacity: 0.2,
  },
  statsChartYAxis: {
    position: 'absolute',
    left: 309,
    fontFamily: theme.fonts.heading,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
    color: theme.colors.fgAlt,
    opacity: 0.2,
  },
  statsTooltip: {
    position: 'absolute',
    left: 139,
    top: 121,
    height: 26,
    paddingHorizontal: 8,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.md,
    justifyContent: 'center',
    shadowColor: theme.colors.shadowSoft,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 2,
  },
  statsTooltipText: {
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: theme.typography.text12Alt.fontSize,
    lineHeight: theme.typography.text12Alt.lineHeight,
    color: theme.colors.fgAlt,
  },
  statsTopRun: {
    marginTop: 39,
    marginLeft: 40,
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: theme.typography.text14Alt.fontSize,
    lineHeight: theme.typography.text14Alt.lineHeight,
    color: theme.colors.fgAlt,
  },
  statsRestarts: {
    marginTop: 8,
    marginLeft: 40,
    fontFamily: theme.fonts.body,
    fontWeight: '400',
    fontSize: theme.typography.text14Alt.fontSize,
    lineHeight: theme.typography.text14Alt.lineHeight,
    color: theme.colors.fgAlt,
  },
});
