import React from 'react';

import { Button, View } from "native-base";
import { ScrollView, StyleSheet, Image, Text } from "react-native";

const Profile = (props) => {
  return (
    <ScrollView>
      <View style={{backgroundColor:"#01366f" , paddingBottom:50,borderBottomEndRadius:50,borderBottomStartRadius:50}}>
      <View style={styles.profileImgContainer}>
        <Image
          style={styles.profileImg}
          source={{ uri: "https://i.pinimg.com/originals/b2/82/b6/b282b6fc1eb5d8540c4e670bd95945c0.png" }}></Image>
      </View>

      <Text style={styles.name}>Jane Doe</Text>
      <Text style={styles.email}>Jane Doe@gmail.com</Text>

      </View>


      <View  style={styles.btn_container}>
        <Button style={styles.btn} onPress={() => {
          props.navigation.navigate('Edit')
        }}>
          <Text style={{ fontSize: 20 }}>Edit Profile</Text>
        </Button>


        <Button style={styles.btn} onPress={() => {
          props.navigation.navigate('TripsHistory')
        }}>
          <Text style={{ fontSize: 20 }}>Latest Trips</Text>
        </Button>

      </View>

    </ScrollView>
  );
};

export default Profile;


const styles = StyleSheet.create({
  profileImgContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100,
    //alignSelf:"center"
  },
  name: {
    color:"white",
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  email: {
    color:"white",
    marginTop: 5,
    fontSize: 18,
    textAlign: "center"
  },

  btn_container:{
    display:'flex',
    alignSelf:'stretch',
    justifyContent:'center',
    padding:20,
    //backgroundColor:"#01366f",
    marginTop:50,
    borderTopLeftRadius:70,
    borderTopRightRadius:70
  },

  btn: {
    marginTop: 30,
    padding: 30,
    color:'white',
    borderRadius: 20,
    backgroundColor: '#ff7800',
    alignSelf:'center',

    shadowColor: '#000',
    shadowOffset: { width: 100, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6
  },
});