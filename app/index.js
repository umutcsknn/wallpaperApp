import { ThemeProvider } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { hp, wp } from '../helpers/common';
import { theme } from '../constants/theme'; // Kendi temanızdan import alın
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      {/* Linear Gradient */}
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            'rgba(255,255,255,0)',
            'rgba(255,255,255,0.9)',
            'white',
            'white',
          ]}
          style={styles.gradient}
          start={{ x: 0.8, y: 0 }}
          end={{ x: 0.8, y: 0.8 }}
        />
      </Animated.View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Animated.Text
          entering={FadeInDown.delay(400).springify()}
          style={styles.title}
        >
          Pixels
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(500).springify()}
          style={styles.punchline}
        >
          Every Pixel Tells a Story
        </Animated.Text>
        <Animated.View
          entering={FadeInDown.delay(600).springify()}
        >
          <Pressable onPress={() => router.push('home')} style={styles.startButton}>
            <Text style={styles.startText}>Start Explore</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    top: hp(42), // Gradientin nereden başlayacağını ayarlamak için
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 14,
  },
  title: {
    fontSize: hp(7),
    color: theme.colors.neutral(0.9), // theme kullanımı
    fontWeight: theme.fontWeights.bold, // theme kullanımı
  },
  punchline: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: theme.fontWeights.medium, // theme kullanımı
  },
  startButton: {
    marginBottom: 50,
    backgroundColor: theme.colors.neutral(0.9), // theme kullanımı
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: theme.radius.xl, // theme kullanımı
    borderCurve: 'continuous',
  },
  startText: {
    color: theme.colors.white, // theme kullanımı
    fontSize: hp(3),
    fontWeight: theme.fontWeights.medium, // theme kullanımı
    letterSpacing: 1
  },
});

export default WelcomeScreen;