import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LedgerButton = ({ handleScrollTo }) => {
  const { width } = Dimensions.get('window');
  const [modalVisible, setModalVisible] = useState(false);

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
    <View style={styles.LedgerButtonContainer}>
      <TouchableOpacity onPress={() => setModalVisible(true)}> 
        <Ionicons name="menu" size={40} color='#000' />
      </TouchableOpacity>   

      <Modal 
        animationType="slide" 
        transparent={true} 
        visible={modalVisible} 
        onRequestClose={() => setModalVisible(false)} 
      > 
        <View style={styles.ModalContainer}> 
          <View style={styles.ModalContent}> 
            <TouchableOpacity onPress={() => { handleScrollTo('home'); setModalVisible(false); }}> 
              <Text style={[styles.TabBarText, { fontSize: getFontSize(20) }]}>HOME</Text> 
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => { handleScrollTo('experience'); setModalVisible(false); }}> 
              <Text style={[styles.TabBarText, { fontSize: getFontSize(20) }]}>EXPERIENCE</Text> 
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => { handleScrollTo('projects'); setModalVisible(false); }}> 
              <Text style={[styles.TabBarText, { fontSize: getFontSize(20) }]}>PROJECTS</Text> 
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => { handleScrollTo('education'); setModalVisible(false); }}> 
              <Text style={[styles.TabBarText, { fontSize: getFontSize(20) }]}>EDUCATION</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleScrollTo('skills'); setModalVisible(false); }}> 
              <Text style={[styles.TabBarText, { fontSize: getFontSize(20) }]}>SKILLS</Text> 
            </TouchableOpacity> 
          </View> 
        </View> 
      </Modal>
  </View>
);
}

const styles = StyleSheet.create({

    TabBarText: {
      color: '#000',
      fontFamily: 'CooperHewittBold'
    },

    LedgerButtonContainer: {
      marginTop: 50,
      height: '5%',
      width: '15%',  
      justifyContent: 'center', 
      alignItems: 'center', 
      zIndex: 10, 
    },

    ModalContainer: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    }, 
    
    ModalContent: { 
      width: '100%', 
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      borderRadius: 10, 
      padding: 20, 
      alignItems: 'center', 
      gap: 20,
    },
});

export default LedgerButton;