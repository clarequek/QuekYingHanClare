import React, { useState, useRef } from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, Linking, Animated, TouchableWithoutFeedback} from 'react-native';
import Skill from './skill';

interface ProjectProps { project: { 
    id: number; 
    name: string; 
    description: string; 
    image: any; 
    skills: string[]; 
    videoDemoUrl: string; 
    githubRepoUrl: string;
}}

const Project : React.FC<ProjectProps> = ({ project }) => {
    const { width } = Dimensions.get('window');

    const getFontSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

    const getScaledSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

    const handlePress = (url : string ) => { 
        Linking.openURL(url); 
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
                    styles.Project,
                    {                     
                        transform: [{ scale: scaleValue }],
                    },
                    { width: getScaledSize(450), height: getScaledSize(850)}
                ]}
            >
                
                {/* Project Image */ }
                <Image
                    source={typeof project.image === 'string' ? { uri: project.image } : project.image}
                    style={[{ 
                        width: getScaledSize(250), 
                        height: getScaledSize(250), 
                    }]}
                />

                {/* Project Name */}
                <Text style={[styles.ProjectName, { fontSize: getFontSize(26) }]}>{project.name}</Text>

                {/* Short Description */}
                <Text style={[styles.Subtitle, { fontSize: getFontSize(20), marginBottom: 5 }]}>{project.description}</Text>
                <Text style={[styles.Subtitle, { fontSize: getFontSize(2), marginBottom: 5 }]}> </Text>

                {/* Skills */}
                <View style={styles.SkillsContainer}>
                    <Text style={[styles.Subtitle, { fontSize: getFontSize(20), marginBottom: 5, fontFamily: 'DMSansBold' }]}>Skills: </Text>
                    {project.skills.map(skill => ( <Skill key={skill}>{skill}</Skill> ))}
                </View>

                {/* Buttons */}
                {/* Video Demonstration Button */}
                <TouchableOpacity style={styles.Button} onPress={() => {handlePress(project.videoDemoUrl)}}>
                    <Text style={[styles.ButtonText, {fontSize: getFontSize(20)}]}>VIDEO DEMONSTRATION</Text>
                </TouchableOpacity>

                {/* Github Repo Button */}
                <TouchableOpacity style={styles.Button} onPress={() => {handlePress(project.githubRepoUrl)}}>
                    <Text style={[styles.ButtonText, {fontSize: getFontSize(20)}]}>GITHUB REPOSITORY</Text>
                </TouchableOpacity>  
                
            </Animated.View> 
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    ProjectName: {
        fontFamily: 'CooperHewittBold',
        textAlign: 'center',
    },

    Subtitle: {
        fontFamily: 'DMSansLight',
        textAlign: 'center',
    },

    Project: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20, 
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, // For Android shadow
    },

    SkillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 9,
    },

    Button: {
        height: 40,
        marginTop: 10,
        width: '75%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ButtonText: {
        fontFamily: 'CooperHewittBold',
        color: '#ffffff',
        marginTop: 4,
        textAlign: 'center',
    },
});

export default Project;
