/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Home from './src/Home';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={Store}>
      <Home/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
