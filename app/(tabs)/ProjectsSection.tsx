import React, { useState } from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import CookbookDiaries from './CookbookDiaries';

export default function ProjectsSection() {
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
            <Text style={[styles.SkillText, { fontSize: getFontSize(18) }]}>{children}</Text>
        </View>
    );

    const handlePress = (url : string ) => { 
        Linking.openURL(url); 
    };

    return (
        <View style={styles.ProjectsSection}>
            <Image
                source={require('@/assets/images/ProjectsTitle.png')}
                style={[{ width: getScaledSize(700), height: getScaledSize(265) }]}
            />
            <View style={styles.ProjectsContainer}>
                {/* Project 1: Cookbook Diaries */}
                <View style={[styles.Project, { width: getScaledSize(350), height: getScaledSize(650) }]}>
                    {/* Project Image */ }
                    <Image
                        source={require('@/assets/images/Project1Pic.png')}
                        style={[{ width: getScaledSize(300), height: getScaledSize(300) }]}
                    />

                    {/* Project Name */}
                    <Text style={[styles.ProjectName, { fontSize: getFontSize(22) }]}>Cookbook Diaries</Text>

                    {/* Short Description */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(18), marginBottom: 5 }]}>School Orbital project hosted on Expo with an achievement of Apollo 11</Text>

                    {/* Skills */}
                    <View style={styles.SkillsContainer}>
                        <Text style={[styles.Subtitle, { fontSize: getFontSize(18) }]}>Skills: </Text>
                        <Skill>React.js</Skill>
                        <Skill>React Native</Skill>
                        <Skill>Firebase</Skill>
                    </View>
                    <View style={styles.SkillsContainer}>
                        <Skill>Cloud Firestore</Skill>
                        <Skill>User Interface Design</Skill>
                    </View>
                    <View style={styles.SkillsContainer}>
                        <Skill>SOLID Design Principles</Skill>
                        <Skill>Agile Sprints</Skill>
                    </View>
                    <View style={styles.SkillsContainer}>
                        <Skill>Git</Skill>
                    </View>

                    {/* Buttons */}
                    {/* Video Demonstration Button */}
                    <TouchableOpacity style={styles.Button} onPress={() => {handlePress('https://drive.google.com/file/d/1IStatmHLwEDau5v_wQWJ3IoCoRaNGALZ/view?usp=drive_link')}}>
                        <Text style={[styles.ButtonText, {fontSize: getFontSize(18)}]}>VIDEO DEMONSTRATION</Text>
                    </TouchableOpacity>

                    {/* Github Repo Button */}
                    <TouchableOpacity style={styles.Button} onPress={() => {handlePress('https://github.com/clarequek/Cookbook-Diaries')}}>
                        <Text style={[styles.ButtonText, {fontSize: getFontSize(18)}]}>GITHUB REPOSITORY</Text>
                    </TouchableOpacity>   

                </View>

                {/* Project 2: Personal Website */}
                <View style={[styles.Project, { width: getScaledSize(350), height: getScaledSize(650) }]}>
                    {/* Project Image */ }
                    <Image
                        source={require('@/assets/images/PersonalWebsitePicture.png')}
                        style={[{ width: getScaledSize(350), height: getScaledSize(350) }]}
                    />

                    {/* Project Name */}
                    <Text style={[styles.ProjectName, { fontSize: getFontSize(22) }]}>Personal Website</Text>

                    {/* Short Description */}
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(18), marginBottom: 5 }]}> Personal website hosted on Expo</Text>

                    {/* Skills */}
                    <View style={styles.SkillsContainer}>
                        <Text style={[styles.Subtitle, { fontSize: getFontSize(18) }]}>Skills: </Text>
                        <Skill>React.js</Skill>
                        <Skill>React Native</Skill>
                        <Skill>Git</Skill>
                    </View>

                    {/* Buttons */}
                    {/* Video Demonstration Button */}
                    <TouchableOpacity style={styles.Button} onPress={() => {handlePress('https://drive.google.com/file/d/1IStatmHLwEDau5v_wQWJ3IoCoRaNGALZ/view?usp=drive_link')}}>
                        <Text style={[styles.ButtonText, {fontSize: getFontSize(18)}]}>VIDEO DEMONSTRATION</Text>
                    </TouchableOpacity>
                    
                    {/* Github Repo Button */}
                    <TouchableOpacity style={styles.Button} onPress={() => {handlePress('https://github.com/clarequek/Cookbook-Diaries')}}>
                        <Text style={[styles.ButtonText, {fontSize: getFontSize(18)}]}>GITHUB REPOSITORY</Text>
                    </TouchableOpacity>   
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

    ProjectName: {
        fontFamily: 'CooperHewittBold',
    },

    Subtitle: {
        fontFamily: 'DMSans',
        textAlign: 'center',
    },

    ProjectsContainer: {
        flexDirection: 'row',
    },

    Project: {
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

    Button: {
        height: 30,
        marginTop: 10,
        width: '65%',
        backgroundColor: '#f4ac91',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ButtonText: {
        fontFamily: 'CooperHewittBold',
        color: '#ffffff',
    },
});
