import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      {/* Shipping Address */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping Address</Text>
        <View style={styles.card}>
          <Text style={styles.text}>Aiman,</Text>
          <Text style={styles.text}>Gulberg, Islamabad, Pakistan</Text>
          <Text style={styles.text}>Phone: 1234567890</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Address</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Method */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.card}>
          <Text style={styles.text}>Visa Debit</Text>
          <Text style={styles.text}>**** **** **** 1280</Text>
          <Text style={styles.text}>Card Holder: Aiman</Text>
          <Text style={styles.text}>Expiry Date: 02/02/2026</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Another Card</Text>
        </TouchableOpacity>
      </View>

      {/* Confirm to Pay Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => navigation.navigate('OrderDoneScreen')} // Navigate to next screen
      >
        <Text style={styles.confirmButtonText}>CONFIRM TO PAY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  addButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: '#0066cc',
  },
  confirmButton: {
    backgroundColor: '#003d29',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
