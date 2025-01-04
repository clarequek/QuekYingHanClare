import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet} from 'react-native';

export default function SkillsSection() {
    const { width } = Dimensions.get('window');

    const getFontSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

    const getScaledSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

    interface SkillProps { children: string }

    const Skill = ({ children }: SkillProps) => (
        <View style={styles.Skill}>
            <Text style={[styles.SkillText, { fontSize: getFontSize(24) }]}>{children}</Text>
        </View>
    );

    return (
        <View style={styles.SkillsSection}>
            <Image
                source={require('@/assets/images/SkillsTitle.png')}
                style={[{ width: getScaledSize(700), height: getScaledSize(265) }]}
            />

            {/* Languages */}
            <View style={styles.SubSkillsContainer}>
                <Text style={[styles.Subtitle, { fontSize: getFontSize(25) }]}>Languages: </Text>
                <Skill>Java</Skill>
                <Skill>Python</Skill>
                <Skill>R</Skill>
                <Skill>SQL</Skill>
            </View>

                    
            {/* Frameworks & Libraries */}
            <View style={styles.SubSkillsContainer}>
                <Text style={[styles.Subtitle, { fontSize: getFontSize(24) }]}>Frameworks & Libraries: </Text>
                <Skill>React.js</Skill>
                <Skill>React Native</Skill>
            </View>

            {/* Data Tools & Analytics */}
            <View style={styles.SubSkillsContainer}>
                <Text style={[styles.Subtitle, { fontSize: getFontSize(24) }]}>Data Tools & Analytics: </Text>
                <Skill>Tableau Desktop</Skill>
                <Skill>R Markdown</Skill>
                <Skill>Data Visualisation</Skill>
                <Skill>Data Exploration</Skill>
            </View>

            {/* Backend & Cloud Technologies */}
            <View style={styles.SubSkillsContainer}>
                <Text style={[styles.Subtitle, { fontSize: getFontSize(24) }]}>Backend & Cloud Technologies: </Text>
                <Skill>Firebase</Skill>
                <Skill>Cloud Firestore</Skill> 
            </View>

            {/* Version Control & Collaboration */}
            <View style={styles.SubSkillsContainer}>
                <Text style={[styles.Subtitle, { fontSize: getFontSize(24) }]}>Version Control: </Text>
                <Skill>Git</Skill>
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
        justifyContent: 'space-around',
        marginLeft: 100,
    },

    Subtitle: {
        fontFamily: 'DMSans',
        textAlign: 'center',
    },

    SubSkillsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
