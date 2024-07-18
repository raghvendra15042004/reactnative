import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const ReusableButton = ({ iconName, buttonText, buttonColor, onPress }) => (
  <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: buttonColor }]} onPress={onPress}>
    <View style={styles.buttonContent}>
      <Icon name={iconName} size={40} color="#fff" />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#EAF0F1',
    fontSize: 19,
    marginLeft: 15,
  },
});

export default ReusableButton;