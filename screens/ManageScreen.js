// screens/ManageScreen.js
import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import ActionBar from '../components/ActionBar';
import DataTable from '../components/DataTable';
import CreateAppModal from '../components/CreateAppModal';
import UpdateAppModal from '../components/UpdateAppModal'; // <-- BƯỚC 1: IMPORT

const ManageScreen = () => {
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);

  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenUpdateModal = (item) => {
    setSelectedItem(item);
    setUpdateModalVisible(true);
  };

  const handleCloseUpdateModal = () => {
    setUpdateModalVisible(false);
    setSelectedItem(null); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.sidebarContainer}>
          <SideBar />
        </View>
        
        <View style={styles.contentContainer}>
          <Header />
          <ActionBar onAddNewApp={() => setCreateModalVisible(true)} /> 
          
          <DataTable onEditItem={handleOpenUpdateModal} />
        </View>
      </View>

      <CreateAppModal 
        visible={isCreateModalVisible} 
        onClose={() => setCreateModalVisible(false)} 
      />

      <UpdateAppModal
        visible={isUpdateModalVisible}
        onClose={handleCloseUpdateModal}
        item={selectedItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9ff',
    fontFamily: 'Inter_400Regular',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebarContainer: {
    flex: 1,
    maxWidth: 280,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  contentContainer: {
    flex: 4,
    padding: 32,
  },
});

export default ManageScreen;