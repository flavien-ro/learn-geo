import React, { useState } from 'react';
import { View } from 'react-native';
import Geojson from 'react-native-geojson';


import {useSelector, useDispatch} from 'react-redux';

// import Oceania countries json coordonates

import Australia from '../countries/AUS.geo.json';
import PapuaGuinea from '../countries/PNG.geo.json';
import NewZeland from '../countries/NZL.geo.json';
import Fiji from '../countries/FJI.geo.json';
import Solomon from '../countries/SLB.geo.json';
import NewCaledonia from '../countries/NCL.geo.json';
import Vanuatu from '../countries/VUT.geo.json';

const Acountries = [Australia, PapuaGuinea, NewZeland, NewCaledonia, Solomon, Fiji, Vanuatu];


const DisplayZone = (oceaniaSelector, key, Pcountry, country, setPCountry, dispatch) => {
    if (oceaniaSelector === true) {
        return (
            <Geojson key={key}
                geojson={Pcountry} // geojson of the countries you want to highlight
                strokeColor="#FFFF"
                fillColor="#870078"
                strokeWidth={5}
                onPress={() => dispatch({ type: 'DISPLAY', payload: country})}
            />
        )
    } else {
        return (
            <Geojson key={key}
                geojson={country} // geojson of the countries you want to highlight
                strokeColor="#FFFF"
                fillColor="#870078"
                strokeWidth={1}
                onPress={() => {
                    setPCountry(country);
                    dispatch({ type: 'OCEANIA' });
                    dispatch({ type: 'DISPLAY', payload: country});
                }}
            />
        )
    }
}

export default function Oceania() {
    const [Pcountry, setPCountry] = useState({"type":"FeatureCollection","features":[
        {"type":"Feature","id":"AFG","properties":{"name":"azeiojazeioazejazejioazejiazeijazazioe"}}]});
    
    //Get OCEANIA state
    const oceaniaSelector = useSelector(state => state.CountryReducer.Oceania);
    
    //Use for all the dispatch actions
    const dispatch = useDispatch();
    
    return (
      <View>
          {
              Acountries.map((country, key) => {
                return (
                    <View key={key}>
                         {country.features[0].properties.name !== Pcountry.features[0].properties.name ?
                                <Geojson key={key}
                                geojson={country} // geojson of the countries you want to highlight
                                strokeColor="#FFFF"
                                fillColor="#870078"
                                strokeWidth={1}
                                onPress={() => {
                                    setPCountry(country);
                                    dispatch({ type: 'OCEANIA' });
                                    dispatch({ type: 'DISPLAY', payload: country});
                                }}
                            />
                            :
                                DisplayZone(oceaniaSelector, key, Pcountry, country, setPCountry, dispatch)
                         }
                    </View>
                )
            })
          }
      </View>
    );
}