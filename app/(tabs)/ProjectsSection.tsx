import React, { useState } from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import projectsData from '../../api/projectsAPI';
import Project from '../../components/project';

export default function ProjectsSection() {
    const { width } = Dimensions.get('window');

    const getScaledSize = (baseSize: number): number => {
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

    const getFontSize = (baseSize : number) : number => {
        if (width < 1000) {
          // Computer screen, smaller font
          return baseSize * 0.7;
        } else {
          // Phone screen, larger font
          return baseSize;
        }
      };

    return (
        <View style={styles.ProjectsSection}>
            {/* Header */}
            <Text style={[styles.Header, {fontSize: getFontSize(80)}]}>Projects</Text>

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
        paddingHorizontal: '5%'
    },

    ProjectsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    Header: {
        fontFamily: 'DMSansBlack',
        color: '#000',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0.5, height: 0.5 }, 
        textShadowRadius: 10,
    },
});
