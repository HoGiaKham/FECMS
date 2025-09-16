// screens/ManageScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import ActionBar from '../components/ActionBar';
import DataTable from '../components/DataTable';
import CreateAppModal from '../components/CreateAppModal';
//import Pagination from '../components/Pagination'; // Dòng này giờ sẽ không gây lỗi nữa

const ManageScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  //const totalItems = 2100;
  //const itemsPerPage = 15;
  //const totalPages = Math.ceil(totalItems / itemsPerPage);

  /*const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      console.log("Chuyển đến trang:", page);
      setCurrentPage(page);
    }
  };*/

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.sidebarContainer}>
          <SideBar />
        </View>
        
        <View style={styles.contentContainer}>
          <Header />
          <ActionBar onAddNewApp={() => setModalVisible(true)} /> 
          <DataTable />
          {/* <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          /> */}
        </View>
      </View>

      <CreateAppModal 
        visible={isModalVisible} 
        onClose={() => setModalVisible(false)} 
      />
    </SafeAreaView>
  );
};

// ...Phần styles giữ nguyên như bạn đã có...
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