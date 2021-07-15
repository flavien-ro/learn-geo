import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Geojson from 'react-native-geojson';

import China from '../countries/CHN.geo.json';
import Japan from '../countries/JPN.geo.json';
import India from '../countries/IND.geo.json';
import Indonesia from '../countries/IDN.geo.json';
import Pakistan from '../countries/PAK.geo.json';
import Bangladesh from '../countries/BGD.geo.json';
import PHL from '../countries/PHL.geo.json';
import Vietnam from '../countries/VNM.geo.json';
import Iran from '../countries/IRN.geo.json';
import Turkey from '../countries/TUR.geo.json';
import Thai from '../countries/THA.geo.json';
import SouthKorea from '../countries/KOR.geo.json';
import Iraq from '../countries/IRQ.geo.json';
import Afghanistan from '../countries/AFG.geo.json';
import SaudiArabia from '../countries/SAU.geo.json';
import Malaysia from '../countries/MYS.geo.json';
import Uzbekistan from '../countries/UZB.geo.json';
import Nepal from '../countries/NPL.geo.json';
import Yemen from '../countries/YEM.geo.json';
import KoreaNorth from '../countries/PRK.geo.json';
import Taiwan from '../countries/TWN.geo.json';
import SriLanka from '../countries/LKA.geo.json';
import Kazakhstan from '../countries/KAZ.geo.json';
import Cambodia from '../countries/KHM.geo.json';
import Jordan from '../countries/JOR.geo.json';
import Azerbaijan from '../countries/AZE.geo.json';
import UnitedArabEmirates from '../countries/ARE.geo.json';
import Tajikistan from '../countries/TJK.geo.json';
import Israel from '../countries/ISR.geo.json';
import Syria from '../countries/SYR.geo.json';
import Brunei from '../countries/BRN.geo.json';
import Qatar from '../countries/QAT.geo.json';
import Armenia from '../countries/ARM.geo.json';
import Mongolia from '../countries/MNG.geo.json';
import Laos from '../countries/LAO.geo.json';
import Lebanon from '../countries/LBN.geo.json';
import 	Kyrgyzstan from '../countries/KGZ.geo.json';
import Turkmenistan from '../countries/TKM.geo.json';
import Oman from '../countries/OMN.geo.json';
import Kuwait from '../countries/KWT.geo.json';
import Georgia from '../countries/GEO.geo.json';
import Bhutan from '../countries/BTN.geo.json';
import Burma from '../countries/MMR.geo.json';

const Acountries = [China, India, Indonesia, Pakistan, Bangladesh, PHL, Vietnam, Iran, Turkey, Thai,
    SouthKorea, Iraq, Afghanistan, SaudiArabia, Malaysia, Uzbekistan, Nepal, Yemen, KoreaNorth, Taiwan, SriLanka,
    Kazakhstan, Cambodia, Jordan, Azerbaijan, UnitedArabEmirates, Tajikistan, Israel, Syria, Brunei, Qatar,
    Armenia, Mongolia, Laos, Lebanon, Kyrgyzstan, Turkmenistan, Oman, Kuwait, Georgia, Bhutan, Burma, Japan];

const all_countries = Acountries.map((country, key) => {
    return (
        <Geojson key={key}
            geojson={country} // geojson of the countries you want to highlight
            strokeColor="#FFFF"
            fillColor="#ff0000"
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
  