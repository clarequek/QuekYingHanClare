import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import educationData from '../../api/educationAPI';
import Education from '../../components/education';

export default function EducationSection() {
    const { width } = Dimensions.get('window');

    const getScaledSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

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
        <View style={styles.EducationSection}>
          {/* Header */}
          {/* Header */}
          <Text style={[styles.Header, {fontSize: getFontSize(80)}]}>Education</Text>

          {/* Education */}
          <View style={styles.EducationContainer}>
            {educationData.map(education => (
              <Education key={education.id} education={education} />
            ))}
          </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    EducationSection: {
        position: 'relative',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: '5%',
        flexWrap: 'wrap',
    },

    EducationContainer: {
      alignItems: 'center',
    },

    Header: {
        fontFamily: 'DMSansBlack',
        color: '#000',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0.5, height: 0.5 }, 
        textShadowRadius: 10,
    },
});
