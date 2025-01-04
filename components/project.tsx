import React, { useState } from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, Linking, Animated} from 'react-native';
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
    const scaleValue = isHovered ? 1.08 : 1;

    return (
        <Animated.View
            style={[
                styles.Project,
                {                     
                    transform: [{ scale: scaleValue }],
                },
                { width: '45%', height: '100%'}
            ]}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            {/* Project Image */ }
            <Image
                source={typeof project.image === 'string' ? { uri: project.image } : project.image}
                style={[{ 
                    width: getScaledSize(300), 
                    height: getScaledSize(300), 
                }]}
            />

            {/* Project Name */}
            <Text style={[styles.ProjectName, { fontSize: getFontSize(30) }]}>{project.name}</Text>

            {/* Short Description */}
            <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>{project.description}</Text>
            <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}> </Text>

            {/* Skills */}
            <View style={styles.SkillsContainer}>
                <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5, fontFamily: 'DMSans' }]}>Skills: </Text>
                {project.skills.map(skill => ( <Skill key={skill}>{skill}</Skill> ))}
            </View>

            {/* Buttons */}
            {/* Video Demonstration Button */}
            <TouchableOpacity style={styles.Button} onPress={() => {handlePress(project.videoDemoUrl)}}>
                <Text style={[styles.ButtonText, {fontSize: getFontSize(24)}]}>VIDEO DEMONSTRATION</Text>
            </TouchableOpacity>

            {/* Github Repo Button */}
            <TouchableOpacity style={styles.Button} onPress={() => {handlePress(project.githubRepoUrl)}}>
                <Text style={[styles.ButtonText, {fontSize: getFontSize(24)}]}>GITHUB REPOSITORY</Text>
            </TouchableOpacity>  
        </Animated.View> 

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
        height: 55,
        marginTop: 10,
        width: '95%',
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
