import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const Login = ({ onSignupPress }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <ImageBackground
      style={styles.image}
      source={{ uri: 'https://wallpapertag.com/wallpaper/full/d/3/c/968676-hi-res-background-images-2651x1813-retina.jpg' }}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View >
            <View style={styles.buttonContainer}>
              <Button title="Login" onPress={handleLogin} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Signup" onPress={onSignupPress} />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%', 
    padding: 16,
    backgroundColor: 'white', 
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight:100,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    backgroundColor: 'white',
    borderRadius:40,
    padding:20,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  buttonContainer: {
    margin: 10,
    height:25,
    marginBottom: 10,
    borderRadius:40,
  },
  
});

export default Login;