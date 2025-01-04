import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet} from 'react-native';
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

    return (
        
            <View style={[styles.Job, { width: getScaledSize(1200), height: getScaledSize(400) }]}>
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
    );
}

const styles = StyleSheet.create({

    JobName: {
        fontFamily: 'CooperHewittBold',
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
        marginRight: 20,
    },

    SkillsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 9,
    },
});

export default Experience;