/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
  ToastAndroid,
  DeviceEventEmitter,
  Linking
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { showFloatingBubble, hideFloatingBubble, requestPermission, checkPermission, initialize } from "react-native-floating-bubble"

import FreeChatScreen from './FreeChatScreen';

import { Freshchat, FreshchatConfig } from 'react-native-freshchat-sdk';
import { FaqOptions } from 'react-native-freshchat-sdk';

var freshchatConfig = new FreshchatConfig('657b6280-3fca-49f8-8e72-e85ee4f31e21', 'e1341fd9-10db-42a5-a5cc-e0b3610d71ff');
freshchatConfig.domain = "msdk.freshchat.com";
Freshchat.init(freshchatConfig);




const App = () => {
  const onAdd = () => showFloatingBubble().then(() => showToast("Add Floating Button"))


  const onHide = () =>   hideFloatingBubble().then(() => showToast("Manually Removed Bubble")).catch(() => showToast("Failed to remove"))
 
  const onRequestPermission = () => requestPermission().then(() => showToast("Permission received")).catch(() => showToast("Failed to get permission"))
 
 
  const onCheckPermissoin = () => checkPermission().then((value) => showToast(`Permission: ${value ? 'Yes' : 'No'}`)).catch(() => showToast("Failed to check"))
  const onInit = () => initialize().then(() => showToast("Init")).catch(() => showToast("Failed init"));
  useEffect(() => {
    var url = Linking.getInitialURL().then((url) => {
      console.log('Initial url is: ' + url);
      if (url) {
        console.log('Initial url is: ' + url);
      }
    }).catch(err => console.error('An error occurred', err));
   
   
   
   
    const subscriptionPress = DeviceEventEmitter.addListener("floating-bubble-press", function (e) {
  //    alert("Press Bubble")
      console.log('fffff'); 
      hideFloatingBubble()
      Linking.openURL('app://FreeChat')
     
      return true
    });
    const subscriptionRemove = DeviceEventEmitter.addListener("floating-bubble-remove", function (e) {
      showToast("Remove Bubble")
    });
    return () => {
      subscriptionPress.remove();
      subscriptionRemove.remove();
    }
  }, [])
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={{ padding: 30 }}>
            <Text>Check Permission</Text>
            <Button style={styles.button} title="Check" onPress={onCheckPermissoin} />
            <Text>Ger Permission</Text>
            <Button style={styles.button} title="Get Permission" onPress={onRequestPermission} />
            <Text>Initialize Bubble Manage</Text>
            <Button style={styles.button} title="Initialize" onPress={onInit} />
            <Text>Add the bubble</Text>
            <Button style={styles.button} title="Add Bubble" onPress={onAdd} />
            <Text>Remove the bubble</Text>
            <Button style={styles.button} title="Hide Bubble" onPress={onHide} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
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
  button: {
    margin: 30
  },
  highlight: {
    fontWeight: '700',
  },
});
export default App;
