import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function EducationSection() {
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
        <View>
            
         </View>
    );
}
const styles = StyleSheet.create({
    
  });