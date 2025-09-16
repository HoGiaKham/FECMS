// components/SideBar.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const menuItems = [
    { id: 'Dashboard', icon: 'dashboard', name: 'Dashboard' },
    { id: 'Setting', icon: 'settings', name: 'Setting' },
    { id: 'About', icon: 'info-outline', name: 'About' },
    { id: 'Contact', icon: 'contact-page', name: 'Contact' },
];

const MenuItem = ({ item, isActive, onPress }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Chỉ áp dụng các props cho web
  const webProps = Platform.OS === 'web' ? {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  } : {};

  return (
    <View {...webProps}> 
      <TouchableOpacity
        style={[
          styles.menuItem,
          // Áp dụng style khi active
          isActive && styles.activeMenuItem,
          // Áp dụng style khi hover VÀ không active
          isHovered && !isActive && styles.hoverMenuItem,
        ]}
        onPress={onPress}
      >
        <MaterialIcons 
          name={item.icon} 
          size={22} 
          // Nếu active hoặc hover, icon màu trắng, còn lại màu xám
          color={(isActive || (isHovered && !isActive)) ? '#FFFFFF' : '#4F4F4F'} 
        />
        <Text style={[
          styles.menuText,
          // Nếu active hoặc hover, text màu trắng
          (isActive || (isHovered && !isActive)) && styles.activeMenuText
        ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const SideBar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/logofpt.png')}
          style={styles.logo} 
        />
      </View>
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            isActive={activeItem === item.id}
            onPress={() => setActiveItem(item.id)}
          />
        ))}
      </View>
      <View style={styles.footerImageContainer}>
         <Image 
           source={require('../assets/images/saigon.png')}
           style={styles.footerImage} 
           resizeMode="contain" 
         />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF',
  },

  logoContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    marginBottom: 20,
  },

  logo: { 
    width: 150, 
    height:50, 
    resizeMode: 'contain',
  },

  menuContainer: {
    paddingHorizontal: 16,
  },

  menuItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 12, 
    paddingHorizontal: 16, 
    borderRadius: 10,
    marginBottom: 12,
    transition: 'all 0.2s ease-in-out',
  },

  activeMenuItem: { 
    backgroundColor: '#f68f08ff',
    shadowColor: "#a1a1a1ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  hoverMenuItem: {
    backgroundColor: '#fcad53ff', // Màu cam nhạt hơn khi chưa click
  },

  menuText: { 
    marginLeft: 15, 
    fontSize: 16, 
    color: '#4F4F4F',
    fontFamily: 'Inter_600SemiBold',
  },
  activeMenuText: { 
    color: '#FFFFFF', 
    fontFamily: 'Inter_700Bold',
  },
  footerImageContainer: { 
    position: 'absolute', 
    bottom: 10, 
    left: 0, 
    right: 0,
    alignItems: 'center',
  },
  footerImage: { 
    width: '100%', 
    height: 200,
  },
});

export default SideBar;