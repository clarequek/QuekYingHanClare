import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import Experience from '../../components/experience';
import experienceData from '../../api/experienceAPI';

export default function ExperienceSection() {
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
        <View style={styles.ExperienceSection}>
            {/* Header */}
            <Text style={[styles.Header, {fontSize: getFontSize(80)}]}>Experience</Text>

            {/* Experiences */}
            <View style={styles.ExperienceContainer}>
                {experienceData.map(experience => (
                    <Experience key={experience.id} experience={experience} />
                ))} 
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    ExperienceSection: {
        position: 'relative',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: '5%',
        flexWrap: 'wrap',
    },

    ExperienceContainer: {
        alignItems: "center"
    },

    Header: {
        fontFamily: 'DMSansBlack',
        color: '#000',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0.5, height: 0.5 }, 
        textShadowRadius: 10,
    },
});