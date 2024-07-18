import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const Signup = ({ onLoginPress }) => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    console.log('Username:', username);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Date of Birth:', dob);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <ImageBackground
      style={styles.image}
      source={{ uri: 'https://wallpapertag.com/wallpaper/full/d/3/c/968676-hi-res-background-images-2651x1813-retina.jpg' }}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth (YYYY-MM-DD)"
            value={dob}
            onChangeText={setDob}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <View style={styles.buttonWrapper}>
            <Button title="Sign Up" onPress={handleSignup} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Login" onPress={onLoginPress} />
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
    padding: 15,
    backgroundColor: 'white', 
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    marginBottom: 16,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  buttonWrapper: {
    marginBottom: 10,
  },
});

export default Signup;