// Skill.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface SkillProps { children: string }

const Skill = ({ children } : SkillProps) => {
  const { width } = Dimensions.get('window');

  const getFontSize = (baseSize: number) => {
    return width < 1000 ? baseSize * 0.7 : baseSize;
  };

  return (
    <View style={styles.Skill}>
      <Text style={[styles.SkillText, { fontSize: getFontSize(24) }]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
Skill: {
    backgroundColor: '#ffe0e9',
    borderRadius: 20,
    marginRight: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },

  SkillText: {
    fontFamily: 'DMSans',
  },
});

export default Skill;
