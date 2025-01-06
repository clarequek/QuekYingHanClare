import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface TabBarProps { 
  handleScrollTo: (section: string) => void; 
}

const TabBar: React.FC<TabBarProps> = ({ handleScrollTo }) => {
    const { width } = Dimensions.get('window');
  
    const getFontSize = (baseSize : number) : number => {
      if (width < 1000) {
        // Computer screen, smaller font
        return baseSize * 0.7;
      } else {
        // Phone screen, larger font
        return baseSize;
      }
    };
    
    return (
        <View style={styles.TabBar}>
          <TouchableOpacity onPress={() => handleScrollTo('home')}>
            <Text style={[styles.TabBarText, { fontSize: getFontSize(15) }]}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleScrollTo('experience')}>
            <Text style={[styles.TabBarText, { fontSize: getFontSize(15) }]}>EXPERIENCE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleScrollTo('projects')}>
            <Text style={[styles.TabBarText, { fontSize: getFontSize(15) }]}>PROJECTS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleScrollTo('education')}>
            <Text style={[styles.TabBarText, { fontSize: getFontSize(15) }]}>EDUCATION</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleScrollTo('skills')}>
            <Text style={[styles.TabBarText, { fontSize: getFontSize(15) }]}>SKILLS</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    TabBar: {
      width: '100%',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 10, 
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    
    TabBarText: {
      color: '#000',
      fontFamily: 'CooperHewittBold'
    },
});

export default TabBar;