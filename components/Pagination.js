// components/Pagination.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const PageButton = ({ page, isActive, onPress }) => (
  <TouchableOpacity 
    style={[styles.pageButton, isActive && styles.activePageButton]}
    onPress={() => onPress(page)}
  >
    <Text style={[styles.pageText, isActive && styles.activePageText]}>{page}</Text>
  </TouchableOpacity>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [goToPage, setGoToPage] = useState('');

  const generatePageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }

    if (currentPage > totalPages - 4) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const pageNumbers = generatePageNumbers();

  const handleGoToPage = () => {
    const pageNum = parseInt(goToPage, 10);
    if (pageNum >= 1 && pageNum <= totalPages) {
      onPageChange(pageNum);
      setGoToPage(''); // Xóa input sau khi nhảy trang
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemsPerPageContainer}>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>15</Text>
          <Feather name="chevron-down" size={16} color="#6c757d" />
        </TouchableOpacity>
        <Text style={styles.totalItemsText}>of 2100 items</Text>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          <Feather name="chevron-left" size={20} color={currentPage === 1 ? '#adb5bd' : '#6c757d'} />
        </TouchableOpacity>

        {pageNumbers.map((page, index) => 
          page === '...' ? (
            <Text key={`ellipsis-${index}`} style={styles.ellipsis}>...</Text>
          ) : (
            <PageButton
              key={page}
              page={page}
              isActive={currentPage === page}
              onPress={onPageChange}
            />
          )
        )}

        <TouchableOpacity onPress={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <Feather name="chevron-right" size={20} color={currentPage === totalPages ? '#adb5bd' : '#6c757d'} />
        </TouchableOpacity>

        <View style={styles.goToContainer}>
          <Text style={styles.goToText}>Go to page</Text>
          <TextInput
            style={styles.goToInput}
            keyboardType="number-pad"
            value={goToPage}
            onChangeText={setGoToPage}
            onSubmitEditing={handleGoToPage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#e9ecef',
    },
    itemsPerPageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginRight: 12,
    },
    dropdownText: {
        marginRight: 4,
        fontFamily: 'Inter_500Medium',
    },
    totalItemsText: {
        color: '#6c757d',
        fontFamily: 'Inter_400Regular',
    },
    controlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pageButton: {
        width: 32,
        height: 32,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
    },
    activePageButton: {
        backgroundColor: '#f68f08ff', // Màu cam cho nền trang hiện tại
    },
    pageText: {
        color: '#6c757d',
        fontFamily: 'Inter_500Medium',
    },
    activePageText: {
        color: '#FFFFFF', // Màu trắng cho số trang hiện tại
        fontFamily: 'Inter_700Bold',
    },
    ellipsis: {
        marginHorizontal: 8,
        color: '#6c757d',
        alignSelf: 'center',
    },
    goToContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
        borderLeftWidth: 1,
        borderLeftColor: '#e9ecef',
        paddingLeft: 16,
    },
    goToText: {
        marginRight: 8,
        color: '#6c757d',
    },
    goToInput: {
        width: 40,
        height: 32,
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 6,
        textAlign: 'center',
        fontFamily: 'Inter_500Medium',
        outlineStyle: 'none',
    },
});

export default Pagination;