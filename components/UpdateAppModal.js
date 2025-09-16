// components/UpdateAppModal.js
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';


const UpdateAppModal = ({ visible, onClose, item }) => {
  const [name, setName] = useState(''); 
  const [createAt, setCreateAt] = useState('');
  const [id, setId] = useState('');
  const [version, setVersion] = useState('');
  const [description, setDescription] = useState('');

  // Dùng useEffect để cập nhật state của form mỗi khi item được truyền vào thay đổi
  useEffect(() => {
    if (item) {
      setName(item.name || '');
      setCreateAt(item.createAt || '');
      setId(item.id || '');
      setVersion(item.version || '');
      setDescription(item.description || '');
    }
  }, [item]); // Hook này sẽ chạy lại mỗi khi prop 'item' thay đổi

  const handleSave = () => {
    console.log("Saving updated data:", { id, name, version });
    onClose(); // Đóng modal sau khi lưu
  };

  if (!item) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalContainer}>
          <Text style={styles.title}>Update Supper App</Text>
          <Text style={styles.subtitle}>Get a Quote Immediately Upon Form Submission</Text>

          <View style={styles.inputRow}>
            <View style={{ flex: 1, marginRight: 16 }}>
              <Text style={styles.label}>Name</Text>
              <TextInput value={name} onChangeText={setName} style={styles.input} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>CreateAt</Text>
              <TextInput value={createAt} onChangeText={setCreateAt} style={styles.input} />
            </View>
          </View>
          <View style={styles.inputRow}>
            <View style={{ flex: 1, marginRight: 16 }}>
              <Text style={styles.label}>ID</Text>
              <TextInput value={id} onChangeText={setId} style={styles.input} editable={false} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Version</Text>
              <TextInput value={version} onChangeText={setVersion} style={styles.input} />
            </View>
          </View>
          
          <View>
            <Text style={styles.label}>Description</Text>
            <TextInput 
              value={description}
              onChangeText={setDescription}
              style={[styles.input, styles.multilineInput]}
              multiline={true}
            />
          </View>

          <Text style={[styles.label, { marginTop: 20 }]}>Upload</Text>
          <TouchableOpacity style={styles.uploadBox}>
            <Feather name="upload-cloud" size={40} color="#f68f08ff" />
            <Text style={styles.uploadText}>
              Drag & drop files or <Text style={styles.uploadLink}>Computer</Text>
            </Text>
            <Text style={styles.uploadSupportText}>Supported formates: JPEG, PNG, GIF, MP4...</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};


const styles = StyleSheet.create({
  overlay:{flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgba(0, 0, 0, 0.6)"},

    modalContainer:{
        width:"50%",
        maxWidth:600,
        backgroundColor:"white",
        borderRadius:16,
        padding:32,
        shadowColor:"#000",
        shadowOffset:{width:0,height:10},
        shadowOpacity:0.25,
        shadowRadius:20,
        elevation:20},

    title:{
        fontSize:24,
        fontFamily:"Inter_700Bold",
        textAlign:"center",
        marginBottom:8},

    subtitle:{
        fontSize:14,
        fontFamily:"Inter_400Regular",
        color:"#6c757d",
        textAlign:"center",
        marginBottom:24},

    inputRow:{
        flexDirection:"row",
        marginBottom:16},

    label:{
        fontSize:14,
        fontFamily:"Inter_500Medium",
        color:"#333",marginBottom:8},

    input:{
        height:44,
        borderWidth:1,
        borderColor:"#ced4da",
        borderRadius:8,
        paddingHorizontal:12,
        fontSize:16,
        fontFamily:"Inter_400Regular"},
        
    multilineInput:{
        height:80,
        textAlignVertical:"top",
        paddingTop:12},

    uploadBox:{
        borderWidth:2,
        borderColor:"#e0e0e0",
        borderStyle:"dashed",
        borderRadius:12,
        padding:24,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#f8f7ff",marginTop:8},
    
    uploadText:{
        marginTop:12,
        fontSize:16,
        fontFamily:"Inter_500Medium",
        color:"#495057"},
        
    uploadLink:{
        color:"#f68f08ff",
        fontFamily:"Inter_700Bold"},
        
    uploadSupportText:{
        marginTop:8,
        fontSize:12,
        color:"#6c757d"},
        
    saveButton:{
        backgroundColor:"#f68f08ff",
        paddingVertical:14,
        borderRadius:8,
        marginTop:24,
        alignItems:"center"},
        
    saveButtonText:{color:"white",fontSize:16,fontFamily:"Inter_700Bold"},
});

export default UpdateAppModal;