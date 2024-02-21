interface Countries {
  [key: string]: {
    name: string
    currency: string
  }
}

const countries: Countries = {
  AF: {
    name: 'Afghanistan',
    currency: 'AFA',
  },
  AL: {
    name: 'Albania',
    currency: 'ALL',
  },
  DZ: {
    name: 'Algeria',
    currency: 'DZD',
  },
  AS: {
    name: 'American Samoa',
    currency: 'USD',
  },
  AD: {
    name: 'Andorra',
    currency: 'EUR',
  },
  AO: {
    name: 'Angola',
    currency: 'AOA',
  },
  AI: {
    name: 'Anguilla',
    currency: 'XCD',
  },
  AQ: {
    name: 'Antarctica',
    currency: '',
  },
  AG: {
    name: 'Antigua and Barbuda',
    currency: 'XCD',
  },
  AR: {
    name: 'Argentina',
    currency: 'ARS',
  },
  AM: {
    name: 'Armenia',
    currency: 'AMD',
  },
  AW: {
    name: 'Aruba',
    currency: 'AWG',
  },
  /* --: {
    name: "Zaire",
    currency: ""
  }, */
  AU: {
    name: 'Australia',
    currency: 'AUD',
  },
  AT: {
    name: 'Austria',
    currency: 'EUR',
  },
  AZ: {
    name: 'Azerbaijan',
    currency: 'AZM',
  },
  BS: {
    name: 'Bahamas',
    currency: 'BSD',
  },
  BH: {
    name: 'Bahrain',
    currency: 'BHD',
  },
  BD: {
    name: 'Bangladesh',
    currency: 'BDT',
  },
  BB: {
    name: 'Barbados',
    currency: 'BBD',
  },
  BY: {
    name: 'Belarus',
    currency: 'BYR',
  },
  BE: {
    name: 'Belgium',
    currency: 'EUR',
  },
  BZ: {
    name: 'Belize',
    currency: 'BZD',
  },
  BJ: {
    name: 'Benin',
    currency: 'XOF',
  },
  BM: {
    name: 'Bermuda',
    currency: 'BMD',
  },
  BT: {
    name: 'Bhutan',
    currency: 'BTN',
  },
  BO: {
    name: 'Bolivia',
    currency: 'BOB',
  },
  BA: {
    name: 'Bosnia and Herzegovina',
    currency: 'BAM',
  },
  BW: {
    name: 'Botswana',
    currency: 'BWP',
  },
  BV: {
    name: 'Bouvet Island',
    currency: 'NOK',
  },
  BR: {
    name: 'Brazil',
    currency: 'BRL',
  },
  IO: {
    name: 'British Indian Ocean Territory',
    currency: 'USD',
  },
  VG: {
    name: 'British Virgin Islands',
    currency: 'USD',
  },
  BN: {
    name: 'Brunei Darussalam',
    currency: 'BND',
  },
  BG: {
    name: 'Bulgaria',
    currency: 'BGN',
  },
  BF: {
    name: 'Burkina Faso',
    currency: 'XOF',
  },
  MM: {
    name: 'Burma',
    currency: 'MMK',
  },
  BI: {
    name: 'Burundi',
    currency: 'BIF',
  },
  KH: {
    name: 'Cambodia',
    currency: 'KHR',
  },
  CM: {
    name: 'Cameroon',
    currency: 'XAF',
  },
  CA: {
    name: 'Canada',
    currency: 'CAD',
  },
  CV: {
    name: 'Cape Verde',
    currency: 'CVE',
  },
  KY: {
    name: 'Cayman Islands',
    currency: 'KYD',
  },
  CF: {
    name: 'Central African Republic',
    currency: 'XAF',
  },
  TD: {
    name: 'Chad',
    currency: 'XAF',
  },
  CL: {
    name: 'Chile',
    currency: 'CLP',
  },
  CN: {
    name: 'China',
    currency: 'CNY',
  },
  CX: {
    name: 'Christmas Island',
    currency: 'AUD',
  },
  CC: {
    name: 'Cocos (Keeling) Islands',
    currency: 'AUD',
  },
  CO: {
    name: 'Colombia',
    currency: 'COP',
  },
  KM: {
    name: 'Comoros',
    currency: 'KMF',
  },
  CD: {
    name: 'Democratic Republic of the Congo (DRC)',
    currency: 'CDF',
  },
  CG: {
    name: 'Congo, Republic of the',
    currency: 'XAF',
  },
  CK: {
    name: 'Cook Islands',
    currency: 'NZD',
  },
  CR: {
    name: 'Costa Rica',
    currency: 'CRC',
  },
  CI: {
    name: 'Cote d\'Ivoire',
    currency: 'XOF',
  },
  HR: {
    name: 'Croatia',
    currency: 'HRK',
  },
  CU: {
    name: 'Cuba',
    currency: 'CUP',
  },
  CY: {
    name: 'Cyprus',
    currency: 'CYP',
  },
  CZ: {
    name: 'Czech Republic',
    currency: 'CZK',
  },
  DK: {
    name: 'Denmark',
    currency: 'DKK',
  },
  DJ: {
    name: 'Djibouti',
    currency: 'DJF',
  },
  DM: {
    name: 'Dominica',
    currency: 'XCD',
  },
  DO: {
    name: 'Dominican Republic',
    currency: 'DOP',
  },
  TL: {
    name: 'East Timor',
    currency: 'TPE',
  },
  EC: {
    name: 'Ecuador',
    currency: 'USD',
  },
  EG: {
    name: 'Egypt',
    currency: 'EGP',
  },
  SV: {
    name: 'El Salvador',
    currency: 'SVC',
  },
  GQ: {
    name: 'Equatorial Guinea',
    currency: 'XAF',
  },
  ER: {
    name: 'Eritrea',
    currency: 'ERN',
  },
  EE: {
    name: 'Estonia',
    currency: 'EEK',
  },
  ET: {
    name: 'Ethiopia',
    currency: 'ETB',
  },
  FK: {
    name: 'Falkland Islands (Islas Malvinas)',
    currency: 'FKP',
  },
  FO: {
    name: 'Faroe Islands',
    currency: 'DKK',
  },
  FJ: {
    name: 'Fiji',
    currency: 'FJD',
  },
  FI: {
    name: 'Finland',
    currency: 'EUR',
  },
  FR: {
    name: 'France',
    currency: 'EUR',
  },
  GF: {
    name: 'French Guiana',
    currency: 'EUR',
  },
  PF: {
    name: 'French Polynesia',
    currency: 'XPF',
  },
  TF: {
    name: 'French Southern and Antarctic Lands',
    currency: 'EUR',
  },
  GA: {
    name: 'Gabon',
    currency: 'XAF',
  },
  GM: {
    name: 'The Gambia',
    currency: 'GMD',
  },
  GE: {
    name: 'Georgia',
    currency: 'GEL',
  },
  DE: {
    name: 'Germany',
    currency: 'EUR',
  },
  GH: {
    name: 'Ghana',
    currency: 'GHC',
  },
  GI: {
    name: 'Gibraltar',
    currency: 'GIP',
  },
  GR: {
    name: 'Greece',
    currency: 'EUR',
  },
  GL: {
    name: 'Greenland',
    currency: 'DKK',
  },
  GD: {
    name: 'Grenada',
    currency: 'XCD',
  },
  GP: {
    name: 'Guadeloupe',
    currency: 'EUR',
  },
  GU: {
    name: 'Guam',
    currency: 'USD',
  },
  GT: {
    name: 'Guatemala',
    currency: 'GTQ',
  },
  GN: {
    name: 'Guinea',
    currency: 'GNF',
  },
  GW: {
    name: 'Guinea-Bissau',
    currency: 'XOF',
  },
  GY: {
    name: 'Guyana',
    currency: 'GYD',
  },
  HT: {
    name: 'Haiti',
    currency: 'HTG',
  },
  HM: {
    name: 'Heard Island and McDonald Islands',
    currency: 'AUD',
  },
  VA: {
    name: 'Holy See (Vatican City)',
    currency: 'EUR',
  },
  HN: {
    name: 'Honduras',
    currency: 'HNL',
  },
  HK: {
    name: 'Hong Kong (SAR)',
    currency: 'HKD',
  },
  HU: {
    name: 'Hungary',
    currency: 'HUF',
  },
  IS: {
    name: 'Iceland',
    currency: 'ISK',
  },
  IN: {
    name: 'India',
    currency: 'INR',
  },
  ID: {
    name: 'Indonesia',
    currency: 'IDR',
  },
  IR: {
    name: 'Iran',
    currency: 'IRR',
  },
  IQ: {
    name: 'Iraq',
    currency: 'IQD',
  },
  IE: {
    name: 'Ireland',
    currency: 'EUR',
  },
  IL: {
    name: 'Israel',
    currency: 'ILS',
  },
  IT: {
    name: 'Italy',
    currency: 'EUR',
  },
  JM: {
    name: 'Jamaica',
    currency: 'JMD',
  },
  JP: {
    name: 'Japan',
    currency: 'JPY',
  },
  JO: {
    name: 'Jordan',
    currency: 'JOD',
  },
  KZ: {
    name: 'Kazakhstan',
    currency: 'KZT',
  },
  KE: {
    name: 'Kenya',
    currency: 'KES',
  },
  KI: {
    name: 'Kiribati',
    currency: 'AUD',
  },
  KP: {
    name: 'Korea, North',
    currency: 'KPW',
  },
  KR: {
    name: 'Korea, South',
    currency: 'KRW',
  },
  KW: {
    name: 'Kuwait',
    currency: 'KWD',
  },
  KG: {
    name: 'Kyrgyzstan',
    currency: 'KGS',
  },
  LA: {
    name: 'Laos',
    currency: 'LAK',
  },
  LV: {
    name: 'Latvia',
    currency: 'LVL',
  },
  LB: {
    name: 'Lebanon',
    currency: 'LBP',
  },
  LS: {
    name: 'Lesotho',
    currency: 'LSL',
  },
  LR: {
    name: 'Liberia',
    currency: 'LRD',
  },
  LY: {
    name: 'Libya',
    currency: 'LYD',
  },
  LI: {
    name: 'Liechtenstein',
    currency: 'CHF',
  },
  LT: {
    name: 'Lithuania',
    currency: 'LTL',
  },
  LU: {
    name: 'Luxembourg',
    currency: 'EUR',
  },
  MO: {
    name: 'Macao',
    currency: 'MOP',
  },
  MK: {
    name: 'Macedonia, The Former Yugoslav Republic of',
    currency: 'MKD',
  },
  MG: {
    name: 'Madagascar',
    currency: 'MGF',
  },
  MW: {
    name: 'Malawi',
    currency: 'MWK',
  },
  MY: {
    name: 'Malaysia',
    currency: 'MYR',
  },
  MV: {
    name: 'Maldives',
    currency: 'MVR',
  },
  ML: {
    name: 'Mali',
    currency: 'XOF',
  },
  MT: {
    name: 'Malta',
    currency: 'EUR',
  },
  MH: {
    name: 'Marshall Islands',
    currency: 'USD',
  },
  MQ: {
    name: 'Martinique',
    currency: 'EUR',
  },
  MR: {
    name: 'Mauritania',
    currency: 'MRO',
  },
  MU: {
    name: 'Mauritius',
    currency: 'MUR',
  },
  YT: {
    name: 'Mayotte',
    currency: 'EUR',
  },
  MX: {
    name: 'Mexico',
    currency: 'MXN',
  },
  FM: {
    name: 'Micronesia, Federated States of',
    currency: 'USD',
  },
  MD: {
    name: 'Moldova',
    currency: 'MDL',
  },
  MC: {
    name: 'Monaco',
    currency: 'EUR',
  },
  MN: {
    name: 'Mongolia',
    currency: 'MNT',
  },
  ME: {
    name: 'Montenegro',
    currency: '',
  },
  MS: {
    name: 'Montserrat',
    currency: 'XCD',
  },
  MA: {
    name: 'Morocco',
    currency: 'MAD',
  },
  MZ: {
    name: 'Mozambique',
    currency: 'MZM',
  },
  NA: {
    name: 'Namibia',
    currency: 'NAD',
  },
  NR: {
    name: 'Nauru',
    currency: 'AUD',
  },
  NP: {
    name: 'Nepal',
    currency: 'NPR',
  },
  NL: {
    name: 'Netherlands',
    currency: 'EUR',
  },
  AN: {
    name: 'Netherlands Antilles',
    currency: 'ANG',
  },
  NC: {
    name: 'New Caledonia',
    currency: 'XPF',
  },
  NZ: {
    name: 'New Zealand',
    currency: 'NZD',
  },
  NI: {
    name: 'Nicaragua',
    currency: 'NIO',
  },
  NE: {
    name: 'Niger',
    currency: 'XOF',
  },
  NG: {
    name: 'Nigeria',
    currency: 'NGN',
  },
  NU: {
    name: 'Niue',
    currency: 'NZD',
  },
  NF: {
    name: 'Norfolk Island',
    currency: 'AUD',
  },
  MP: {
    name: 'Northern Mariana Islands',
    currency: 'USD',
  },
  NO: {
    name: 'Norway',
    currency: 'NOK',
  },
  OM: {
    name: 'Oman',
    currency: 'OMR',
  },
  PK: {
    name: 'Pakistan',
    currency: 'PKR',
  },
  PW: {
    name: 'Palau',
    currency: 'USD',
  },
  PA: {
    name: 'Panama',
    currency: 'PAB',
  },
  PG: {
    name: 'Papua New Guinea',
    currency: 'PGK',
  },
  PY: {
    name: 'Paraguay',
    currency: 'PYG',
  },
  PE: {
    name: 'Peru',
    currency: 'PEN',
  },
  PH: {
    name: 'Philippines',
    currency: 'PHP',
  },
  PN: {
    name: 'Pitcairn Islands',
    currency: 'NZD',
  },
  PL: {
    name: 'Poland',
    currency: 'PLN',
  },
  PT: {
    name: 'Portugal',
    currency: 'EUR',
  },
  PR: {
    name: 'Puerto Rico',
    currency: 'USD',
  },
  QA: {
    name: 'Qatar',
    currency: 'QAR',
  },
  RE: {
    name: 'R?union',
    currency: 'EUR',
  },
  RO: {
    name: 'Romania',
    currency: 'ROL',
  },
  RU: {
    name: 'Russia',
    currency: 'RUB',
  },
  RW: {
    name: 'Rwanda',
    currency: 'RWF',
  },
  SH: {
    name: 'Saint Helena',
    currency: 'SHP',
  },
  KN: {
    name: 'Saint Kitts and Nevis',
    currency: 'XCD',
  },
  LC: {
    name: 'Saint Lucia',
    currency: 'XCD',
  },
  PM: {
    name: 'Saint Pierre and Miquelon',
    currency: 'EUR',
  },
  VC: {
    name: 'Saint Vincent and the Grenadines',
    currency: 'XCD',
  },
  WS: {
    name: 'Samoa',
    currency: 'WST',
  },
  SM: {
    name: 'San Marino',
    currency: 'EUR',
  },
  ST: {
    name: 'S?o Tom? and Pr?ncipe',
    currency: 'STD',
  },
  SA: {
    name: 'Saudi Arabia',
    currency: 'SAR',
  },
  SN: {
    name: 'Senegal',
    currency: 'XOF',
  },
  RS: {
    name: 'Serbia',
    currency: '',
  },
  SC: {
    name: 'Seychelles',
    currency: 'SCR',
  },
  SL: {
    name: 'Sierra Leone',
    currency: 'SLL',
  },
  SG: {
    name: 'Singapore',
    currency: 'SGD',
  },
  SK: {
    name: 'Slovakia',
    currency: 'EUR',
  },
  SI: {
    name: 'Slovenia',
    currency: 'EUR',
  },
  SB: {
    name: 'Solomon Islands',
    currency: 'SBD',
  },
  SO: {
    name: 'Somalia',
    currency: 'SOS',
  },
  ZA: {
    name: 'South Africa',
    currency: 'ZAR',
  },
  GS: {
    name: 'South Georgia and the South Sandwich Islands',
    currency: 'GBP',
  },
  ES: {
    name: 'Spain',
    currency: 'EUR',
  },
  LK: {
    name: 'Sri Lanka',
    currency: 'LKR',
  },
  SD: {
    name: 'Sudan',
    currency: 'SDD',
  },
  SR: {
    name: 'Suriname',
    currency: 'SRG',
  },
  SJ: {
    name: 'Svalbard',
    currency: 'NOK',
  },
  SZ: {
    name: 'Swaziland',
    currency: 'SZL',
  },
  SE: {
    name: 'Sweden',
    currency: 'SEK',
  },
  CH: {
    name: 'Switzerland',
    currency: 'CHF',
  },
  SY: {
    name: 'Syria',
    currency: 'SYP',
  },
  TW: {
    name: 'Taiwan',
    currency: 'TWD',
  },
  TJ: {
    name: 'Tajikistan',
    currency: 'TJS',
  },
  TZ: {
    name: 'Tanzania',
    currency: 'TZS',
  },
  TH: {
    name: 'Thailand',
    currency: 'THB',
  },
  TG: {
    name: 'Togo',
    currency: 'XOF',
  },
  TK: {
    name: 'Tokelau',
    currency: 'NZD',
  },
  TO: {
    name: 'Tonga',
    currency: 'TOP',
  },
  TT: {
    name: 'Trinidad and Tobago',
    currency: 'TTD',
  },
  TN: {
    name: 'Tunisia',
    currency: 'TND',
  },
  TR: {
    name: 'Turkey',
    currency: 'TRL',
  },
  TM: {
    name: 'Turkmenistan',
    currency: 'TMM',
  },
  TC: {
    name: 'Turks and Caicos Islands',
    currency: 'USD',
  },
  TV: {
    name: 'Tuvalu',
    currency: 'AUD',
  },
  UG: {
    name: 'Uganda',
    currency: 'UGX',
  },
  UA: {
    name: 'Ukraine',
    currency: 'UAH',
  },
  AE: {
    name: 'United Arab Emirates',
    currency: 'AED',
  },
  GB: {
    name: 'United Kingdom',
    currency: 'GBP',
  },
  US: {
    name: 'United States',
    currency: 'USD',
  },
  UM: {
    name: 'United States Minor Outlying Islands',
    currency: 'USD',
  },
  UY: {
    name: 'Uruguay',
    currency: 'UYU',
  },
  UZ: {
    name: 'Uzbekistan',
    currency: 'UZS',
  },
  VU: {
    name: 'Vanuatu',
    currency: 'VUV',
  },
  VE: {
    name: 'Venezuela',
    currency: 'VEB',
  },
  VN: {
    name: 'Vietnam',
    currency: 'VND',
  },
  VI: {
    name: 'Virgin Islands',
    currency: 'USD',
  },
  WF: {
    name: 'Wallis and Futuna',
    currency: 'XPF',
  },
  EH: {
    name: 'Western Sahara',
    currency: 'MAD',
  },
  YE: {
    name: 'Yemen',
    currency: 'YER',
  },
  YU: {
    name: 'Yugoslavia',
    currency: 'YUM',
  },
  ZM: {
    name: 'Zambia',
    currency: 'ZMK',
  },
  ZW: {
    name: 'Zimbabwe',
    currency: 'ZWD',
  },
  PS: {
    name: 'Palestinian Territory, Occupied',
    currency: '',
  },
  ot: {
    name: 'otro',
    currency: 'otr',
  },
  CW: {
    name: 'Curacao',
    currency: 'ANG',
  },
}

export default {
  getCountries() {
    return Object.freeze(countries)
  },
  getCountry(code: string) {
    return Object.freeze(countries[code])
  },
}
