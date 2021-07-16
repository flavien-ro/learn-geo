import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Geojson from 'react-native-geojson';

// import Oceania countries json coordonates

import Australia from '../countries/AUS.geo.json';
import PapuaGuinea from '../countries/PNG.geo.json';
import NewZeland from '../countries/NZL.geo.json';
import Fiji from '../countries/FJI.geo.json';
import Solomon from '../countries/SLB.geo.json';
import NewCaledonia from '../countries/NCL.geo.json';
import Vanuatu from '../countries/VUT.geo.json';

const Acountries = [Australia, PapuaGuinea, NewZeland, NewCaledonia, Solomon, Fiji, Vanuatu];

const all_countries = Acountries.map((country, key) => {
    return (
        <Geojson key={key}
            geojson={country} // geojson of the countries you want to highlight
            strokeColor="#FFFF"
            fillColor="#870078"
            strokeWidth={1}
            onPress={() => alert('pressed ' + JSON.stringify(country.features[0].properties.name))}
        />
    )
});

export default function Oceania() {
    return (
      <View>
          {all_countries}
      </View>
    );
}