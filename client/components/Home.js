import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Map from "./Map";

// import fonts
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';


export default function Home({navigation}) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
            <>
              <View pointerEvents="none" style={{backgroundColor: "rgba(0,0, 0,.5)", minWidth: Dimensions.get('window').width,
              minHeight: Dimensions.get('window').height, shadowOpacity: .4, opacity: .5}}>
                  <Map />
              </View>
                <View style={styles.container}>
                    <TouchableOpacity activeOpacity={.9} style={styles.homeBtn} onPress={() => navigation.navigate('Atlas')}>
                        <Text style={{fontSize: 22, fontFamily: 'Poppins_700Bold', color: 'white'}} >ATLAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} style={styles.homeBtn2} onPress={() => navigation.navigate('Atlas')}>
                        <Text style={{fontSize: 22, fontFamily: 'Poppins_700Bold', color: 'white'}} >QUIZZ</Text>
                    </TouchableOpacity>
                </View>
            </>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    minWidth: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  homeBtn: {
    width: Dimensions.get('window').width / 1.5,
    height: 100,
    backgroundColor: '#ffa500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  homeBtn2: {
    width: Dimensions.get('window').width / 1.5,
    height: 100,
    backgroundColor: '#ffa500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
    marginTop: 50
  }
});