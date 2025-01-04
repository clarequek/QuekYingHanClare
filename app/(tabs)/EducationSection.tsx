import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet} from 'react-native';

export default function EducationSection() {
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
        <View style={styles.EducationSection}>
            <Image
                source={require('@/assets/images/EducationTitle.png')}
                style={[{ width: getScaledSize(700), height: getScaledSize(265) }]}
            />
            <View style={styles.EducationContainer}>
                {/* Education 1: National University of Singapore */}
                <View style={[styles.Education, { width: getScaledSize(1200), height: getScaledSize(700) }]}>

                    {/* Education Name */}
                    <Text style={[styles.Header, { fontSize: getFontSize(30) }]}>Bachelor of Science in Business Analytics (with Honours) - School of Computing</Text>

                    {/* Institute */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(28), marginBottom: 5 }]}>National University of Singapore</Text>

                    {/* Period */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>Aug 2023 - May 2027</Text>

                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}> </Text>
                    
                    {/* Activities */}
                    <Text style={[styles.Header, { fontSize: getFontSize(24), marginBottom: 5 }]}>AY 23/24:</Text>
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>- NUS Computing Freshman Orientation Project Sub-Committee: Publicity Executive</Text>
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>- NUS Computing Freshman Orientation Week: Orientation Group Leader</Text>
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>- NUS Sports Camp Organising Committee: Publicity Executive</Text>
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>- Orbital: Apollo 11</Text>

                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}> </Text>

                    <Text style={[styles.Header, { fontSize: getFontSize(24), marginBottom: 5 }]}>AY 24/25:</Text>
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>- Raffles Hall Block 4 Committee Head</Text>
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>- Raffles Hall Dinner and Dance Vice-Head</Text>
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>- Raffles Hall Volunteer Corps (Children) Vice-Head</Text>

                </View>

                {/* Education 2: Victoria Junior College */}
                <View style={[styles.Education, { width: getScaledSize(1200), height: getScaledSize(700) }]}>

                    {/* Education Name */}
                    <Text style={[styles.Header, { fontSize: getFontSize(30) }]}>GCE A Levels</Text>

                    {/* Institute */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(28), marginBottom: 5 }]}>Victoria Junior College</Text>

                    {/* Period */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>Jan 2021 - Dec 2022</Text>

                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}> </Text>
                    
                    {/* Activities */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>- Symphonic Band: Section Leader of Clarinet Section (2021-2022), Singapore Youth Festival (Distinction) (2021)</Text>
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>- Community Service Project (2022): Publicity Executive of Project Mariposa - Fundraising initiative to support the Children's Cancer Foundation</Text>
                </View>
            </View>
            
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

    EducationContainer: {
      alignItems: 'center',
    },

    Education: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginBottom: 20,
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
