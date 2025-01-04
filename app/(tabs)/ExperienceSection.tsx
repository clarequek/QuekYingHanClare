import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import Experience from '../../components/experience';
import experienceData from '../../api/experienceAPI';

export default function ExperienceSection() {
    const { width } = Dimensions.get('window');

    const getScaledSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

    return (
        <View style={styles.ExperienceSection}>
            {/* Header */}
            <Image
                source={require('@/assets/images/ExperienceTitle.png')}
                style={[{ width: getScaledSize(700), height: getScaledSize(265) }]}
            />
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
        marginLeft: 100,
    },

    ExperienceContainer: {
        alignItems: 'center',
    },
});
