import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import Europe from './Europe';
import America from './America';
import Asia from './Asia';
import Africa from './Africa';
import Oceania from './Oceania';

export default function Map() {
  return (
      <MapView style={styles.map}
        minZoomLevel={-200}
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
      </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    minWidth: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height,
  },
});