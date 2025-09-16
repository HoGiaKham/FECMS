// components/Header.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage System MiniApp & Extensions</Text>
      <TouchableOpacity style={styles.userProfileContainer}>
        <Text style={styles.userName}>User</Text>
        <Image 
          source={require('../assets/images/vietnam-flag.png')} 
          style={styles.flagIcon}
        />
        <Feather name="chevron-down" size={22} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#1E1E1E',
    fontFamily: 'Inter_700Bold',
  },
  userProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  userName: {
    fontSize: 16,
    marginRight: 8,
    fontFamily: 'Inter_600SemiBold',
  },
  flagIcon: {
    width: 24,
    height: 16,
    marginRight: 8,
  },
});

export default Header;