import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import educationData from '../../api/educationAPI';
import Education from '../../components/education';

export default function EducationSection() {
    const { width } = Dimensions.get('window');

    const getScaledSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

    return (
        <View style={styles.EducationSection}>
          {/* Header */}
          <Image
            source={require('@/assets/images/EducationTitle.png')}
            style={[{ width: getScaledSize(700), height: getScaledSize(265) }]}
          />

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
        marginLeft: 100,
    },

    EducationContainer: {
      alignItems: 'center',
    },
});
