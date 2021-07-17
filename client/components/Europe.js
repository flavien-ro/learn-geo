import React, { useState } from 'react';
import { View } from 'react-native';
import Geojson from 'react-native-geojson';

import {useSelector, useDispatch} from 'react-redux';


// import Europe countries json coordonates

import Russia from '../countries/RUS.geo.json';
import Germany from '../countries/DEU.geo.json';
import France from '../countries/FRA.geo.json';
import England from '../countries/GBR.geo.json';
import Italia from '../countries/ITA.geo.json';
import Spain from '../countries/ESP.geo.json';
import Ukraine from '../countries/UKR.geo.json';
import Poland from '../countries/POL.geo.json';
import Romania from '../countries/ROU.geo.json';
import Netherlands from '../countries/NLD.geo.json';
import Belgium from '../countries/BEL.geo.json';
import CzechRepublic from '../countries/CZE.geo.json';
import Greece from '../countries/GRC.geo.json';
import Portugal from '../countries/PRT.geo.json';
import Sweden from '../countries/SWE.geo.json';
import Hungary from '../countries/HUN.geo.json';
import Austria from '../countries/AUT.geo.json';
import Switzerland from '../countries/CHE.geo.json';
import Belarus from '../countries/BLR.geo.json';
import Serbia from '../countries/SRB.geo.json';
import Bulgaria from '../countries/BGR.geo.json';
import Denmark from '../countries/DNK.geo.json';
import Finland from '../countries/FIN.geo.json';
import Slovakia from '../countries/SVK.geo.json';
import Norway from '../countries/NOR.geo.json';
import Ireland from '../countries/IRL.geo.json';
import Croatia from '../countries/HRV.geo.json';
import Moldova from '../countries/MDA.geo.json';
import BosniaHerzegovina from '../countries/BIH.geo.json';
import Albania from '../countries/ALB.geo.json';
import Lituania from '../countries/LTU.geo.json';
import NorthMacedonia from '../countries/MKD.geo.json';
import Slovenia from '../countries/SVN.geo.json';
import Latvia from '../countries/LVA.geo.json';
import Estonia from '../countries/EST.geo.json';
import Montenegro from '../countries/MNE.geo.json';
import Luxembourg from '../countries/LUX.geo.json';
import Malta from '../countries/MLT.geo.json';
import Iceland from '../countries/ISL.geo.json';
import Andorra from '../countries/andorra.json';
import Monaco from '../countries/monaco.json';
import Kosovo from '../countries/CS-KM.geo.json';

const Acountries = [Russia, France, Germany, England, Italia, Spain, Ukraine, Poland, Romania, Netherlands,
    Belgium, CzechRepublic, Greece, Portugal, Sweden, Hungary, Austria, Switzerland, Belarus, Serbia, Bulgaria, Denmark,
    Finland, Slovakia, Norway, Ireland, Croatia, Moldova, BosniaHerzegovina, Albania, Lituania, NorthMacedonia, Slovenia,
    Latvia, Estonia, Montenegro, Luxembourg, Malta, Iceland, Andorra, Monaco, Kosovo];


const DisplayZone = (europeSelector, key, Pcountry, country, setPCountry, dispatch) => {
    if (europeSelector === true) {
        return (
            <Geojson key={key}
                geojson={Pcountry} // geojson of the countries you want to highlight
                strokeColor="#FFFF"
                fillColor="#0000ff"
                strokeWidth={5}
                onPress={() => dispatch({ type: 'DISPLAY', payload: country})}
            />
        )
    } else {
        return (
            <Geojson key={key}
                geojson={country} // geojson of the countries you want to highlight
                strokeColor="#FFFF"
                fillColor="#0000ff"
                strokeWidth={1}
                onPress={() => {
                    setPCountry(country);
                    dispatch({ type: 'EUROPE' });
                    dispatch({ type: 'DISPLAY', payload: country});
                }}
            />
        )
    }
}

export default function Europe() {
    const [Pcountry, setPCountry] = useState({"type":"FeatureCollection","features":[
        {"type":"Feature","id":"AFG","properties":{"name":"azeiojazeioazejazejioazejiazeijazazioe"}}]});

    //Get Europe state
    const europeSelector = useSelector(state => state.CountryReducer.Europe);
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
                                fillColor="#0000ff"
                                strokeWidth={1}
                                onPress={() => {
                                    setPCountry(country);
                                    dispatch({ type: 'EUROPE' });
                                    dispatch({ type: 'DISPLAY', payload: country});
                                }}
                            />
                            :
                                DisplayZone(europeSelector, key, Pcountry, country, setPCountry, dispatch)
                         }
                    </View>
                )
            })
          }
      </View>
    );
}