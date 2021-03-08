import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const SettingsScreen = (props) => {

    const [count, setCount] = useState(0);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>{`You clicked ${count} times`}</Text>
        <Button title="Click me" onPress={() => setCount(count + 1)}/>
        <Button title="Go Back" onPress={() => props.navigation.pop()}/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SettingsScreen;
