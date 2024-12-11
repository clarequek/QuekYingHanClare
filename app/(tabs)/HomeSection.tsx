import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function HomeSection() {
    return (
        <View style={styles.HomeSection}>
            {/* Right Gradient */}
            <Image
                source={require('@/assets/images/GradientRight.png')}
                style={styles.RightGradient} 
            />
        
            {/* Left Gradient */}
            <Image
                source={require('@/assets/images/GradientLeft.png')}
                style={styles.LeftGradient} 
            />
            {/* Intro Content */}
            <View style={styles.IntroContainer}>
                <Image
                    source={require('@/assets/images/IntroPic.png')}
                    style={styles.IntroPic}
                />
                <View style= {styles.IntroContent}>
                    <Image
                        source={require('@/assets/images/Title.png')}
                        style={styles.IntroTitle}
                    />
                    <View style= {styles.IntroText}>
                        <Text style = {styles.Subtitle}>I'm a Year 2 Business Analytics undergraduate at the National University</Text>
                        <Text style = {styles.Subtitle}>of Singapore. I'm a passionate learner with a strong interest in user</Text>
                        <Text style = {styles.Subtitle}>interface design and app development. I'm always eager to explore new</Text>
                        <Text style = {styles.Subtitle}>technologies, collaborate with others and contribute to impactful</Text>
                        <Text style = {styles.Subtitle}>projects that enhance user experiences.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    HomeSection: {
        position: 'absolute',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        marginTop: 150,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    RightGradient: {
        right: -1250,
        bottom: -50,
        height: 900,
        width: 900,
    },
  
    LeftGradient: {
      position: 'absolute',
      bottom: -450,
      left: -550,
      height: 1500,
      width: 1500,
    },

    IntroContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      position: 'absolute',
      //marginLeft: 90,
      flex: 1,
    },

    IntroContent: {
        alignItems: 'flex-start',
        marginLeft: 30,
    },

    IntroPic: {
      height: 1000,
      width: 1000,
    },
  
    IntroTitle: {
      width: 503,
      height: 208,  
    },

    IntroText: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    Subtitle: {
      
    },
  });