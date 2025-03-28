import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, LayoutChangeEvent } from 'react-native';
import TabBar from '../(tabs)/TabBar';
import LedgerButton from '../(tabs)/LedgerButton';
import HomeSection from '../(tabs)/HomeSection';
import ExperienceSection from '../(tabs)/ExperienceSection';
import ProjectsSection from '../(tabs)/ProjectsSection';
import EducationSection from '../(tabs)/EducationSection';
import SkillsSection from '../(tabs)/SkillsSection';

export default function MainScreen() {
  const { width } = Dimensions.get('window');

  const scrollViewRef = useRef<ScrollView>(null);
  const [sectionPositions, setSectionPositions] = useState<Record<string, number>>({});

  const onSectionLayout = (sectionName: string) => (event:LayoutChangeEvent) => {
    const { y } = event.nativeEvent.layout;
    setSectionPositions((prevPositions) => ({
      ...prevPositions,
      [sectionName]: y,
    }));
  };

  const handleScrollTo = (sectionName: string) => {
    const yOffset = sectionPositions[sectionName] || 0;
    scrollViewRef.current?.scrollTo({ y: yOffset, animated: true });
  };

  return (
    <View style={styles.container}>
      {/* Conditional rendering based on width */} 
      {width < 1000 ? ( 
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
          <View style={styles.Section} onLayout={onSectionLayout('home')} key="home">
            <HomeSection />
          </View>
          <View style = {styles.Section} onLayout={onSectionLayout('experience')} key="experience">
            <ExperienceSection />
          </View>
          <View style={[styles.Section, {marginTop: 150}]} onLayout={onSectionLayout('projects')} key="projects">
            <ProjectsSection />
          </View>
          <View style={[styles.Section, {marginTop: 150}]} onLayout={onSectionLayout('education')} key="education">
            <EducationSection />
          </View>
          <View style={[styles.Section, {marginTop: 150}]} onLayout={onSectionLayout('skills')} key="skills">
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