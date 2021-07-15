import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Geojson from 'react-native-geojson';

import Brazil from '../countries/BRA.geo.json';
import Colombia from '../countries/COL.geo.json';
import Argentina from '../countries/ARG.geo.json';
import Peru from '../countries/PER.geo.json';
import Venezuela from '../countries/VEN.geo.json';
import Chile from '../countries/CHL.geo.json';
import Guatemala from '../countries/GTM.geo.json';
import Ecuador from '../countries/ECU.geo.json';
import Bolivia from '../countries/BOL.geo.json';
import Uruguay from '../countries/URY.geo.json';
import Guyana from '../countries/GUY.geo.json';
import Suriname from '../countries/SUR.geo.json';
import FrenchGuyana from '../countries/GUF.geo.json';
import Paraguay from '../countries/PRY.geo.json';

export default function SouthAmerica() {
    return (
      <View>
          <Geojson
              geojson={China} // geojson of the countries you want to highlight
              // strokeColor="#FFFF"
              fillColor="#00008b"
          />
          {/* <Geojson
              geojson={America} // geojson of the countries you want to highlight
              // strokeColor="#FFFF"
              fillColor="#ff0000"
          />
          <Geojson
              geojson={Africa} // geojson of the countries you want to highlight
              // strokeColor="#FFFF"
              fillColor="#ffff00"
          />
          <Geojson
              geojson={Asia} // geojson of the countries you want to highlight
              // strokeColor="#FFFF"
              fillColor="#8a2be2"
          />
                  <Geojson
              geojson={SouthAmerica} // geojson of the countries you want to highlight
              // strokeColor="#FFFF"
              fillColor="#7fff00"
          />
                      <Geojson
              geojson={Oceania} // geojson of the countries you want to highlight
              // strokeColor="#FFFF"
              fillColor="#ff7f50"
          /> */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    map: {
      minWidth: Dimensions.get('window').width,
      minHeight: Dimensions.get('window').height,
    },
  });