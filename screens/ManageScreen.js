import React, {useEffect, useState, version} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import ActionBar from '../components/ActionBar';
import DataTable from '../components/DataTable';
import CreateAppModal from '../components/CreateAppModal';
import UpdateAppModal from '../components/UpdateAppModal';

const BASE_URL = "https://dev.ddc.fis.vn/cms";

const ManageScreen = () => {
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);

  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [superApps, setSuperApps] = useState([]);
  
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    const fetchSuperApps = async () => {
      try {
        const res = await fetch(`${BASE_URL}/superapps`);
        const data = await res.json();
        if(data && Array.isArray(data.superApps)){
          const mapped = data.superApps.map((s, idx)=>({
            id: s.id || `${idx+1}`,
            name: s.name,
            version: s.version || "N/A",
            createAt: formatDate(s.createdAt),
            updateAt: formatDate(s.updatedAt),
            description: s.description || "No description",
          }));
          setSuperApps(mapped);
        }
      } catch (error) {
        console.error("Error",error);
      }
    };

    fetchSuperApps();
  }, []);

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
        
        <ScrollView  style={styles.contentContainer}>
          <Header />
          <ActionBar onAddNewApp={() => setCreateModalVisible(true)} /> 
          
          {/* <DataTable onEditItem={handleOpenUpdateModal} /> */}
          <DataTable
            data={superApps}
            onEditItem={handleOpenUpdateModal}
          />
        </ScrollView >
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