// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon

const countryCodesWithImage = [
  "agc",
  "agm",
  "ags",
  "agd",
  "aga",
  "agu",
  "ast",
  "bab",
  "ba",
  "bal",
  "bey",
  "bar",
  "bil",
  "cab",
  "cal",
  "cul",
  "das",
  "fuz",
  "gad",
  "gan",
  "gor",
  "goy",
  "gyg",
  "goyt",
  "hac",
  "xac",
  "xan",
  "xci",
  "xvd",
  "xir",
  "xiz",
  "xud",
  "imi",
  "ism",
  "kal",
  "kur",
  "qax",
  "qaz",
  "qab",
  "qob",
  "qba",
  "qbi",
  "qus",
  "lac",
  "ler",
  "lan",
  "mas",
  "mi",
  "nef",
  "nv",
  "na",
  "ogu",
  "ord",
  "sat",
  "sab",
  "sal",
  "smx",
  "siy",
  "sm",
  "sbn",
  "sah",
  "smi",
  "sak",
  "skr",
  "sar",
  "sr",
  "sus",
  "tar",
  "tov",
  "uca",
  "yar",
  "yev",
  "zaq",
  "zan",
  "zar",
];

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countries: Country[] = [
  {
    name: "Ağcabədi",
    latitude: 40.0489,
    longitude: 47.4502,
    code: "AGC",
  },
  {
    name: "Ağdam",
    latitude: 39.9833,
    longitude: 46.9167,
    code: "AGM",
  },
  {
    name: "Ağdaş",
    latitude: 40.65,
    longitude: 47.4833,
    code: "AGS",
  },
  {
    name: "Ağdərə",
    latitude: 40.2116,
    longitude: 46.8237,
    code: "AGD",
  },
  {
    name: "Ağstafa",
    latitude: 41.1167,
    longitude: 45.45,
    code: "AGA",
  },
  {
    name: "Ağsu",
    latitude: 40.5708,
    longitude: 48.3928,
    code: "AGU",
  },
  {
    name: "Astara",
    latitude: 38.4688,
    longitude: 48.8728,
    code: "AST",
  },
  {
    name: "Babək",
    latitude: 39.1111,
    longitude: 45.4114,
    code: "BAB",
  },
  {
    name: "BakI",
    latitude: 40.3667,
    longitude: 49.8352,
    code: "BA",
  },
  {
    name: "Balakən",
    latitude: 41.7233,
    longitude: 46.3919,
    code: "BAL",
  },
  {
    name: "Beyləqan",
    latitude: 39.7692,
    longitude: 47.6156,
    code: "BEY",
  },
  {
    name: "Bərdə",
    latitude: 40.3831,
    longitude: 47.1186,
    code: "BAR",
  },
  {
    name: "Biləsuvar",
    latitude: 39.4481,
    longitude: 48.5428,
    code: "BIL",
  },
  {
    name: "CəbrayIl",
    latitude: 39.4,
    longitude: 47.0261,
    code: "CAB",
  },
  {
    name: "Cəlilabad",
    latitude: 39.2042,
    longitude: 48.4958,
    code: "CAL",
  },
  {
    name: "Culfa",
    latitude: 38.9558,
    longitude: 45.6308,
    code: "CUL",
  },
  {
    name: "Daşkəsən",
    latitude: 40.5181,
    longitude: 46.0828,
    code: "DAS",
  },
  {
    name: "Füzuli",
    latitude: 39.6003,
    longitude: 47.1431,
    code: "FUZ",
  },
  {
    name: "Gədəbəy",
    latitude: 40.5656,
    longitude: 45.8161,
    code: "GAD",
  },
  {
    name: "Gəncə",
    latitude: 40.6828,
    longitude: 46.3606,
    code: "GAN",
  },
  {
    name: "Goranboy",
    latitude: 40.61,
    longitude: 46.7872,
    code: "GOR",
  },
  {
    name: "Göyçay",
    latitude: 40.6553,
    longitude: 47.7389,
    code: "GOY",
  },
  {
    name: "Göygöl",
    latitude: 40.6553,
    longitude: 47.7389,
    code: "GYG",
  },
  {
    name: "Göytəpə",
    latitude: 39.1171,
    longitude: 48.5844,
    code: "GOYT",
  },
  {
    name: "HacIqabul",
    latitude: 40.0375,
    longitude: 48.935,
    code: "HAC",
  },
  {
    name: "Xaçmaz",
    latitude: 41.4681,
    longitude: 48.8028,
    code: "XAC",
  },
  {
    name: "Xankəndi",
    latitude: 39.8153,
    longitude: 46.7519,
    code: "XAN",
  },
  {
    name: "XocalI",
    latitude: 39.9111,
    longitude: 46.7892,
    code: "XCI",
  },
  {
    name: "Xocavənd",
    latitude: 39.795,
    longitude: 47.1117,
    code: "XVD",
  },
  {
    name: "XIrdalan",
    latitude: 40.4486,
    longitude: 49.7564,
    code: "XIR",
  },
  {
    name: "XIZI",
    latitude: 40.9111,
    longitude: 49.0694,
    code: "XIZ",
  },
  {
    name: "Xudat",
    latitude: 41.6253,
    longitude: 48.6764,
    code: "XUD",
  },
  {
    name: "İmişli",
    latitude: 39.8697,
    longitude: 48.06,
    code: "IMI",
  },
  {
    name: "İsmayIllI",
    latitude: 40.7839,
    longitude: 48.1439,
    code: "ISM",
  },
  {
    name: "Kəlbəcər",
    latitude: 40.1098,
    longitude: 46.0445,
    code: "KAL",
  },
  {
    name: "Kürdəmir",
    latitude: 40.3383,
    longitude: 48.1608,
    code: "KUR",
  },
  {
    name: "Qax",
    latitude: 41.4194,
    longitude: 46.9181,
    code: "QAX",
  },
  {
    name: "Qazax",
    latitude: 41.0925,
    longitude: 45.3656,
    code: "QAZ",
  },
  {
    name: "Qəbələ",
    latitude: 40.9825,
    longitude: 47.8491,
    code: "QAB",
  },
  {
    name: "Qobustan",
    latitude: 40.5333,
    longitude: 48.9333,
    code: "QOB",
  },
  {
    name: "Quba",
    latitude: 41.3653,
    longitude: 48.5264,
    code: "QBA",
  },
  {
    name: "QubadlI",
    latitude: 39.3439,
    longitude: 46.5797,
    code: "QBI",
  },
  {
    name: "Qusar",
    latitude: 41.4219,
    longitude: 48.4214,
    code: "QUS",
  },
  {
    name: "LaçIn",
    latitude: 39.6408,
    longitude: 46.5469,
    code: "LAC",
  },
  {
    name: "Lerik",
    latitude: 38.7753,
    longitude: 48.4153,
    code: "LER",
  },
  {
    name: "Lənkəran",
    latitude: 38.7536,
    longitude: 48.8511,
    code: "LAN",
  },
  {
    name: "MasallI",
    latitude: 39.0183,
    longitude: 48.6669,
    code: "MAS",
  },
  {
    name: "Mingəçevir",
    latitude: 40.77,
    longitude: 47.0489,
    code: "MI",
  },
  {
    name: "Naftalan",
    latitude: 40.5058,
    longitude: 46.8192,
    code: "NEF",
  },
  {
    name: "NaxçIvan",
    latitude: 39.2092,
    longitude: 45.4122,
    code: "NV",
  },
  {
    name: "Neftçala",
    latitude: 39.3791,
    longitude: 49.2486,
    code: "NA",
  },
  {
    name: "Oğuz",
    latitude: 41.0714,
    longitude: 47.4653,
    code: "OGU",
  },
  {
    name: "Ordubad",
    latitude: 38.9047,
    longitude: 46.0231,
    code: "ORD",
  },
  {
    name: "SaatlI",
    latitude: 39.9311,
    longitude: 48.3697,
    code: "SAT",
  },
  {
    name: "Sabirabad",
    latitude: 40.0053,
    longitude: 48.4719,
    code: "SAB",
  },
  {
    name: "Salyan",
    latitude: 39.5968,
    longitude: 48.9837,
    code: "SAL",
  },
  {
    name: "Samux",
    latitude: 40.7649,
    longitude: 46.4087,
    code: "SMX",
  },
  {
    name: "Siyəzən",
    latitude: 41.0783,
    longitude: 49.1061,
    code: "SIY",
  },
  {
    name: "SumqayIt",
    latitude: 40.5917,
    longitude: 49.6397,
    code: "SM",
  },
  {
    name: "Şabran",
    latitude: 41.216,
    longitude: 48.9946,
    code: "SBN",
  },
  {
    name: "Şahbuz",
    latitude: 39.4072,
    longitude: 45.5739,
    code: "SAH",
  },
  {
    name: "ŞamaxI",
    latitude: 40.6339,
    longitude: 48.6392,
    code: "SMI",
  },
  {
    name: "Şəki",
    latitude: 41.1919,
    longitude: 47.1706,
    code: "SAK",
  },
  {
    name: "Şəmkir",
    latitude: 40.8564,
    longitude: 46.0172,
    code: "SKR",
  },
  {
    name: "Şərur",
    latitude: 39.5544,
    longitude: 44.9826,
    code: "SAR",
  },
  {
    name: "Şirvan",
    latitude: 39.9319,
    longitude: 48.9203,
    code: "SR",
  },
  {
    name: "Şuşa",
    latitude: 39.75,
    longitude: 46.75,
    code: "SUS",
  },
  {
    name: "Tərtər",
    latitude: 40.3353,
    longitude: 46.9303,
    code: "TAR",
  },
  {
    name: "Tovuz",
    latitude: 40.9864,
    longitude: 45.6275,
    code: "TOV",
  },
  {
    name: "Ucar",
    latitude: 40.5121,
    longitude: 47.6519,
    code: "UCA",
  },
  {
    name: "YardIMLI",
    latitude: 38.9206,
    longitude: 48.2372,
    code: "YAR",
  },
  {
    name: "Yevlax",
    latitude: 40.6172,
    longitude: 47.15,
    code: "YEV",
  },
  {
    name: "Zaqatala",
    latitude: 41.6336,
    longitude: 46.6433,
    code: "ZAQ",
  },
  {
    name: "Zəngilan",
    latitude: 39.0857,
    longitude: 46.6525,
    code: "ZAN",
  },
  {
    name: "Zərdab",
    latitude: 40.2111,
    longitude: 47.7108,
    code: "ZAR",
  },
];

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

export function getCountryName(language: string, country: Country) {
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  const result = countryName.toLowerCase();
  console.log(result);
  return result;
}
