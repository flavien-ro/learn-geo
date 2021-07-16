import * as React from 'react';
import {View} from 'react-native';
import Geojson from 'react-native-geojson';

import Nigeria from '../countries/NGA.geo.json';
import Ethiopia from '../countries/ETH.geo.json';
import Egypt from '../countries/EGY.geo.json';
import Congo from '../countries/COG.geo.json';
import Tanzania from '../countries/TZA.geo.json'
import SouthAfrica from '../countries/ZAF.geo.json';
import Kenya from '../countries/KEN.geo.json';
import Sudan from '../countries/SDN.geo.json';
import Uganda from '../countries/UGA.geo.json';
import Algeria from '../countries/DZA.geo.json';
import Morocco from '../countries/MAR.geo.json';
import Angola from '../countries/AGO.geo.json';
import Mozambique from '../countries/MOZ.geo.json';
import Ghana from '../countries/GHA.geo.json';
import Cameroon from '../countries/CMR.geo.json';
import IvoryCost from '../countries/CIV.geo.json';
import Niger from '../countries/NER.geo.json';
import Malawi from '../countries/MWI.geo.json';
import Burkina from '../countries/BFA.geo.json';
import Mali from '../countries/MLI.geo.json';
import Zambia from '../countries/ZMB.geo.json';
import Chad from '../countries/TCD.geo.json';
import Senegal from '../countries/SEN.geo.json';
import Zimbabwe from '../countries/ZWE.geo.json';
import Benin from '../countries/BEN.geo.json';
import Rwanda from '../countries/RWA.geo.json';
import Burundi from '../countries/BDI.geo.json';
import Somalia from '../countries/SOM.geo.json';
import Tunisia from '../countries/TUN.geo.json';
import SouthSoudan from '../countries/SSD.geo.json';
import Togo from '../countries/TGO.geo.json';
import Gabon from '../countries/GAB.geo.json';
import Namibia from '../countries/NAM.geo.json';
import Lesotho from '../countries/LSO.geo.json';
import Gambia from '../countries/GMB.geo.json';
import Mauritania from '../countries/MRT.geo.json'
import CFA from '../countries/CAF.geo.json';
import Liberia from '../countries/LBR.geo.json';
import Libya from '../countries/LBY.geo.json';
import SierraLeone from '../countries/SLE.geo.json';
import Madagascar from '../countries/MDG.geo.json';
import COD from '../countries/COD.geo.json';
import Swaziland from '../countries/SWZ.geo.json';
import Guinea from '../countries/GIN.geo.json';
import Botswana from '../countries/BWA.geo.json';
import Eritrea from '../countries/ERI.geo.json';
import GuineaBissau from '../countries/GNB.geo.json';
import WesternSahara from '../countries/ESH.geo.json';
import Djibouti from '../countries/DJI.geo.json';


const Acountries = [Nigeria, Ethiopia, Egypt, Congo, Tanzania, SouthAfrica, Kenya, Sudan, Uganda,
    Algeria, Morocco, Angola, Mozambique, Ghana, Cameroon, IvoryCost, Niger, Malawi, Burkina, Mali, Zambia,
    Chad, Senegal, Zimbabwe, Benin, Rwanda, Burundi, Somalia, Tunisia, SouthSoudan, Togo, Gabon, Namibia, Lesotho,
    Gambia, Mauritania, CFA, Liberia, Libya, SierraLeone, Madagascar, COD, Swaziland, Guinea, Botswana, Eritrea, GuineaBissau,
    WesternSahara, Djibouti];

const all_countries = Acountries.map((country, key) => {
    return (
        <Geojson key={key}
            geojson={country} // geojson of the countries you want to highlight
            strokeColor="#FFFF"
            fillColor="#ffa500"
            strokeWidth={1}
            onPress={() => alert('pressed ' + JSON.stringify(country.features[0].properties.name))}
        />
    )
});

export default function Africa() {
    return (
      <View>
          {all_countries}
      </View>
    );
}
  