/************************************************************ -*- JavaScript -*-
 *
 * (c) 2024 movisda GmbH
 *
 * movisda GmbH
 * Rosenstr. 2
 * 10178 Berlin
 * Germany
 *
 * email:   dev@movisda.io
 * web:     https://movisda.io
 *
 * The software and documentation contained herein are proprietary to and
 * comprise valuable trade secrets of movisda GmbH which intends to preserve.
 *
 * This software may not be used, copied, transmitted, stored, modified,
 * distributed or sold without a written license agreement. This software and
 * information or any other copies thereof may not be made available to any
 * other person.
 *
 ******************************************************************************/

const LAYERS = {
  /* base maps as image */
  images: [
    // {
    //   name: "Tranchot - v. Müffling 1803-1820",
    //   url: "data/maps/tranchot.png",
    //   bounds: [
    //     [50.29068795494675, 7.6328987132876716],
    //     [50.321764254593674, 7.705471469491065],
    //   ],
    //   options: {
    //     age: 1820,
    //   },
    // },

    {
      name: "Saechsische Schweiz 1939",
      url: "data/maps/SaechsischeSchweiz1939_ref.jpg",
      world: {
        file: "data/maps/SaechsischeSchweiz1939_ref.jgw",
        proj: "UTM",
        zone: 33,
        band: "N",
      },
      options: {
        age: 1933,
      },
    },

    {
      name: "Die Saechsich-Boehmische Schweiz",
      url: "data/maps/Die Saechsich-Boehmische Schweiz.jpg",
      world: {
        file: "data/maps/Die Saechsich-Boehmische Schweiz.jgw",
        proj: "UTM",
        zone: 33,
        band: "N",
      },
      options: {
        age: 1879,
      },
    },

    {
      name: "Elbsandsteingebirge",
      url: "data/maps/Elbsandsteingebirge.jpg",
      world: {
        file: "data/maps/Elbsandsteingebirge.jgw",
        proj: "UTM",
        zone: 33,
        band: "N",
      },
      options: {
        age: 1879,
      },
    },

    {
      name: "Schrammsteingebiet",
      url: "data/maps/Schrammsteingebiet.jpg",
      world: {
        file: "data/maps/Schrammsteingebiet.jgw",
        proj: "UTM",
        zone: 33,
        band: "N",
      },
      options: {
        age: 1879,
      },
    },
    {
      name: "Open Street Maps",
      url: "data/maps/Malerweg_OSM.jpg",
      world: {
        file: "data/maps/Malerweg_OSM.jgw",
        proj: "UTM",
        zone: 33,
        band: "N",
      },
      options: {
        age: 2024,
      },
    },


    // {
    //   name: "Preuß. Neuaufnahme 1902",
    //   url: "data/maps/preuss1902.png",
    //   bounds: [
    //     [50.294518434946525, 7.642596372689379],
    //     [50.31635902439836, 7.693803309016072],
    //   ],
    //   options: {
    //     age: 1902,
    //   },
    // },

    // {
    //   // ETRS89 / UTM 32N
    //   name: "TK25 2023",
    //   url: "data/maps/Friedrichssegen_TK25_Uebersicht.jpg",
    //   world: {
    //     file: "data/maps/Friedrichssegen_TK25_Uebersicht.jgw",
    //     proj: "UTM",
    //     zone: 32,
    //     band: "N",
    //   },
    //   options: {
    //     age: 2023,
    //   },
    // },
    // {
    //   name: "Weiler TK25 2024",
    //   url: "data/maps/Weiler_UTM32.jpg",
    //   world: {
    //     file: "data/maps/Weiler_UTM32.jgw",
    //     proj: "UTM",
    //     zone: 32,
    //     band: "N",
    //   },
    //   options: {
    //     age: 2024,
    //   },
    // },
  ],
  // /* OSM Rasterkarten */
  pmtiles: [
    {
      name: "WMSKarte",
      url: "data/maps/WMS.pmtiles",
      options: {
        age: 2024,
      },
    },
  ],
  /* GeoJSON overlays */
  geojson: [
    {
      name: "Touristenroute",
      url: "data/overlays/malerweg.geojson",
      options: {
        age: 1,
      },
    },

    // {
    //   name: "Touristenroute",
    //   url: "data/overlays/Touristenroute.geojson",
    //   options: {
    //     age: 1,
    //   },
    // },

    {
      name: "Tafeln",
      url: "data/overlays/tafeln_pkt.geojson",
      options: {
        age: 2,
      },
    },
    // {
    //   name: "Infopunkte",
    //   url: "data/overlays/Infopunkte.geojson",
    //   options: {
    //     age: 2,
    //   },  
    // },
    // {
    //   name: "PDF Test",
    //   url: "data/overlays/PDFs.geojson",
    //   options: {
    //     age: 3,
    //   },
    // },
    // {
    //   name: "Video Test",
    //   url: "data/overlays/Videos.geojson",
    //   options: {
    //     age: 4,
    //   },
    // },
    // {
    //   name: "Weiler POIs",
    //   url: "data/overlays/Weiler.geojson",
    //   options: {
    //     age: 5,
    //   },
    // },
  ],
};
