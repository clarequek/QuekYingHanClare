import React, { useState, useRef } from 'react';
import { View, Image, Text, Dimensions, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';
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
    const scaleValue = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.timing(scaleValue, {
            toValue: 1.08,
            duration: 150,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
        }).start();
    };

    return (
        <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.View
                    style={[
                        styles.Job,
                        {  
                            transform: [{ scale: scaleValue }],
                        },
                        { width: '90%'}
                    ]}
            >
                <View>
                    {/* Job Title */}
                    <Text style={[styles.JobName, { fontSize: getFontSize(26) }]}>{experience.jobTitle}</Text>

                    {/* Company */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(20), marginBottom: 5 }]}>{experience.company}</Text>

                    {/* Period */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(20), marginBottom: 5, fontFamily: 'DMSansItalic' }]}>{experience.period}</Text>

                    <Text style={[styles.Subtitle, { fontSize: getFontSize(10), marginBottom: 5 }]}> </Text>

                    {/* Job Description */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(20), marginBottom: 5, fontFamily: 'DMSansLight' }]}>{experience.jobDesc}</Text>

                    <Text style={[styles.Subtitle, { fontSize: getFontSize(10), marginBottom: 5 }]}> </Text>

                    {/* Skills */}
                    <View style={styles.SkillsContainer}>
                        <Text style={[styles.Subtitle, { fontSize: getFontSize(20), marginBottom: 5, fontFamily: 'DMSansBold' }]}>Skills: </Text>
                        {experience.skills.map(skill => ( <Skill key={skill}>{skill}</Skill> ))}
                    </View>
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
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
        flexWrap: 'wrap',
    },
});

export default Experience;