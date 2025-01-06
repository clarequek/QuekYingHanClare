import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

    const handlePress = (url: string) => {
        // Check if the link is a mailto link
        if (url.includes('mailto:')) {
            // Open the email client
            Linking.openURL(url);
        } else {
            // Open the regular URL (LinkedIn or Github)
            Linking.openURL(url).catch((err) => console.error('An error occurred', err));
        }
    };

   
    return (
        <View style={styles.HomeSection}>
            {/* Intro Content */}
            <View style={[
                styles.IntroContainer,
                width > 1000
                ? { flexDirection: 'row' } 
                : { flexDirection: 'column' }
            ]}>
                
                <Image
                    source={require('@/assets/images/IntroPic.png')}
                    style={[
                        styles.IntroPic,
                        width > 1000
                            ? { width: getScaledSize(500), height: getScaledSize(500) } // Dynamic sizing for web
                            : { width: 300, height: 300 } // Fixed sizing for iOS/Android
                    ]}
                />
                <View style= {styles.IntroContent}>
                    {/* Header */}
                    <View style={styles.HeaderContainer}>
                        <Text style={[styles.SubHeader, {fontSize: getFontSize(35)}]}>Hi, I'm</Text>
                        <Text style={[styles.Header, {fontSize: getFontSize(150)}]}>Clare.</Text>
                    </View>
                    <View style={styles.IntroText}> 
                        <Text style = {[styles.Subtitle, {fontSize: getFontSize(23)}]}>I'm a Year 2 Business Analytics undergraduate at the National University of Singapore. I'm a passionate learner with a strong interest in user interface design and app development. I'm always eager to explore new technologies, collaborate with others and contribute to impactful projects that enhance user experiences.</Text>
                    </View>

                    <View style={styles.ButtonContainer}>
                        <TouchableOpacity style={styles.Button} onPress={() => handlePress('mailto:clarequek@hotmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out')}>
                            <Ionicons name="mail" size={getScaledSize(50)} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => handlePress('https://www.linkedin.com/in/clare-quek-904165277/')}>
                            <Ionicons name="logo-linkedin" size={getScaledSize(50)} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => handlePress('https://github.com/clarequek')}>
                            <Ionicons name="logo-github" size={getScaledSize(50)} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    HomeSection: {
        position: 'relative',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginBottom: 50,
    },

    IntroContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    IntroContent: {
        flex: 1,
        alignItems: 'center',
    },

    IntroPic: {
        borderRadius: 250,
    },
  
    IntroText: {
        marginTop: 15,
        width: '67%',
    },

    Subtitle: {
        fontFamily: 'DMSans',
        textAlign: 'center',
    },

    ButtonContainer: {
        flexDirection: 'row', 
        marginTop: '5%',
    },

    Button: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        marginLeft: '5%',
        marginRight: '5%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: '20%',
    },

    Header: {
        fontFamily: 'DMSansBlack',
        color: '#000',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0.5, height: 0.5 }, 
        textShadowRadius: 10,
    },

    SubHeader: {
        fontFamily: 'DMSansSemiBold',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0.5, height: 0.5 }, 
        textShadowRadius: 10,
        marginBottom: '-10%',
    },

    HeaderContainer: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    }
  
  });