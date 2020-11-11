package com.freechat;

 
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

 class MyFirebaseMessagingService extends FirebaseMessagingService {

	@Override
	public void onMessageReceived(RemoteMessage remoteMessage) {
		// if (com.freshchat.consumer.sdk.react.isFreshchatNotification(remoteMessage)) {
		// 	com.freshchat.consumer.sdk.react.handleFcmMessage(this, remoteMessage);
		// }
	}
}