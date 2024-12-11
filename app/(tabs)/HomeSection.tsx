import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';

export default function HomeSection() {
    const { width } = Dimensions.get('window');
  
    const getFontSize = (baseSize : number) : number => {
      if (width < 1000) {
        // Computer screen, smaller font
        return baseSize * 0.7;
      } else {
        // Phone screen, larger font
        return baseSize;
      }
    };

    const getScaledSize = (baseSize : number) => { 
        return width < 1000 ? baseSize * 0.7 : baseSize;
    };

   
    return (
        <View style={styles.HomeSection}>
            {/* Intro Content */}
            <View style={styles.IntroContainer}>
                <Image
                    source={require('@/assets/images/IntroPic.png')}
                    style={[styles.IntroPic, { width: getScaledSize(500), height: getScaledSize(620) }]}
                />
                <View style= {styles.IntroContent}>
                    <Image
                        source={require('@/assets/images/HomeTitle.png')}
                        style={[ { width: getScaledSize(700), height: getScaledSize(265) } ]}
                    />
                    <View style={styles.IntroText}> 
                        <Text style = {[styles.Subtitle, {fontSize: getFontSize(25)}]}>I'm a Year 2 Business Analytics undergraduate at the National University of Singapore. I'm a passionate learner with a strong interest in user interface design and app development. I'm always eager to explore new technologies, collaborate with others and contribute to impactful projects that enhance user experiences.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    HomeSection: {
        position: 'relative',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },

    IntroContainer: {
      flexDirection: 'row',
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 280,
      
    },

    IntroContent: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 80,

    },

    IntroPic: {
        borderRadius: 120,

    },
  

    IntroText: {
        marginTop: 15,
        marginLeft: 15,
        width: '67%',
    },

    Subtitle: {
        fontFamily: 'DMSans',
        textAlign: 'center',
    }
  
  });