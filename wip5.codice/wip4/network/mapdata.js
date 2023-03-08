var simplemaps_worldmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#acc797",
    background_transparent: "no",
    border_color: "#acc797",
    popups: "detect",
    
    //State defaults
    state_description: "State description",
    state_color: "#195c4d",
    state_hover_color: "#955663",
    state_url: "",
    border_size: 1.0,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 1,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    label_color: "",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 1,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "hsl(115, 23%, 69%)",
    popup_opacity: 1,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "15px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    AF: {
      name: "Afghanistan",
      url: "https://aspeniaonline.it/twenty-years-in-afghanistan-part-1-how-did-we-get-here/",
      description: "Women can still talk! Please hurry up and do something about it, loser!",
      color: "#9b2a48"
    },
    AO: {
      name: "Angola"
    },
    AL: {
      name: "Albania"
    },
    AE: {
      name: "United Arab Emirates"
    },
    AR: {
      name: "Argentina"
    },
    AM: {
      name: "Armenia"
    },
    AU: {
      name: "Australia",
      description: "Sorry man, this place is already been enslaved by capitalism 🤪!",
      url :"https://en.wikipedia.org/wiki/History_of_Australia",
      color: "#9b2a48"
    },
    AT: {
      name: "Austria"
    },
    AZ: {
      name: "Azerbaijan"
    },
    BI: {
      name: "Burundi"
    },
    BE: {
      name: "Belgium"
    },
    BJ: {
      name: "Benin"
    },
    BF: {
      name: "Burkina Faso"
    },
    BD: {
      name: "Bangladesh"
    },
    BG: {
      name: "Bulgaria"
    },
    BH: {
      name: "Bahrain"
    },
    BA: {
      name: "Bosnia and Herzegovina"
    },
    BY: {
      name: "Belarus"
    },
    BZ: {
      name: "Belize"
    },
    BO: {
      name: "Bolivia"
    },
    BR: {
      name: "Brazil",
      description:"oh no, you can't play here! there is already someone else damaging the forest" ,
      color: "#9b2a48",
      url:"https://www.theguardian.com/environment/2021/aug/20/brazil-amazon-deforestation-report-bolsonaro-climate"
    },
    BN: {
      name: "Brunei Darussalam"
    },
    BT: {
      name: "Bhutan"
    },
    BW: {
      name: "Botswana"
    },
    CF: {
      name: "Central African Republic"
    },
    CA: {
      name: "Canada"
    },
    CH: {
      name: "Switzerland"
    },
    CL: {
      name: "Chile"
    },
    CN: {
      name: "China"
    },
    CI: {
      name: "Côte d'Ivoire"
    },
    CM: {
      name: "Cameroon"
    },
    CD: {
      name: "Democratic Republic of the Congo"
    },
    CG: {
      name: "Republic of Congo",
      name: "Congo: cobalt mines",
      description: "try again another time! for now child labour here is a full time job ",
      color: "#9b2a48",
      url:"https://www.newyorker.com/magazine/2021/05/31/the-dark-side-of-congos-cobalt-rush"
    },
    CO: {
      name: "Colombia"
    },
    CR: {
      name: "Costa Rica"
    },
    CU: {
      name: "Cuba"
    },
    CZ: {
      name: "Czech Republic"
    },
    DE: {
      name: "Germany"
    },
    DJ: {
      name: "Djibouti"
    },
    DK: {
      name: "Denmark"
    },
    DO: {
      name: "Dominican Republic"
    },
    DZ: {
      name: "Algeria",
      color: "#9b2a48",
          url: "https://www.hrw.org/world-report/2020/country-chapters/algeria",
      description: "Now they even want freedom of speech, colonizer, do your job!"
    },
    EC: {
      name: "Ecuador"
    },
    EG: {
      name: "Egypt",
      color: "#9b2a48",
          url: "https://www.hrw.org/world-report/2021/country-chapters/egypt",
      description: "We're actually under a dictature, please, one owner or another..."
    },
    ER: {
      name: "Eritrea"
    },
    EE: {
      name: "Estonia"
    },
    ET: {
      name: "Ethiopia"
    },
    FI: {
      name: "Finland"
    },
    FJ: {
      name: "Fiji"
    },
    GA: {
      name: "Gabon"
    },
    GB: {
      name: "United Kingdom"
    },
    GE: {
      name: "Georgia"
    },
    GH: {
      name: "Ghana"
    },
    GN: {
      name: "Guinea"
    },
    GM: {
      name: "The Gambia"
    },
    GW: {
      name: "Guinea-Bissau"
    },
    GQ: {
      name: "Equatorial Guinea"
    },
    GR: {
      name: "Greece"
    },
    GL: {
      name: "Greenland"
    },
    GT: {
      name: "Guatemala"
    },
    GY: {
      name: "Guyana"
    },
    HN: {
      name: "Honduras"
    },
    HR: {
      name: "Croatia"
    },
    HT: {
      name: "Haiti"
    },
    HU: {
      name: "Hungary"
    },
    ID: {
      name: "Indonesia"
    },
    IN: {
      name: "India",
      name:"The garbage hill",
      description:"Postpone your invasion, the air here makes you unable to breathe",
      color: "#9b2a48",
      url:"https://phys.org/news/2019-06-india-rubbish-mountain-higher-taj.html"
    },
    IE: {
      name: "Ireland"
    },
    IR: {
      name: "Iran"
    },
    IQ: {
      name: "Iraq"
    },
    IS: {
      name: "Iceland"
    },
    IL: {
      name: "Israel",
      name: "Conflitto arabo-israeliano",
      description:"Leave soon, there is war here",
      color: "#9b2a48",
      url:"https://en.wikipedia.org/wiki/Arab%E2%80%93Israeli_conflict"
    },
    IT: {
      name: "Italy",
      description: "Good choice, they're already vulnerable thanks to covid",
      url :"",
      color: "#9b2a48"
    },
    JM: {
      name: "Jamaica"
    },
    JO: {
      name: "Jordan"
    },
    JP: {
      name: "Japan"
    },
    KZ: {
      name: "Kazakhstan"
    },
    KE: {
      name: "Kenya"
    },
    KG: {
      name: "Kyrgyzstan"
    },
    KH: {
      name: "Cambodia"
    },
    KR: {
      name: "Republic of Korea"
    },
    XK: {
      name: "Kosovo"
    },
    KW: {
      name: "Kuwait"
    },
    LA: {
      name: "Lao PDR"
    },
    LB: {
      name: "Lebanon"
    },
    LR: {
      name: "Liberia"
    },
    LY: {
      name: "Libya",
      color: "#9b2a48",
          url: "https://www.hrw.org/world-report/2020/country-chapters/libya#",
      description: "People already run away from here",
    },
    LK: {
      name: "Sri Lanka"
    },
    LS: {
      name: "Lesotho"
    },
    LT: {
      name: "Lithuania"
    },
    LU: {
      name: "Luxembourg"
    },
    LV: {
      name: "Latvia"
    },
    MA: {
      name: "Morocco"
    },
    MD: {
      name: "Moldova"
    },
    MG: {
      name: "Madagascar"
    },
    MX: {
      name: "Mexico"
    },
    MK: {
      name: "Macedonia"
    },
    ML: {
      name: "Mali"
    },
    MM: {
      name: "Myanmar"
    },
    ME: {
      name: "Montenegro"
    },
    MN: {
      name: "Mongolia"
    },
    MZ: {
      name: "Mozambique"
    },
    MR: {
      name: "Mauritania"
    },
    MW: {
      name: "Malawi"
    },
    MY: {
      name: "Malaysia"
    },
    NA: {
      name: "Namibia",
      color:""
    },
    NE: {
      name: "Niger"
    },
    NG: {
      name: "Nigeria",
      description:"try again another time! for now child labour here is a full time job",
      color: "#9b2a48",
      url:"https://it.m.wikipedia.org/wiki/Disastro_ambientale"
    },
    NI: {
      name: "Nicaragua"
    },
    NL: {
      name: "Netherlands"
    },
    NO: {
      name: "Norway"
    },
    NP: {
      name: "Nepal"
    },
    NZ: {
      name: "New Zealand"
    },
    OM: {
      name: "Oman"
    },
    PK: {
      name: "Pakistan"
    },
    PA: {
      name: "Panama"
    },
    PE: {
      name: "Peru"
    },
    PH: {
      name: "Philippines"
    },
    PG: {
      name: "Papua New Guinea"
    },
    PL: {
      name: "Poland"
    },
    KP: {
      name: "Dem. Rep. Korea"
    },
    PT: {
      name: "Portugal"
    },
    PY: {
      name: "Paraguay"
    },
    PS: {
      name: "Palestine",
      name: "Conflitto arabo-israeliano",
      description:"The Israeli-Palestinian Conflict is one of the hotspots of conflict in the Middle East, as part of the Arab-Israeli conflict and the Middle East War. The Israeli-Palestinian conflict cannot be simply summarized as a bilateral conflict between all Jewish Israelis and all Palestinian Arabs. Within the communities on both sides of the dispute, there are individuals and groups calling for the total annihilation of the other side. There are historical roots behind the conflict, including religious, cultural, and ethnic factors, and more importantly, external factors such as the intervention of major powers, which have influenced and intensified each other, making the complexity of the Palestinian-Israeli conflict extraordinary. Among them, the exclusive sovereignty claim of two peoples over the same land is the fundamental cause. The issue of Jewish immigrant settlements and the status of Jerusalem, on the other hand, are serious obstacles on the road to Palestinian-Israeli peace. If these issues are not resolved, the Palestinian-Israeli conflict will not stop, and it will be difficult to achieve real peace in the Middle East.",
      color: "#9b2a48"
    },
    QA: {
      name: "Qatar"
    },
    RO: {
      name: "Romania"
    },
    RU: {
      name: "Russia",
      name:"Chernobyl disaster",
      description:"You can’t play here, the radiation can’t keep creatures alive",
      url:"https://en.wikipedia.org/wiki/Chernobyl_disaster",
      color: "#9b2a48"
    },
    RW: {
      name: "Rwanda"
    },
    EH: {
      name: "Western Sahara"
    },
    SA: {
      name: "Saudi Arabia"
    },
    SD: {
      name: "Sudan",
      description:"protesters here, protesters there, slaves just don't know how to be slaves anymore duh",
      color: "#9b2a48",
      url:"https://www.hrw.org/world-report/2020/country-chapters/sudan"
    },
    SS: {
      name: "South Sudan"
    },
    SN: {
      name: "Senegal"
    },
    SL: {
      name: "Sierra Leone"
    },
    SV: {
      name: "El Salvador"
    },
    RS: {
      name: "Serbia"
    },
    SR: {
      name: "Suriname"
    },
    SK: {
      name: "Slovakia"
    },
    SI: {
      name: "Slovenia"
    },
    SE: {
      name: "Sweden"
    },
    SZ: {
      name: "Swaziland"
    },
    SY: {
      name: "Syria"
    },
    TD: {
      name: "Chad"
    },
    TG: {
      name: "Togo"
    },
    TH: {
      name: "Thailand"
    },
    TJ: {
      name: "Tajikistan"
    },
    TM: {
      name: "Turkmenistan"
    },
    TL: {
      name: "Timor-Leste"
    },
    TN: {
      name: "Tunisia"
    },
    TR: {
      name: "Turkey"
    },
    TW: {
      name: "Taiwan"
    },
    TZ: {
      name: "Tanzania"
    },
    UG: {
      name: "Uganda"
    },
    UA: {
      name: "Ukraine"
    },
    UY: {
      name: "Uruguay"
    },
    US: {
      name: "United States"
    },
    UZ: {
      name: "Uzbekistan"
    },
    VE: {
      name: "Venezuela"
    },
    VN: {
      name: "Vietnam"
    },
    VU: {
      name: "Vanuatu"
    },
    YE: {
      name: "Yemen"
    },
    ZA: {
      name: "South Africa"
    },
    ZM: {
      name: "Zambia"
    },
    ZW: {
      name: "Zimbabwe"
    },
    SO: {
      name: "Somalia"
    },
    GF: {
      name: "France"
    },
    FR: {
      name: "France"
    },
    ES: {
      name: "Spain"
    },
    AW: {
      name: "Aruba"
    },
    AI: {
      name: "Anguilla"
    },
    AD: {
      name: "Andorra"
    },
    AG: {
      name: "Antigua and Barbuda"
    },
    BS: {
      name: "Bahamas"
    },
    BM: {
      name: "Bermuda"
    },
    BB: {
      name: "Barbados"
    },
    KM: {
      name: "Comoros"
    },
    CV: {
      name: "Cape Verde"
    },
    KY: {
      name: "Cayman Islands"
    },
    DM: {
      name: "Dominica"
    },
    FK: {
      name: "Falkland Islands"
    },
    FO: {
      name: "Faeroe Islands"
    },
    GD: {
      name: "Grenada"
    },
    HK: {
      name: "Hong Kong"
    },
    KN: {
      name: "Saint Kitts and Nevis"
    },
    LC: {
      name: "Saint Lucia"
    },
    LI: {
      name: "Liechtenstein"
    },
    MF: {
      name: "Saint Martin (French)"
    },
    MV: {
      name: "Maldives"
    },
    MT: {
      name: "Malta"
    },
    MS: {
      name: "Montserrat"
    },
    MU: {
      name: "Mauritius"
    },
    NC: {
      name: "New Caledonia"
    },
    NR: {
      name: "Nauru"
    },
    PN: {
      name: "Pitcairn Islands"
    },
    PR: {
      name: "Puerto Rico"
    },
    PF: {
      name: "French Polynesia"
    },
    SG: {
      name: "Singapore"
    },
    SB: {
      name: "Solomon Islands"
    },
    ST: {
      name: "São Tomé and Principe"
    },
    SX: {
      name: "Saint Martin (Dutch)"
    },
    SC: {
      name: "Seychelles"
    },
    TC: {
      name: "Turks and Caicos Islands"
    },
    TO: {
      name: "Tonga"
    },
    TT: {
      name: "Trinidad and Tobago"
    },
    VC: {
      name: "Saint Vincent and the Grenadines"
    },
    VG: {
      name: "British Virgin Islands"
    },
    VI: {
      name: "United States Virgin Islands",
      color: "#9b2a48",
          url: "https://www.visitusaita.org/esperienze/i-nativi/",
      description: "What are you waiting for? so much culture to step on and don't forget to bring more sickness with you! Do you wear a ma- whatever..."
    },
    CY: {
      name: "Cyprus"
    },
    RE: {
      name: "Reunion (France)"
    },
    YT: {
      name: "Mayotte (France)"
    },
    MQ: {
      name: "Martinique (France)"
    },
    GP: {
      name: "Guadeloupe (France)"
    },
    CW: {
      name: "Curaco (Netherlands)"
    },
    IC: {
      name: "Canary Islands (Spain)"
    }
  },
  locations: {},
  labels: {},
  legend: {
    entries: []
  },
  regions: {
    "0": {
      name: "North America",
      description: "As they're going to colonize space, it's the perfect time to try and colonize them now!",
      url :"",
      color: "#9b2a48",
      states: [
        "MX",
        "CA",
        "US",
        "GL",
        "BM"
      ]
    },
    "1": {
      name: "South America",
      states: [
        "EC",
        "AR",
        "VE",
        "BR",
        "CO",
        "BO",
        "PE",
        "BZ",
        "CL",
        "CR",
        "CU",
        "DO",
        "SV",
        "GT",
        "GY",
        "GF",
        "HN",
        "NI",
        "PA",
        "PY",
        "PR",
        "SR",
        "UY",
        "JM",
        "HT",
        "BS",
        "FK",
        "AI",
        "AG",
        "AW",
        "BB",
        "VG",
        "KY",
        "DM",
        "MQ",
        "LC",
        "VC",
        "GD",
        "GP",
        "MS",
        "TC",
        "SX",
        "MF",
        "KN",
        "CW"
      ]
    },
    "2": {
      name: "Europe",
      states: [
        "IT",
        "NL",
        "NO",
        "DK",
        "IE",
        "GB",
        "RO",
        "DE",
        "FR",
        "AL",
        "AM",
        "AT",
        "BY",
        "BE",
        "LU",
        "BG",
        "CZ",
        "EE",
        "GE",
        "GR",
        "HU",
        "IS",
        "LV",
        "LT",
        "MD",
        "PL",
        "PT",
        "RS",
        "SI",
        "HR",
        "BA",
        "ME",
        "MK",
        "SK",
        "ES",
        "FI",
        "SE",
        "CH",
        "TR",
        "CY",
        "UA",
        "XK",
        "MT",
        "FO"
      ]
    },
    "3": {
      name: "Africa and the Middle East",
      states: [
        "QA",
        "BH",
        "SA",
        "AE",
        "SY",
        "OM",
        "KW",
        "PK",
        "AZ",
        "AF",
        "IR",
        "IQ",
        "IL",
        "PS",
        "JO",
        "LB",
        "YE",
        "TJ",
        "TM",
        "UZ",
        "KG",
        "NE",
        "AO",
        "EG",
        "TN",
        "GA",
        "DZ",
        "LY",
        "CG",
        "GQ",
        "BJ",
        "BW",
        "BF",
        "BI",
        "CM",
        "CF",
        "TD",
        "CI",
        "CD",
        "DJ",
        "ET",
        "GM",
        "GH",
        "GN",
        "GW",
        "KE",
        "LS",
        "LR",
        "MG",
        "MW",
        "ML",
        "MA",
        "MR",
        "MZ",
        "NA",
        "NG",
        "ER",
        "RW",
        "SN",
        "SL",
        "SO",
        "ZA",
        "SD",
        "SS",
        "SZ",
        "TZ",
        "TG",
        "UG",
        "EH",
        "ZM",
        "ZW",
        "RE",
        "KM",
        "SC",
        "MU",
        "CV",
        "IC",
        "ST",
        "YT"
      ]
    },
    "4": {
      name: "South Asia",
      states: [
        "SG",
        "TW",
        "IN",
        "AU",
        "MY",
        "NP",
        "NZ",
        "TH",
        "BN",
        "JP",
        "VN",
        "LK",
        "SB",
        "FJ",
        "BD",
        "BT",
        "KH",
        "LA",
        "MM",
        "KP",
        "PG",
        "PH",
        "KR",
        "ID",
        "CN",
        "MV",
        "NC",
        "VU",
        "NR"
      ]
    },
    "5": {
      name: "North Asia",
      states: [
        "MN",
        "RU",
        "KZ"
      ]
    }
  },
  data: {
    data: {}
  }
};