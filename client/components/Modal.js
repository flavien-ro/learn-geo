import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import axios from 'react-native-axios';
import { SvgCssUri } from 'react-native-svg';
import Modal from 'react-native-modal';
import Flag from 'react-native-flags-kit';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import {
    Montserrat_400Regular,
  } from '@expo-google-fonts/montserrat';
  
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}

function isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
  }

export default function CountryModal(props) {
    const [infoCountry, setInfoCountry] = useState({});
    const [error, setError] = useState(null);
    const [scrollOffset, setScrollOffset] = useState(null);
    const scrollViewRef = React.createRef();

    //Get Modal state
    const displayModal = useSelector(state => state.ModalReducer);
    //Use for all the dispatch actions
    const dispatch = useDispatch();

    const handleScrollTo = p => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo(p);
        }
      };

    useEffect(() => {
        if (displayModal.isVisible) {
            var config = {
                method: 'get',
                url: 'https://restcountries.com/v3.1/alpha/' + displayModal.countryInfo.features[0].id,
                headers: {
                    'Content-Type': 'application/json'
                },
                };
                axios(config)
                .then(function (response) {
                    // alert(JSON.stringify(response.data[0].currencies));
                    setInfoCountry(response);
                })
                .catch(function (error) {
                    setError(error);
                });
        }
    }, [displayModal.isVisible]);
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Montserrat_400Regular
      });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View>
                {displayModal.isVisible &&
                    <View style={{alignItems: 'left', minWidth: Dimensions.get('window').width}}>
                        <Modal
                            isVisible={true}
                            onSwipeComplete={() => {
                                dispatch({ type: 'HIDE', payload: {}});
                            }}
                            backdropOpacity={.5}
                            useNativeDriverForBackdrop
                            scrollTo={handleScrollTo}
                            scrollOffset={scrollOffset}
                            scrollOffsetMax={400 - 300}
                            propagateSwipe={true}
                            onBackdropPress={() => {
                                dispatch({ type: 'HIDE', payload: {}});
                            }}
                        >
                            {error === null && isEmpty(infoCountry) === false ?
                                <View style={styles.modal}>
                                    <ScrollView
                                        ref={scrollViewRef}
                                        onScroll={(event) => setScrollOffset(event.nativeEvent.contentOffset.y)}
                                        scrollEventThrottle={16}>
                                    <Pressable onPress={() => dispatch({ type: 'HIDE', payload: {}})}>
                                        <Text style={{color: 'black', fontFamily: 'Poppins_700Bold',textAlign: 'left', top: 20, left: 30}}>Hide Modal</Text>
                                    </Pressable>
                                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', top: 40}}>
                                        <Text style={{flex: 1, maxWidth: 250, fontSize: 20, fontFamily: 'Poppins_700Bold'}} numberOfLines={2} ellipsizeMode='tail'>
                                            {infoCountry.data[0].name.common}
                                        </Text>
                                        <Flag
                                            code={displayModal.countryInfo.features[0].id.slice(0, 2)}
                                            size={64}
                                            />
                                    </View>
                                    <View style={styles.allCards}>
                                        <View style={styles.card}>
                                            <Text style={{fontFamily: 'Poppins_700Bold'}}>
                                                Capital :
                                            </Text>
                                            <Text style={{flex: 1, maxWidth: 200, fontFamily: 'Montserrat_400Regular'}} numberOfLines={1} ellipsizeMode='tail'>
                                                {infoCountry.data[0].capital[0]}
                                            </Text>
                                        </View>
                                        <View style={styles.card}>
                                            <Text style={{fontFamily: 'Poppins_700Bold'}}>
                                                Population :
                                            </Text>
                                            <Text style={{flex: 1, maxWidth: 200, fontFamily: 'Montserrat_400Regular'}} numberOfLines={1} ellipsizeMode='tail'>
                                                {numFormatter(parseInt(infoCountry.data[0].population))}
                                            </Text>
                                        </View>
                                        <View style={styles.card}>
                                            <Text style={{fontFamily: 'Poppins_700Bold'}}>
                                                Region :
                                            </Text>
                                            <Text style={{flex: 1, maxWidth: 200, fontFamily: 'Montserrat_400Regular'}} numberOfLines={1} ellipsizeMode='tail'>
                                                {infoCountry.data[0].subregion}
                                            </Text>
                                        </View>
                                        {/* <View style={styles.lastCard}>
                                            <Text>
                                            Language :
                                            </Text>
                                            <Text style={{flex: 1, maxWidth: 200}} numberOfLines={1} ellipsizeMode='tail'>
                                                {infoCountry.data.languages[0].name}
                                            </Text>
                                        </View> */}
                                    </View>
                                    </ScrollView>
                                </View>
                                :
                                    <View style={styles.modal}>
                                        <Pressable onPress={() => {
                                            dispatch({ type: 'HIDE'});
                                            setError(null);
                                        }}>
                                            <Text style={{color: 'black', textAlign: 'left', top: 20, left: 30}}>Hide Modal</Text>
                                        </Pressable>
                                        <Text style={{color: 'black', textAlign: 'center', top: 100, left: 30}}>
                                            No data found ...
                                        </Text>
                                    </View>
                            }

                        </Modal>
                    </View>
                }
            </View>
        );
    };
    }
  
  const styles = StyleSheet.create({
    modal : {
        zIndex: 999,
        position:'absolute',
        backgroundColor: '#f2f2f2',
        bottom: 50,
        minWidth: Dimensions.get('window').width,
        height: 325,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        shadowOpacity: .2,
        left: -20,
    },
    card: {
        top: 50,
        height: 50,
        backgroundColor: 'white',        
        width: '100%',
        shadowOpacity: .1,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginRight: 10,
    },
    lastCard: {
        top: 50,
        height: 50,
        backgroundColor: 'white',        
        width: Dimensions.get('window').width,
        shadowOpacity: .1,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 70
    },
    allCards: {
        marginLeft: 10,
        maxWidth: Dimensions.get('window').width,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
  });