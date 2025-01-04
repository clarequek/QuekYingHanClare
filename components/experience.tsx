import React, { useState } from 'react';
import { View, Image, Text, Dimensions, StyleSheet, Animated} from 'react-native';
import Skill from './skill';

interface ExperienceProps { experience: { 
    id: number; 
    jobTitle: string; 
    company: string; 
    period: string; 
    jobDesc: string;
    skills: string[]; 
}}

const Experience : React.FC<ExperienceProps> = ({ experience }) => {
    const { width } = Dimensions.get('window');

    const getFontSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

    const getScaledSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

    const [isHovered, setIsHovered] = useState(false);
    const scaleValue = isHovered ? 1.08 : 1;

    return (
        <Animated.View
                style={[
                    styles.Job,
                    {  
                        transform: [{ scale: scaleValue }],
                    },
                    { width: '90%'}
                ]}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
        >
            <View>
                {/* Job Title */}
                <Text style={[styles.JobName, { fontSize: getFontSize(30) }]}>{experience.jobTitle}</Text>

                {/* Company */}
                <Text style={[styles.Subtitle, { fontSize: getFontSize(28), marginBottom: 5 }]}>{experience.company}</Text>

                {/* Period */}
                <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5, fontFamily: 'DMSansItalic' }]}>{experience.period}</Text>

                <Text style={[styles.Subtitle, { fontSize: getFontSize(10), marginBottom: 5 }]}> </Text>

                {/* Job Description */}
                <Text style={[styles.Subtitle, { fontSize: getFontSize(22), marginBottom: 5, fontFamily: 'DMSansLight' }]}>{experience.jobDesc}</Text>

                <Text style={[styles.Subtitle, { fontSize: getFontSize(10), marginBottom: 5 }]}> </Text>

                {/* Skills */}
                <View style={styles.SkillsContainer}>
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>Skills: </Text>
                    {experience.skills.map(skill => ( <Skill key={skill}>{skill}</Skill> ))}
                </View>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({

    JobName: {
        fontFamily: 'CooperHewittBold',
        textAlign: 'center',
    },

    Subtitle: {
        fontFamily: 'DMSans',
        textAlign: 'center',
    },

    Job: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        marginBottom: '2.5%',
        paddingVertical: '2.5%',
        paddingHorizontal: '2.5%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, // For Android shadow
    },

    SkillsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 9,
    },
});

export default Experience;