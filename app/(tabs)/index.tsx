import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import TabBar from '../(tabs)/TabBar';
import HomeSection from '../(tabs)/HomeSection';
import ProjectsSection from '../(tabs)/ProjectsSection';
import EducationSection from '../(tabs)/EducationSection';

export default function MainScreen() {
  
  return (
      <View style={styles.Container}>
        {/* Fixed Tab Bar */}
        <TabBar />

        {/* Background of website */}
        <Image
          source={require('@/assets/images/IntroBackground.png')}
          style={styles.Background} 
        />
        <ScrollView contentContainerStyle={styles.ScrollViewContainer} >
          {/* Right Gradient */}
          <Image
            source={require('@/assets/images/GradientRight.png')}
            style={styles.RightGradient} 
          />
          
          {/* Left Gradient */}
          <Image
            source={require('@/assets/images/GradientLeft.png')}
            style={styles.LeftGradient} 
          />

          {/* Home Section */}
          <View style = {[styles.Section, {marginTop: 150}]}>
            <HomeSection />
          </View>

          {/* Projects Section */}
          <View style = {styles.Section}>
            <ProjectsSection />
          </View>

          {/* Education Section */}
          <View style = {styles.Section}>
            <EducationSection />
          </View>

        </ScrollView>
     
       
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

  ScrollViewContainer: {
    flexGrow: 1,
    padding: 20,
  },

  RightGradient: {
    position: 'absolute', 
    top: -550,
    right: -250, 
    width: '50%', 
    height: '100%',
    resizeMode: 'contain',
  },

  LeftGradient: {
    position: 'absolute', 
    top: -950,
    left: -550, 
    width: '80%', // Adjust the width as needed 
    height: '130%', 
    resizeMode: 'contain',
  },

  Section: {
    marginBottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
