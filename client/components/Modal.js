import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import axios from 'react-native-axios';

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
    //Get Modal state
    const displayModal = useSelector(state => state.ModalReducer);
    //Use for all the dispatch actions
    const dispatch = useDispatch();

    useEffect(() => {
        if (displayModal.isVisible) {
            var config = {
                method: 'get',
                url: 'https://restcountries.eu/rest/v2/name/' + displayModal.countryInfo.features[0].properties.name,
                headers: {
                    'Content-Type': 'application/json'
                },
                };
                axios(config)
                .then(function (response) {
                    setInfoCountry(response);
                })
                .catch(function (error) {
                    setError(error);
                });
        }
    }, [displayModal.isVisible]);

    return (
        <View>
            {displayModal.isVisible &&
                <View style={styles.centeredView}>
                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={true}
                    onRequestClose={() => {
                        dispatch({ type: 'HIDE', payload: {}});
                    }}
                    >
                        {error === null && isEmpty(infoCountry) === false ?
                            <View style={styles.modal}>
                                <Pressable onPress={() => dispatch({ type: 'HIDE', payload: {}})}>
                                    <Text style={{color: 'black', textAlign: 'left', top: 20, left: 30}}>Hide Modal</Text>
                                </Pressable>
                                <Text style={{color: 'black', textAlign: 'left', top: 50, left: 30}}>
                                    Country name : {infoCountry.data[0].name}
                                </Text>
                                <Text style={{color: 'black', textAlign: 'left', top: 50, left: 30}}>
                                    Capital : {infoCountry.data[0].capital}
                                </Text>
                                <Text style={{color: 'black', textAlign: 'left', top: 50, left: 30}}>
                                    Country name : {numFormatter(parseInt(infoCountry.data[0].population))}
                                </Text>
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
  
  const styles = StyleSheet.create({
    modal : {
        position:'absolute',
        backgroundColor: 'white',
        bottom: 0,
        minWidth: Dimensions.get('window').width,
        height: 325,
        borderRadius: 35,
        shadowOpacity: .2
    }
  });