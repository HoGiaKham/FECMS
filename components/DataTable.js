// components/DataTable.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

// Dữ liệu mẫu 
const mockData = [
  { id: '162169', name: 'Fis Say', version: '0.1', createAt: '13/09/2025', updateAt: '14/09/2025', description: 'Submit Your Order' },
];


const ActionButton = ({ iconName, color, onPress }) => {
  const [isHovered, setIsHovered] = useState(false);

  const webProps = Platform.OS === 'web' ? {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  } : {};

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[
        styles.actionButton,
        isHovered && { backgroundColor: color } // Khi hover thì đổi màu nền
      ]}
      {...webProps}
    >
      <Feather 
        name={iconName} 
        size={16} 
        color={isHovered ? '#FFFFFF' : '#6c757d'} // Khi hover thì icon đổi màu trắng
      />
    </TouchableOpacity>
  );
};

const DataTable = () => {
  const renderHeader = () => (
    <View style={styles.headerRow}>
        <Text style={[styles.headerCell, { flex: 0.5 }]}>STT</Text>
        <Text style={styles.headerCell}>ID</Text> 
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Version</Text>
        <Text style={styles.headerCell}>CreateAt</Text>
        <Text style={styles.headerCell}>UpdateAt</Text>
        <Text style={[styles.headerCell, { flex: 1.5 }]}>Description</Text>
        <Text style={[styles.headerCell, { flex: 1, textAlign: 'center' }]}>Actions</Text>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <View style={styles.dataRow}>
        <Text style={[styles.dataCell, { flex: 0.5 }]}>{index + 1}</Text>
        <Text style={styles.dataCell}>{item.id}</Text>
        <Text style={styles.dataCell}>{item.name}</Text>
        <Text style={styles.dataCell}>{item.version}</Text>
        <Text style={styles.dataCell}>{item.createAt}</Text>
        <Text style={styles.dataCell}>{item.updateAt}</Text>
        <Text style={[styles.dataCell, { flex: 1.5 }]}>{item.description}</Text>
        
        
        <View style={styles.actionsContainer}>
            <ActionButton iconName="edit-2" color="#4A90E2" onPress={() => alert(`Editing item ${item.id}`)} />
            <ActionButton iconName="trash-2" color="#D0021B" onPress={() => alert(`Deleting item ${item.id}`)} />
        </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No data available</Text>
            </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#fff', 
        borderRadius: 12,
        padding: 20,
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.05,
        shadowRadius: 20,
        elevation: 5,
    },
    headerRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#F0F0F0', paddingBottom: 12, marginBottom: 8,},
    dataRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#F0F0F0', paddingVertical: 16, alignItems: 'center' },
    headerCell: { 
        flex: 1, 
        color: '#8A92A6',
        textTransform: 'uppercase',
        fontSize: 12,
        fontFamily: 'Inter_700Bold',
    },
    dataCell: { 
        flex: 1, 
        color: '#333',
        fontFamily: 'Inter_500Medium',
    },
    actionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButton: {
        padding: 8,
        borderRadius: 50, 
        marginHorizontal: 4,
        transition: 'background-color 0.2s ease-in-out', 
    },
    emptyContainer: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#aaa',
        fontFamily: 'Inter_500Medium',
    },
});

export default DataTable;