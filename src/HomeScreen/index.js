import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const HomeScreen = (props) => {
  return (
      <SafeAreaView style={styles.container}>
        <Text>This is Home Screen</Text>
        <Button title="Go to settings" onPress={() => props.navigation.navigate('Settings')}/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomeScreen;
