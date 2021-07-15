import * as React from 'react';
import { View } from 'react-native';
import Geojson from 'react-native-geojson';

import USA from '../countries/USA.geo.json';
import Mexico from '../countries/MEX.geo.json';
import Canada from '../countries/CAN.geo.json';
import Haiti from '../countries/HTI.geo.json';
import Cuba from '../countries/CUB.geo.json';
import DominicanRepublic from '../countries/DOM.geo.json';
import Honduras from '../countries/HND.geo.json';
import Salvador from '../countries/SLV.geo.json';
import Nicaragua from '../countries/NIC.geo.json';
import CostaRica from '../countries/CRI.geo.json';
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
import Panama from '../countries/PAN.geo.json';
import PuertoRico from '../countries//USA/PR.geo.json';
import Jamaica from '../countries/JAM.geo.json';
import Belize from '../countries/BLZ.geo.json';
import Bahamas from '../countries/BHS.geo.json';
import Groenland from '../countries/GRL.geo.json';

const Acountries = [USA, Mexico, Haiti, Canada, DominicanRepublic, Cuba, Honduras, Salvador, Nicaragua, CostaRica,
    Brazil, Colombia, Argentina, Peru, Venezuela, Chile, Ecuador, Bolivia, Guatemala, Uruguay, Guyana, Suriname,
    FrenchGuyana, Paraguay, Panama, PuertoRico, Jamaica, Belize, Bahamas, Groenland];

const all_countries = Acountries.map((country, key) => {
    return (
        <Geojson key={key}
            geojson={country} // geojson of the countries you want to highlight
            strokeColor="#FFFF"
            fillColor="#ee82ee"
            strokeWidth={1}
        />
    )
});

export default function America() {
    return (
      <View>
          {all_countries}
      </View>
    );
}
  