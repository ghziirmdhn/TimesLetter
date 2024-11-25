// screens/LoadingScreen.js
import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const hexagons = Array.from({ length: 7 }, () => new Animated.Value(1)); // 7 animasi hexagon

  useEffect(() => {
    // Animasi "bernafas" pada hexagon
    hexagons.forEach((scale, index) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.2,
            duration: 1000,
            delay: index * 200,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    });

    // Simulasi loading sebelum pindah ke Home
    const timer = setTimeout(() => {
      navigation.replace('HomeTabs');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation, hexagons]);

  return (
    <View style={styles.container}>
      <View style={styles.hexagonRow}>
        <Animated.View style={[styles.hexagonWrapper, { transform: [{ scale: hexagons[0] }] }]}>
          <View style={styles.hexagon}>
            <View style={styles.hexagonBefore} />
            <View style={styles.hexagonAfter} />
          </View>
        </Animated.View>
        <Animated.View style={[styles.hexagonWrapper, { transform: [{ scale: hexagons[1] }] }]}>
          <View style={styles.hexagon}>
            <View style={styles.hexagonBefore} />
            <View style={styles.hexagonAfter} />
          </View>
        </Animated.View>
        <Animated.View style={[styles.hexagonWrapper, { transform: [{ scale: hexagons[2] }] }]}>
          <View style={styles.hexagon}>
            <View style={styles.hexagonBefore} />
            <View style={styles.hexagonAfter} />
          </View>
        </Animated.View>
      </View>
      <View style={[styles.hexagonRow, styles.offsetRow]}>
        <Animated.View style={[styles.hexagonWrapper, { transform: [{ scale: hexagons[3] }] }]}>
          <View style={styles.hexagon}>
            <View style={styles.hexagonBefore} />
            <View style={styles.hexagonAfter} />
          </View>
        </Animated.View>
        <Animated.View style={[styles.hexagonWrapper, { transform: [{ scale: hexagons[4] }] }]}>
          <View style={styles.hexagon}>
            <View style={styles.hexagonBefore} />
            <View style={styles.hexagonAfter} />
          </View>
        </Animated.View>
      </View>
      <View style={styles.hexagonRow}>
        <Animated.View style={[styles.hexagonWrapper, { transform: [{ scale: hexagons[5] }] }]}>
          <View style={styles.hexagon}>
            <View style={styles.hexagonBefore} />
            <View style={styles.hexagonAfter} />
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2E4A', // Warna latar belakang
  },
  hexagonRow: {
    flexDirection: 'row',
  },
  offsetRow: {
    marginLeft: 2, // Offset untuk pola sarang lebah
  },
  hexagonWrapper: {
    margin: 20, // Spasi antar heksagon
  },
  hexagon: {
    width: 60,
    height: 34.64,
    backgroundColor: '#F8B400',
    position: 'relative',
  },
  hexagonBefore: {
    position: 'absolute',
    top: -17.32, // Setengah tinggi
    left: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderLeftColor: 'transparent',
    borderRightWidth: 30,
    borderRightColor: 'transparent',
    borderBottomWidth: 17.32,
    borderBottomColor: '#F8B400',
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -17.32, // Setengah tinggi
    left: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderLeftColor: 'transparent',
    borderRightWidth: 30,
    borderRightColor: 'transparent',
    borderTopWidth: 17.32,
    borderTopColor: '#F8B400',
  },
});

export default LoadingScreen;
