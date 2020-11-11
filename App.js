/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FreeChatScreen from './FreeChatScreen';

import { Freshchat, FreshchatConfig } from 'react-native-freshchat-sdk';
import { FaqOptions } from 'react-native-freshchat-sdk';

var freshchatConfig = new FreshchatConfig('657b6280-3fca-49f8-8e72-e85ee4f31e21', 'e1341fd9-10db-42a5-a5cc-e0b3610d71ff');
freshchatConfig.domain = "msdk.freshchat.com";
Freshchat.init(freshchatConfig);

const App: () => React$Node = () => {
  return (
  <FreeChatScreen/>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
