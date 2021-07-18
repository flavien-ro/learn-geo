import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import {useSelector, useDispatch} from 'react-redux';

import { Ionicons } from '@expo/vector-icons';

import Europe from './Europe';
import America from './America';
import Asia from './Asia';
import Africa from './Africa';
import Oceania from './Oceania';


import CountryModal from './Modal';

export default function Map() {
  return (
      <MapView style={styles.map}
        maxZoomLevel={2}
        initialRegion={{
            latitude: 20,
            longitude: 20,
            latitudeDelta: 180,
            longitudeDelta: 180
          }}
      >
          <Europe/>
          <America/>
          <Asia/>
          <Africa/>
          <Oceania/>
          <CountryModal/>
      </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    minWidth: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height,
  },
  goBack: {
    position: 'absolute',
    top: 30,
    left: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25
  },
});