import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet} from 'react-native';

export default function ExperienceSection() {
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
        <View style={styles.ProjectsSection}>
            <Image
                source={require('@/assets/images/ExperienceTitle.png')}
                style={[{ width: getScaledSize(700), height: getScaledSize(265) }]}
            />
            <View style={styles.ExperienceContainer}>
                {/* Experience 1: IRAS */}
                <View style={[styles.Job, { width: getScaledSize(1200), height: getScaledSize(400) }]}>

                    {/* Job Title */}
                    <Text style={[styles.JobName, { fontSize: getFontSize(30) }]}>Temporary Call Centre Tax Advisor</Text>

                    {/* Company */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(28), marginBottom: 5 }]}>Inland Revenue Authority of Singapore</Text>

                    {/* Period */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>Feb 2023 - June 2023</Text>

                    {/* Job Description */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>I managed and addressed inquiries related to stamp duty through both phone calls and live chat platforms. This involved providing detailed information on stamp duty regulations, calculations, and procedures to clients. I ensured that all inquiries were handled promptly and accurately, and I facilitated effective communication between clients and relevant departments to resolve any issues or provide additional support as needed.</Text>

                    {/* Skills */}
                    <View style={styles.SkillsContainer}>
                        <Text style={[styles.Subtitle, { fontSize: getFontSize(24) }]}>Skills: </Text>
                        <Skill>Customer Service</Skill>
                    </View>
                </View>
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    ProjectsSection: {
        position: 'relative',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        marginLeft: 100,
    },

    JobName: {
        fontFamily: 'CooperHewittBold',
    },

    Subtitle: {
        fontFamily: 'DMSans',
        textAlign: 'center',
    },

    ExperienceContainer: {
        alignItems: 'center',
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
