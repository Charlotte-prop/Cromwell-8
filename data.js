var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance-hall",
      "name": "Entrance Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.991752478064834,
        "pitch": 0.3335697025557316,
        "fov": 1.3591912368623837
      },
      "linkHotspots": [
        {
          "yaw": 1.3262946458326255,
          "pitch": 0.3808218318370784,
          "rotation": 0,
          "target": "1-loungekitchen"
        },
        {
          "yaw": -3.0666497608644985,
          "pitch": 0.43013141348735573,
          "rotation": 0,
          "target": "4-upstairs-hall"
        },
        {
          "yaw": -1.7341368885994228,
          "pitch": 0.5247595962490799,
          "rotation": 4.71238898038469,
          "target": "2-bathroom"
        },
        {
          "yaw": -1.7174706405794176,
          "pitch": 0.09322870585961773,
          "rotation": 0,
          "target": "3-bedroom-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7144357738425144,
          "pitch": 0.1950898815308637,
          "title": "cupboard",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-loungekitchen",
      "name": "Lounge/kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17387991334718222,
          "pitch": 0.3000942437199505,
          "rotation": 0,
          "target": "0-entrance-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6050451231212115,
          "pitch": 0.029460255943519087,
          "title": "Inbuilt fridge-freezer",
          "text": "Text"
        },
        {
          "yaw": -1.2548372707609694,
          "pitch": 0.41846062787031535,
          "title": "Inbuilt dishwasher",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -3.0716882667576755,
        "pitch": 0.707606173571774,
        "fov": 1.3591912368623837
      },
      "linkHotspots": [
        {
          "yaw": -0.0690921953499064,
          "pitch": 0.13877337692907865,
          "rotation": 0,
          "target": "0-entrance-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.779581279599727,
          "pitch": -0.03824120885840543,
          "title": "Cupboard with electric boiler",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.970504672681617,
        "pitch": 0.12582669306829786,
        "fov": 1.3591912368623837
      },
      "linkHotspots": [
        {
          "yaw": -0.5603553852747716,
          "pitch": 0.42225668272552497,
          "rotation": 0,
          "target": "0-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-upstairs-hall",
      "name": "Upstairs Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -3.0318871139024672,
        "pitch": -0.00037505028655004935,
        "fov": 1.3591912368623837
      },
      "linkHotspots": [
        {
          "yaw": -0.20308946288842833,
          "pitch": 0.7298146550556623,
          "rotation": 0,
          "target": "0-entrance-hall"
        },
        {
          "yaw": 1.4809303274124925,
          "pitch": 0.27281384543857357,
          "rotation": 0,
          "target": "5-bedroom-2"
        },
        {
          "yaw": -1.4818249155549221,
          "pitch": 0.25519780975449535,
          "rotation": 0,
          "target": "6-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 3.0990896055278263,
        "pitch": 0.14500663445239503,
        "fov": 1.3591912368623837
      },
      "linkHotspots": [
        {
          "yaw": 0.558018604173192,
          "pitch": 0.12653207078222728,
          "rotation": 0,
          "target": "4-upstairs-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 3.0424933840965203,
        "pitch": 0.10894020808566118,
        "fov": 1.3591912368623837
      },
      "linkHotspots": [
        {
          "yaw": -1.0220645018327161,
          "pitch": 0.1589254176737125,
          "rotation": 0,
          "target": "4-upstairs-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "8 Cromwell Building",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
