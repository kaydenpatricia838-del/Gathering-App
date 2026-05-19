import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Auth({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gathering App</Text>
      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
        style={styles.input}
      />
      <Button title="Sign In" onPress={() => navigation.replace('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }
});