import React, { useState } from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import projectsData from '../../api/projectsAPI';
import Project from '../../components/project';

export default function ProjectsSection() {
    const { width } = Dimensions.get('window');

    const getScaledSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

    return (
        <View style={styles.ProjectsSection}>
            {/* Header */}
            <Image
                source={require('@/assets/images/ProjectsTitle.png')}
                style={[{ width: getScaledSize(700), height: getScaledSize(265) }]}
            />

            {/* Projects */}
            <View style={styles.ProjectsContainer}>
                {projectsData.map(project => (
                    <Project key={project.id} project={project} />
                ))}
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

    ProjectsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
});
