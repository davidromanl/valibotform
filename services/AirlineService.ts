const airlines: Airlines = {
  'JP': 'Adria Miles & More',
  'A3': 'Aegean Miles & Bonus',
  'RE': 'Aer Arann Silver Club',
  'EI': 'Aer Lingus Gold Circle Club',
  'SU': 'Aeroflot Bonus',
  '2K': 'AeroGal Aeromillas',
  'AR': 'Aerolineas Argentinas Plus',
  'AM': 'Aeromexico Club Premier',
  'VH': 'Aeropostal Aeropass',
  'VV': 'Aerosvit Meridian Club',
  'ZI': 'Aigle Azur Plus',
  'AH': 'Air Algerie Plus',
  'KC': 'Air Astana Nomad Club',
  'AC': 'Air Canada Aeroplan',
  'CA': 'Air China Companion',
  'YN': 'Air Creebec Aeroplan',
  'EN': 'Air Dolomiti Miles & More',
  'UX': 'Air Europa Flying Blue',
  'AF': 'Air France Flying Blue',
  'AI': 'Air India Flying Returns',
  'JM': 'Air Jamaica 7th Heaven',
  'NX': 'Air Macau Privileges',
  'MD': 'Air Madagascar Namako',
  'KM': 'Air Malta Flypass',
  'MK': 'Air Mauritius KestrelFlyer',
  'NZ': 'Air New Zealand Air Points',
  'YW': 'Air Nostrum Iberia Plus',
  'AP': 'Air One Qualiflyer',
  'HM': 'Air Seychelles',
  'TN': 'Air Tahiti Nui Club Tiare',
  'NF': 'Air Vanuatu -Qantas Frequent Flyer',
  'UM': 'Air Zimbabwe Rainbow Club',
  'BT': 'airBaltic Miles',
  'AB': 'airberlin topbonus',
  'SB': 'Aircalin Flying Blue',
  'A5': 'Airlinair Flying Blue',
  'FL': 'AirTran A+ Rewards',
  'AS': 'Alaska Mileage Plan',
  'AZ': 'Alitalia MilleMiglia Club',
  'NH': 'All Nippon Mileage Club',
  'AA': 'American AAdvantage',
  'R7': 'Aserca Airlines Privilege',
  'OZ': 'Asiana Club',
  'OS': 'Austrian Miles & More ',
  'AV': 'Avianca LifeMiles',
  'UP': 'Bahamasair Flyer',
  'PG': 'Bangkok Airways FlyerBonus',
  'JA': 'BH Airlines Miles & Smiles',
  'KF': 'Blue1 Eurobonus',
  'BD': 'bmi diamond club',
  'FQ': 'Brindabella - Qantas Frequent Flyer',
  'BA': 'British Airways Executive Club',
  'FB': 'Bulgaria Air FlyFB Bonus Points',
  '5T': 'Canadian North Aeroplan',
  'BW': 'Caribbean Miles',
  'V3': 'Carpatair Frequent Flyer',
  'CX': 'Cathay Pacific Asia Miles',
  'KX': 'Cayman Sir Turtle Rewards',
  'CI': 'China Airlines Dynasty Flyer',
  'MU': 'China Easternmiles',
  'CZ': 'China Southern Sky Pearl Club',
  '5L': 'Club Aerosur',
  'DE': 'Condor Miles & More',
  'CO': 'Continental OnePass',
  'CM': 'Copa Airlines MileagePlus',
  'OU': 'Croatia Miles & More',
  'CY': 'Cyprus Airways SunMiles',
  'OK': 'Czech OK Plus',
  'DL': 'Delta SkyMiles',
  'KA': 'DragonAir Asia Miles',
  'MS': 'EgyptAir Plus',
  'LY': 'El Al Matmid Club',
  'EK': 'Emirates Skywards ',
  '7H': 'Era Aviation FlyAway Rewards',
  'OV': 'Estonian Air EuroBonus',
  'ET': 'Ethiopian Sheba Miles',
  'EY': 'Etihad Guest Miles',
  'GJ': 'Eurofly Hi-Fly',
  'BR': 'Eva Airways Evergreen Club',
  'AY': 'Finnair Plus',
  '7F': 'First Air Aeroplan',
  'BE': 'Flybe Rewards 4 All',
  'F9': 'Frontier Airlines EarlyReturns',
  'GA': 'Garuda Indonesia',
  '4U': 'GermanwingsBoomerang Club',
  'G3': 'GOL Smiles',
  'GF': 'Gulf Air FalconFlyer',
  'HU': 'Hainan Fortune Wings Club',
  'HA': 'Hawaiian Airlines HawaiianMiles',
  'HX': 'Hong Kong Airlines Fortune Wings Club',
  'UO': 'Hong Kong Express Fortune Wings Club',
  'IB': 'Iberia Plus',
  'FI': 'Icelandair Saga Club',
  'IC': 'Indian Airlines Flying Returns',
  'IR': 'IranAir SkyGift',
  'WP': 'Island Air Cloud 9',
  'JO': 'Jalways Mileage Bank',
  'JL': 'Japan Airlines Mileage Bank',
  'JU': 'Jat Airways Extra Flight',
  '9W': 'Jet Privilege',
  'B6': 'JetBlue TrueBlue',
  'JQ': 'Jetstar Airways Qantas Frequent Flyer',
  'KQ': 'Kenya Airways Flying Blue',
  'KL': 'KLM Flying Blue',
  'KE': 'Korean Airlines Skypass',
  'KU': 'Kuwait Airways Oasis Club',
  'LR': 'Lacsa LifeMiles',
  'TM': 'LAM Mozambique Airlines Flamingo Club',
  'LA': 'LAN Airlines LANPASS',
  '4M': 'LAN Argentina LANPASS',
  'XL': 'LAN Ecuador LANPASS',
  'NG': 'Lauda Air',
  'LO': 'LOT Miles & More',
  'LT': 'LTU topbonus',
  'LH': 'Lufthansa Miles and More',
  'LG': 'Luxair Miles & More',
  'MH': 'Malaysia Airlines - Enrich',
  'MP': 'Martinair Flying Blue',
  'IG': 'Meridiana Hi-Fly ',
  'MX': 'Mexicana Frecuenta Miles',
  'ME': 'Middle East Cedar Miles',
  'YX': 'Midwest Miles',
  'ZB': 'Monarch Vantage Club',
  'YM': 'Montenegro Airlines Vision Team',
  'OA': 'Olympic Air Travelair Club',
  'WY': 'Oman Air Sinbad',
  'EC': 'Open Skies Executive Club',
  'LW': 'Pacific Wings Plus',
  'PR': 'Philipine Mabuhay Miles',
  'PU': 'Pluna Smiles',
  'QF': 'Qantas Frequent Flyer',
  'QR': 'Qatar Privilege Club',
  'ZL': 'Regional Express Rex Flyer',
  'AT': 'Royal Air Maroc Safar Flyer',
  'RJ': 'Royal Jordanian Royal Plus',
  'S7': 'S7 Priority',
  'SK': 'SAS EuroBonus',
  'S4': 'SATA Imagine',
  'SV': 'Saudi Arabian Airlines Al-fursan',
  'FM': 'Shanghai Airlines Eastern Miles',
  '3U': 'Sichuan Airlines Golden Panda',
  'MI': 'Silk Air KrisFlyer',
  'SQ': 'Singapore Airlines KrisFlyer',
  'SA': 'South African Airways Voyager',
  'JK': 'Spanair Plus',
  'UL': 'SriLankan FlySmiLes',
  'SY': 'Sun Country Ufly',
  'LX': 'Swiss Miles & More',
  'TA': 'Taca LifeMiles',
  'JJ': 'TAM Airlines (JJ) Fidelidade TAM',
  'PZ': 'TAM Airlines (PZ) Fidelidade TAM',
  'TP': 'TAP Portugal Victoria',
  'RO': 'Tarom Smart Miles',
  'TG': 'Thai Royal Orchid Plus',
  'UN': 'Transaero Privilege Program',
  'GE': 'TransAsia Airways Legend Flight Club',
  'HF': 'TUIfly Bluemiles',
  'X3': 'TUIfly FriendChips',
  'TU': 'Tunis Air Fidelys',
  'TK': 'Turkish Airlines Miles & Smiles',
  'T7': 'Twin Jet Flying Blue',
  'PS': 'Ukraine International Panorama Club',
  'UA': 'United Mileage Plus',
  'U6': 'Ural Airlines Travelling Club \'Wings\'',
  'US': 'US Airways Dividend Miles',
  'PD': 'VIPorter',
  'VX': 'Virgin America eleVAte',
  'VS': 'Virgin Atlantic Flying Club',
  'VA': 'Virgin Australia (VA) Velocity',
  'XF': 'Vladivostok Leader ',
  'VG': 'VLM Flying Blue',
  'VY': 'Vueling Punto',
  'WS': 'WestJet Rewards',
  'WF': 'Widerøe Eurobonus',
  'MF': 'Xiamen Egret Card',
  'IY': 'Yemenia Yemen Airways Arabia Felix Club',
}

interface Airlines {
  [key: string]: string
};

export default {
  getAirlines(): Airlines {
    return airlines
  },
}
