import React, { PureComponent } from 'react';

import {
    StyleSheet,
    KeyboardAvoidingView,
    Dimensions, Text,
    View,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    Button,
} from 'react-native';
const WIDTH = Dimensions.get('window').width;

// import BottomSheet from 'reanimated-bottom-sheet'

import RobotIcon from './assets/robotChat.svg'
import Smile from './assets/smile.svg'
import ChatMsg from './assets/chatmsg.svg'
import Waves from './assets/waves.svg'
import Dots from './assets/dots.svg'

import { Freshchat, FaqOptions, FreshchatMessage } from 'react-native-freshchat-sdk';
import { FreshchatUser, ConversationOptions } from 'react-native-freshchat-sdk';


import ResponsiveModule from "./constants";
const { responsiveWidth, responsiveHeight, scaleFont } = ResponsiveModule;

import messaging, { firebase } from '@react-native-firebase/messaging';

 
export default class FreeChatScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,

        };
        this.showPass = this.showPass
    }



    componentDidMount() {
        var freshchatUser = new FreshchatUser();
        freshchatUser.firstName = "John";
        freshchatUser.lastName = "Doe";
        freshchatUser.email = "johndoe@dead.man";
        freshchatUser.phoneCountryCode = "+91";
        freshchatUser.phone = "1234234123";
        Freshchat.setUser(freshchatUser, (error) => {
            console.log(error);
        });

        Freshchat.getUser((user) => {
            var restoreId = user.restoreId;
            console.log("restoreId: " + (user));
        })

        Freshchat.getFreshchatUserId((data) => {
            console.log(data);
        });

        Freshchat.getUnreadCountAsync((data) => {
            console.log('count', data);
        });




        messaging()
        .getToken()
        .then(token => {
            console.log('token', token);
            if (this._isMounted) {
                this.setState({ fireToken: token })
            }

            Freshchat.setPushRegistrationToken(token);
        });




        Freshchat.addEventListener(
            Freshchat.EVENT_UNREAD_MESSAGE_COUNT_CHANGED,
            () => {
                console.log("onUnreadMessageCountChanged triggered");
                Freshchat.getUnreadCountAsync((data) => {
                    var count = data.count;
                    var status = data.status;
                    if (status) {
                        console.log("Message count: " + count);
                    } else {
                        console.log("getUnreadCountAsync unsuccessful");
                    }
                });
            }
        );

        // Freshchat.isFreshchatNotification((notification, freshchatNotification) => {
        //     if (freshchatNotification) {
        //         //Freshchat.handlePushNotification(notification);
        //     } else {
        //         // handle your app notification
        //     }
        // })
    }

    Chat = () => {

        var conversationOptions = new ConversationOptions();
        conversationOptions.tags = ["premium"];
        conversationOptions.filteredViewTitle = "Premium Support";
        Freshchat.showConversations(conversationOptions)


        // var freshchatMessage = new FreshchatMessage();
        // freshchatMessage.tag = "premium";
        // freshchatMessage.message = "text message";
        // Freshchat.sendMessage(freshchatMessage);
    }


    FAQ = () => {
        var faqOptions = new FaqOptions();
        faqOptions.tags = ["premium"];
        faqOptions.filteredViewTitle = "Tags";
        faqOptions.filterType = FaqOptions.FilterType.ARTICLE;
        Freshchat.showFAQs(faqOptions);
    }


    render() {
        return (

            <View style={{
                backgroundColor: '#5739B2',
                flex: 1,
                flexDirection: 'column',

            }}>


                <View style={{ justifyContent: 'flex-start', alignSelf: 'center', marginTop: responsiveHeight(50) }}>


                    <View style={{ alignSelf: 'center', borderColor: '#B0A1DE' }}>
                        <View style={{ position: 'absolute', zIndex: 99, alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', color: '#FCCE0D', fontSize: scaleFont(32), fontWeight: 'bold' }}>Hi, {'Amira'}</Text>

                            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                                <Text
                                    style={{ textAlign: 'center', color: '#1D1D1D', fontSize: scaleFont(16), }}>I’m Robosto your digital assistant{`\n`} to help you shop your groceries in {`\n`}the comfort of your home.{`\n`} Just say <Text style={{ alignSelf: 'flex-end', color: '#FCCE0D', fontSize: scaleFont(16), }}>#Hatly_M3ak</Text> </Text>

                            </View>
                        </View>

                        <ChatMsg width={responsiveHeight(331).toString()} height={responsiveHeight(209).toString()} style={{ alignSelf: 'center', alignItems: 'center' }} />
                        <RobotIcon width={responsiveHeight(169).toString()} height={responsiveHeight(230).toString()} style={{ position: 'absolute', left: 5, top: responsiveHeight(125), bottom: 0, right: 0, zIndex: 109 }} />

                    </View>

                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'center', }}>
                    <Waves width={responsiveWidth(375).toString()} style={{ zIndex: 109 }} />
                </View>

                <View style={{ position: 'absolute', zIndex: 150, alignSelf: 'center', bottom: 20 }}>
                    <Smile style={{ alignSelf: 'center', marginBottom: responsiveHeight(17) }} />
                    <TouchableOpacity 
                    onPress={()=>this.Chat()}
                    style={{ width: responsiveWidth(325), height: responsiveHeight(45),backgroundColor:'#FFFFFF' ,borderRadius:23}}>
                        <Text style={{top:responsiveHeight(5), textAlign: 'center', color: '#6F58B5', fontSize: scaleFont(22), fontWeight:'bold'}}>Yalla chat</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ marginTop:responsiveHeight(25)}}>
                    <Text style={{ textAlign: 'center', color:'white', fontSize: scaleFont(16), }}>See previous</Text>
                </TouchableOpacity>
                </View>

            </View>







        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",

    },

    box: {
        width: 200,
        height: 50,
    },
    panelContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    panel: {
        height: 600,
        padding: 20,
        backgroundColor: '#2c2c2fAA',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.4,
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: 'red'
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#292929',
        alignItems: 'center',
        marginVertical: 10,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    photo: {
        width: '100%',
        height: 225,
        marginTop: 30,
    },
    map: {
        height: '100%',
        width: '100%',
    },
});