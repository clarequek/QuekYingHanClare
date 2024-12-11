import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function CookbookDiaries() {
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

    const handlePress = (url : string ) => { 
        Linking.openURL(url); 
    };

   
    return (
        <View style={styles.ProjectsContainer}>
            <View style= {styles.ProjectsContent}>
                <Image
                    source={require('@/assets/images/Project1Title.png')}
                    style={[ { width: getScaledSize(650), height: getScaledSize(260) } ]}
                />
                <Text style = {[styles.Subtitle, {fontSize: getFontSize(22)}]}>Cookbook Diaries is an app designed to enhance your cooking experience.</Text>
                <Text style = {[styles.Subtitle, {fontSize: getFontSize(22)}]}> </Text>
                <Text style = {[styles.Subtitle, {fontSize: getFontSize(22)}]}>Main Functions:</Text>
                <Text style = {[styles.Subtitle, {fontSize: getFontSize(22)}]}>•    Find and create delicious recipes</Text>                    
                <Text style = {[styles.Subtitle, {fontSize: getFontSize(22)}]}>•    Rate and favourite recipes</Text>
                <Text style = {[styles.Subtitle, {fontSize: getFontSize(22)}]}>•    Locate nearby grocery stores</Text>
                <Text style = {[styles.Subtitle, {fontSize: getFontSize(22)}]}>•    Find ingredient subtitutes</Text>
                <Text style = {[styles.Subtitle, {fontSize: getFontSize(22)}]}>•    Organise your grocery list</Text>
                <Text style = {[styles.Subtitle, {fontSize: getFontSize(22)}]}>•    Find your community</Text>

                {/* Video Demonstration Button */}
                <TouchableOpacity style={styles.Button} onPress={() => {handlePress('https://drive.google.com/file/d/1IStatmHLwEDau5v_wQWJ3IoCoRaNGALZ/view?usp=drive_link')}}>
                    <Text style={[styles.ButtonText, {fontSize: getFontSize(22)}]}>VIDEO DEMONSTRATION</Text>
                </TouchableOpacity>

                {/* Github Repo Button */}
                <TouchableOpacity style={styles.Button} onPress={() => {handlePress('https://github.com/clarequek/Cookbook-Diaries')}}>
                    <Text style={[styles.ButtonText, {fontSize: getFontSize(22)}]}>GITHUB REPOSITORY</Text>
                </TouchableOpacity>        
            </View>
            <Image
                source={require('@/assets/images/Project1Pic.png')}
                style={[{ marginTop: 80, marginLeft: 100,width: getScaledSize(650), height: getScaledSize(650) }]}                
                />
        </View>

    );
}
const styles = StyleSheet.create({

    ProjectsContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flex: 1,
    },

    ProjectsContent: {
        flex: 1,
        alignItems: 'flex-start',
    },

    Subtitle: {
        fontFamily: 'DMSans',
    },

    Button: {
        height: 44,
        width: 300,
        marginTop: 50,
        backgroundColor: '#ff7643',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ButtonText: {
        fontFamily: 'CooperHewittBold',
        color: '#ffffff',
    },
  
  });