// components/ActionBar.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

// Thêm prop onAddNewApp
const ActionBar = ({ onAddNewApp }) => { 
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#8A92A6" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="#8A92A6"
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={onAddNewApp}>
        <AntDesign name="plus" size={20} color="#FFFFFF" />
        <Text style={styles.addButtonText}>New Supper App</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  searchContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 12,
    marginRight: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: '#333',
    outlineStyle: 'none',
    fontFamily: 'Inter_500Medium',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f68f08ff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginRight:'auto',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 8,
    fontFamily: 'Inter_700Bold',
  },
});

export default ActionBar;