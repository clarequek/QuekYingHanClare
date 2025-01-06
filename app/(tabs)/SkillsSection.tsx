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
            
            <View style={styles.Container}>
                {/* Header */}
                <Text style={[styles.Header, {fontSize: getFontSize(80)}]}>Skills</Text>
                {/* Skills */}
                {skillsData.map((skill) => (
                    <View key={skill.id} style={styles.SkillsContainer}>
                        <Text style={[styles.Subtitle, { fontSize: getFontSize(20), fontFamily: 'DMSansBold' }]}>{skill.id}: </Text>
                        {skill.skills.map((skillItem) => (
                            <Skill key={skillItem}>{skillItem}</Skill>
                        ))}
                    </View>
                ))}    
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    SkillsSection: {
        position: 'relative',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingHorizontal: '5%',
        flexWrap: 'wrap',
    },

    Container: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flex: 1,
    },

    Subtitle: {
        fontFamily: 'DMSans',
        textAlign: 'center',
        marginBottom: 5,
    },

    SkillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 9,
    },

    Header: {
        fontFamily: 'DMSansBlack',
        color: '#000',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0.5, height: 0.5 }, 
        textShadowRadius: 10,
    },
});
