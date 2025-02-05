import React, { useState, useRef } from 'react';
import { View, Image, Text, Dimensions, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';

interface EducationProps { education: { 
    id: number; 
    degree: string; 
    institute: string; 
    period: string; 
    activities: string[]; 
}}

const Education : React.FC<EducationProps> = ({ education }) => {

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
                        styles.Education,
                        {
                            transform: [{ scale: scaleValue }],
                        },
                        {width: '90%'}
                    ]}
            >
                <View>
                    {/* Degree */}
                    <Text style={[styles.Header, { fontSize: getFontSize(26) }]}>{ education.degree }</Text>

                    {/* Institute */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(20), marginBottom: 5 }]}>{ education.institute }</Text>

                    {/* Period */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(20), marginBottom: 5, fontFamily: 'DMSansItalic' }]}>{ education.period }</Text>

                    <Text style={[styles.Subtitle, { fontSize: getFontSize(20), marginBottom: 5 }]}> </Text>
                            
                    {/* Activities */}
                    <Text style={[styles.Header, { fontSize: getFontSize(23), marginBottom: 5 }]}> Activities and Societies: </Text>
                    {education.activities.map((activity, index) => ( <Text key={index} style={[styles.Subtitle, { fontSize: getFontSize(20), marginBottom: 5, fontFamily: 'DMSansLight' }]}>• { activity }</Text> ))}
                </View>   
            </Animated.View> 
        </TouchableWithoutFeedback>        
    );
}


const styles = StyleSheet.create({
    Header: {
        fontFamily: 'CooperHewittBold',
        textAlign: 'center',
    },

    Subtitle: {
        fontFamily: 'DMSans',
        textAlign: 'center',
    },

    Education: {
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

    Skill: {
        backgroundColor: '#ffe0e9',
        borderRadius: 5,
        height: 18,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    SkillText: {
        fontFamily: 'DMSans',
    },
});

export default Education;
