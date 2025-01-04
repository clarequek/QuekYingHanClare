import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, ScrollView, Platform } from 'react-native';
import TabBar from '../(tabs)/TabBar';
import LedgerButton from '../(tabs)/LedgerButton';
import HomeSection from '../(tabs)/HomeSection';
import ExperienceSection from '../(tabs)/ExperienceSection';
import ProjectsSection from '../(tabs)/ProjectsSection';
import EducationSection from '../(tabs)/EducationSection';
import SkillsSection from '../(tabs)/SkillsSection';

export default function MainScreen() {
  const scrollViewRef = useRef(null);
  const [sectionPositions, setSectionPositions] = useState({});

  const onSectionLayout = (sectionName) => (event) => {
    const { y } = event.nativeEvent.layout;
    setSectionPositions((prevPositions) => ({
      ...prevPositions,
      [sectionName]: y,
    }));
  };

  const handleScrollTo = (sectionName) => {
    const yOffset = sectionPositions[sectionName] || 0;
    scrollViewRef.current?.scrollTo({ y: yOffset, animated: true });
  };

  return (
    <View style={styles.container}>
      {/* Conditional rendering based on platform */} 
      {Platform.OS === 'ios' || Platform.OS === 'android' ? ( 
        <LedgerButton handleScrollTo={handleScrollTo} /> 
      ) : ( 
      <TabBar handleScrollTo={handleScrollTo} />
      )}

      {/* Background Image */}
      <Image
        source={require('@/assets/images/IntroBackground.png')}
        style={styles.background}
      />

      {/* Scrollable Content */}
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContainer}
        scrollEventThrottle={16}
      >
        <View>
          <View style={styles.Section} onLayout={onSectionLayout('home')}>
            <HomeSection />
          </View>
          <View style = {styles.Section} onLayout={onSectionLayout('experience')}>
            <ExperienceSection />
          </View>
          <View style={[styles.Section, {marginTop: 150}]} onLayout={onSectionLayout('projects')}>
            <ProjectsSection />
          </View>
          <View style={[styles.Section, {marginTop: 150}]} onLayout={onSectionLayout('education')}>
            <EducationSection />
          </View>
          <View style={[styles.Section, {marginTop: 150}]} onLayout={onSectionLayout('skills')}>
            <SkillsSection />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  scrollViewContainer: {
    flexGrow: 1,
  },

  Section: {
    //justifyContent: 'center',
    //alignItems: 'center',
  },
});
