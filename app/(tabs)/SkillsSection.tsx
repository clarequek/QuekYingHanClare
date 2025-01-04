import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import Skill from '../../components/skill';
import skillsData from '../../api/skillsAPI'

export default function SkillsSection() {
    const { width } = Dimensions.get('window');

    const getFontSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

    const getScaledSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };


    return (
        <View style={styles.SkillsSection}>
            {/* Header */}
            <Image
                source={require('@/assets/images/SkillsTitle.png')}
                style={[{ width: getScaledSize(700), height: getScaledSize(265) }]}
            />

            {/* Skills */}
            {skillsData.map((skill) => (
                <View key={skill.id} style={styles.SkillsContainer}>
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(25) }]}>{skill.id}: </Text>
                    {skill.skills.map((skillItem) => (
                        <Skill key={skillItem}>{skillItem}</Skill>
                    ))}
                </View>
            ))}      
        </View>
    );
}

const styles = StyleSheet.create({
    SkillsSection: {
        position: 'relative',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        marginLeft: 100,
    },

    Subtitle: {
        fontFamily: 'DMSans',
        textAlign: 'center',
    },

    SkillsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 9,
    },
});
