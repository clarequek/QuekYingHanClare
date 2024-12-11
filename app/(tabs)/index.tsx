import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions, Platform } from 'react-native';
import TabBar from '../(tabs)/TabBar';
import HomeSection from '../(tabs)/HomeSection';

export default function HomeScreen() {
  const { width, height } = Dimensions.get('window');
  
  return (
      <View style={styles.Container}>
        {/* Fixed Tab Bar */}
        <TabBar />

        {/* Background of website */}
        <Image
          source={require('@/assets/images/IntroBackground.png')}
          style={styles.Background} 
        />
        {/* Home Section */}
        <HomeSection />
       
      </View>
    

  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },


  Background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
