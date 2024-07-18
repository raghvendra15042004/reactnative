import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import ReusableButton from './ReusableButton'; // Adjust the import path as necessary

const ButtonPage = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <ImageBackground style={styles.background}>
      <Text style={styles.text}>Hello, welcome to the page of buttons</Text>
      <View style={styles.container}>
        <ReusableButton 
          iconName="check" 
          buttonText="Success Button" 
          buttonColor="green" 
          onPress={handlePress} 
        />
        <ReusableButton 
          iconName="exclamation" 
          buttonText="Danger Button" 
          buttonColor="red" 
          onPress={handlePress} 
        />
        <ReusableButton 
          iconName="warning" 
          buttonText="Warning Button" 
          buttonColor="#FAD02E" 
          onPress={handlePress} 
        />
        <ReusableButton 
          iconName="info" 
          buttonText="Info Button" 
          buttonColor="blue" 
          onPress={handlePress} 
        />
        <ReusableButton 
          iconName="star" 
          buttonText="Primary Button" 
          buttonColor="#6200ee" 
          onPress={handlePress} 
        />
        <ReusableButton 
          iconName="angle-right" 
          buttonText="Secondary Button" 
          buttonColor="#6c757d" 
          onPress={handlePress} 
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 34,
    color: "#E74292",
    textAlign: 'center',
    paddingVertical: 30,
    fontWeight: '600',
  },
  background: {
    flex: 1,
    backgroundColor: '#53E0BC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
});

export default ButtonPage;