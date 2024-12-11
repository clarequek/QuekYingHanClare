import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
export default function TabBar() {
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
    
    return (
        <View style={styles.TabBar}>
          <TouchableOpacity>
            <Text style={[styles.TabBarText, { fontSize: getFontSize(16) }]}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.TabBarText, { fontSize: getFontSize(16) }]}>EXPERIENCE</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.TabBarText, { fontSize: getFontSize(16) }]}>PROJECTS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.TabBarText, { fontSize: getFontSize(16) }]}>EDUCATION</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.TabBarText, { fontSize: getFontSize(16) }]}>SKILLS</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    TabBar: {
      position: 'absolute',
      top: 30,
      width: '100%',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 10, // Ensure it stays above the content What's this actually
    },
    
    TabBarText: {
      color: '#000',
      fontWeight: 'bold',
    },
});