import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, Linking} from 'react-native';
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

    return (
        <View style={[styles.Project, { width: getScaledSize(450), height: getScaledSize(850) }]}>
            {/* Project Image */ }
            <Image
                source={typeof project.image === 'string' ? { uri: project.image } : project.image}
                style={[{ width: getScaledSize(300), height: getScaledSize(300), }]}
            />

            {/* Project Name */}
            <Text style={[styles.ProjectName, { fontSize: getFontSize(30) }]}>{project.name}</Text>

            {/* Short Description */}
            <Text style={[styles.Subtitle, { fontSize: getFontSize(24), marginBottom: 5 }]}>{project.description}</Text>

            {/* Skills */}
            <View style={styles.SkillsContainer}>
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
        </View>

    );
}

const styles = StyleSheet.create({
    ProjectName: {
        fontFamily: 'CooperHewittBold',
    },

    Subtitle: {
        fontFamily: 'DMSans',
        textAlign: 'center',
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
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 9,
    },

    Button: {
        height: 40,
        marginTop: 10,
        width: '65%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ButtonText: {
        fontFamily: 'CooperHewittBold',
        color: '#ffffff',
        marginTop: 4,
    },
});

export default Project;
