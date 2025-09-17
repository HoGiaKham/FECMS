import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

const LoginScreen = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ email và password!");
      return;
    }
    
    if (email.trim() === "admin" && password.trim() === "123456") {
        router.push("/manage");
    } else {
      alert("Sai thông tin đăng nhập!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}> 
        <Image
          source={require("../assets/images/layout.png")}
          style={styles.imglayout}
        />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.imglogo}
        />
      </View>

      <View style={styles.right}>
        <Image
          source={require("../assets/images/vector.png")}
          style={styles.vectorTop}
        />

        <Image
          source={require("../assets/images/layoutRight.png")}
          style={styles.imgLayoutRight}
        />
        
        <View style={styles.body}>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.titleLogin}>Login To Systems</Text>
              <Image
                source={require("../assets/images/channel.png")}
                style={styles.imgchannel}
              />
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.text}>Email</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Nhập vào email"
                style={styles.txtInput}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Icon name="email-outline" size={22} color="#555" style={styles.icon} />
            </View>

            <Text style={styles.text}>Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                secureTextEntry={!showPassword}
                placeholder="Nhập password"
                style={[styles.txtInput, { flex: 1 }]}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={22}
                  color="#555"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgotWrap}>
              <Text style={styles.forgotText}>Forgot password</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
            <Text style={styles.btnLoginText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.copyRight}>Copyright © by fpt 2025</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", 
  },
  text: {
    fontFamily: "Arial",
    fontSize: 18,
    color: "#000",
    marginBottom: 8,
  },
  body: {
    justifyContent: "center",   
    paddingHorizontal: 50,
    marginTop: 30,
    zIndex: 2, 
  },
  header: {
    marginTop: 65,
    marginBottom: -80,
  },
  title: {  
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    width: "100%",                   
  },
  titleLogin: {
    fontSize: 30,
    fontFamily: "Arial",
    color: "#000000",
    fontWeight: "bold",
    marginTop: 20,
  },
  imgchannel: {
    width: 300,
    height: 300,
    marginTop:22,
    resizeMode: "contain",
  },
  form: {
    width: "100%",
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#F5F7FA",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 8,
  },
  txtInput: {
    flex: 1,
    color: "#000",
    fontSize: 19,
    paddingVertical: 10,
  },
  forgotWrap: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    color: "#1E90FF",
    fontSize: 14,
  },
  btnLogin: {
    backgroundColor: "#0060B4E5",
    width: 250,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center", 
    marginTop: 0,
  },
  btnLoginText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  footer: {
    marginBottom: -10,
    alignItems: 'center',
    zIndex: 5,
  },
  copyRight: {
    fontSize: 12,
    color: "#333",
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    position: "relative", 
    justifyContent: "space-between",
    paddingBottom: 20, 
  },
  vectorTop: {
    position: "absolute",
    width: "100%",
    resizeMode: "stretch",
    zIndex: 999,
    elevation: 999,
  },
  imglogo: {
    position: "absolute",
    width: 350,
    top: -40,
    left: -50,
    height: 226,
    resizeMode: "contain",
  },
  imglayout: {
    width: "100%",
    height: "120%",
    resizeMode: "cover",
  },
  imgLayoutRight: {
    position: "absolute",
    bottom: -160,
    right: 0,
    width: "100%", 
    height: "100%", 
    resizeMode: "contain",
    zIndex: 1, 
  },
});