import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet} from 'react-native';

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

    return (  
        <View style={[styles.Education, 
        //{ width: getScaledSize(1200), height: getScaledSize(700) }
        ]}>
            {/* Degree */}
            <Text style={[styles.Header, { fontSize: getFontSize(30) }]}>{ education.degree }</Text>

            {/* Institute */}
            <Text style={[styles.Subtitle, { fontSize: getFontSize(28), marginBottom: 5 }]}>{ education.institute }</Text>

            {/* Period */}
            <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5, fontFamily: 'DMSansItalic' }]}>{ education.period }</Text>

            <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}> </Text>
                    
            {/* Activities */}
            <Text style={[styles.Header, { fontSize: getFontSize(24), marginBottom: 5 }]}> Activities and Societies: </Text>
            {education.activities.map(activity => ( <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5, fontFamily: 'DMSansLight' }]}>• { activity }</Text> ))}
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

    Header: {
        fontFamily: 'CooperHewittBold',
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
        marginRight: 20,
        marginBottom: 20,
        paddingHorizontal: 50,
        paddingVertical: 50,
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
