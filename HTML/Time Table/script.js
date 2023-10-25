

//#region SUBJECTS DATA

// Energetsko strojništvo
const EMEPS = {
    name: 'Eksperimentalno modeliranje v EPS',
    abbreviation: 'EMEPS',
    direction: 'Energetsko strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '12:00',
        timeEnd: '14:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SI-67A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'monday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SI-67A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'tuesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SI-67A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'wednesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SI-67A'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'SI-67A'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SI-67A'
        }
    },
    bgColor: '#6aff00'
};
const NPZ = {
    name: 'Napredni procesi zgorevanja',
    abbreviation: 'NPZ',
    direction: 'Energetsko strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'DS-P1'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SK-15'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SK-15'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'SK-15'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SK-15'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SK-15'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'friday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SK-15'
        }
    },
    bgColor: '#00ffd0'
};
const ES = {
    name: 'Energetski sistemi',
    abbreviation: 'ES',
    direction: 'Energetsko strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'IV/3B'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SI-60A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'monday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SI-60A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'monday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SI-60A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'tuesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SI-60A'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'tuesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SI-60A'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SI-60A'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SI-60A'
        },
        S8: {
            canShow: true,
            type: 'VL',
            group: 'S8',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SI-60A'
        }
    },
    bgColor: '#00ffd0'
};
// Procesno strojništvo
const TP = {
    name: 'Transportni pojavi',
    abbreviation: 'TP',
    direction: 'Procesno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '12:00',
        timeEnd: '14:00',
        classroom: 'III/4'
    },
    exercises: {
        VPS1: {
            canShow: true,
            type: 'VP',
            group: 'S1',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/2'
        },
        VPS2: {
            canShow: true,
            type: 'VP',
            group: 'S2',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'K-1A-I'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'K-1A-I'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'tuesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'K-1A-I'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'tuesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'K-1A-I'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'K-1A-I'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'K-1A-I'
        }
    },
    bgColor: '#06f'
};
const TZ = {
    name: 'Termodinamika zmesi',
    abbreviation: 'TZ',
    direction: 'Procesno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/4'
    },
    exercises: {
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'K-9A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'K-9A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'K-9A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'K-9A'
        }
    },
    bgColor: 'rgb(255,0,255)'
};
const ST = {
    name: 'Solarne tehnologije',
    abbreviation: 'ST',
    direction: 'Procesno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'III/4'
    },
    exercises: {
        VPS1: {
            canShow: true,
            type: 'VP',
            group: 'S1',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'III/4'
        },
        VPS2: {
            canShow: true,
            type: 'VP',
            group: 'S2',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'DS-N3'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'DS-N3'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'DS-N3'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'DS-N3'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'DS-N3'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'monday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'DS-N3'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'monday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'DS-N3'
        },
        S8: {
            canShow: true,
            type: 'VL',
            group: 'S8',
            day: 'friday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'DS-N3'
        },
    },
    bgColor: '#fe0'
};
// Konstruiranje
const KT = {
    name: 'Konstrukcijske tehnike',
    abbreviation: 'KT',
    direction: 'Konstruiranje',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/6'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/6'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'III/6'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'III/6'
        }
    },
    bgColor: '#00ffd0'
};
const IPK = {
    name: 'Inženiring površin in kontaktov',
    abbreviation: 'IPK',
    direction: 'Konstruiranje',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'TiNT 1'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'tuesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'TiNT 1'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'tuesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'TiNT 1'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'wednesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'TiNT 1'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'TiNT 1'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'TiNT 1'
        }
    },
    bgColor: '#00ffd0'
};
const KNS = {
    name: 'Konstruiranje naprednih sistemov',
    abbreviation: 'KNS',
    direction: 'Konstruiranje',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'II/5'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'II/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'IV/6'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'IV/6'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'IV/6'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'IV/6'
        }
    },
    bgColor: '#fe0'
};
// Mehanika
const VT = {
    name: 'Višja trdnost',
    abbreviation: 'VT',
    direction: 'Mehanika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'II/5'
    },
    exercises: {
        VPS1: {
            canShow: true,
            type: 'VP',
            group: 'S1',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/2'
        },
        VPS2: {
            canShow: true,
            type: 'VP',
            group: 'S2',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'I/7'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'I/7'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'wednesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'I/7'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'wednesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'I/7'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'I/7'
        }
    },
    bgColor: '#00b2ff'
};
const VD = {
    name: 'Višja dinamika',
    abbreviation: 'VD',
    direction: 'Mehanika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '12:00',
        timeEnd: '14:00',
        classroom: 'III/4'
    },
    exercises: {
        VPS1: {
            canShow: true,
            type: 'VP',
            group: 'S1',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'IV/3A'
        },
        VPS2: {
            canShow: true,
            type: 'VP',
            group: 'S2',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'P-17C'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'P-17C'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'monday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'P-17C'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'monday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'P-17C'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'P-17C'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'wednesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'P-17C'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'P-17C'
        },
        S8: {
            canShow: true,
            type: 'VL',
            group: 'S8',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'P-17C'
        },
        S9: {
            canShow: true,
            type: 'VL',
            group: 'S9',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'P-17C'
        }
    },
    bgColor: '#00ffd0'
};
const MKE = {
    name: 'Mehanika konstrukcijskih elementov',
    abbreviation: 'MKE',
    direction: 'Mehanika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'III/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'I/4'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'tuesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'I/4'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'tuesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'I/4'
        }
    },
    bgColor: '#00ffd0'
};
// Proizvodno strojništvo
const MT = {
    name: 'Mikroizdelovalne tehnologije',
    abbreviation: 'MT',
    direction: 'Proizvodno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'wednesday',
        timeStart: '10:00',
        timeEnd: '12:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/3A'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SP-39'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'tuesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SP-39'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'monday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SP-39'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SP-39'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SP-39'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'tuesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SP-39'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'tuesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SP-39'
        },
    },
    bgColor: '#00b2ff'
};
const NOP = {
    name: 'Napredni odrezovalni procesi',
    abbreviation: 'NOP',
    direction: 'Proizvodno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '12:00',
        timeEnd: '14:00',
        classroom: 'II/5'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SP-DL-1'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'tuesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SP-DL-1'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SP-DL-1'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'monday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SP-DL-1'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'monday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SP-DL-1'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SP-DL-1'
        }
    },
    bgColor: '#00ffd0'
};
const TO = {
    name: 'Toplotna obdelava',
    abbreviation: 'TO',
    direction: 'Proizvodno strojništvo',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/2'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'III/4'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SII-88'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'wednesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SII-88'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SII-88'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SII-88'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'wednesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SII-88'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'wednesday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SII-88'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'wednesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SII-88'
        },
        S8: {
            canShow: true,
            type: 'VL',
            group: 'S8',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00',
            classroom: 'SII-88'
        }
    },
    bgColor: '#00ffd0'
};
// Mehatronika in laserska tehnika
const MK = {
    name: 'Mikroprocesorska krmilja',
    abbreviation: 'MK',
    direction: 'Mehatronika in laserska tehnika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'tuesday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'III/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '14:00',
            timeEnd: '16:00',
            classroom: 'SP-46A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'tuesday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SP-46A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'tuesday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SP-46A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'tuesday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SP-46A'
        }
    },
    bgColor: '#d0ff00'
};
const RS = {
    name: 'Robotski sistemi',
    abbreviation: 'RS',
    direction: 'Mehatronika in laserska tehnika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'wednesday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'III/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'friday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SP-45A'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'friday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SP-45A'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'friday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SP-45A'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'tuesday',
            timeStart: '16:00',
            timeEnd: '18:00',
            classroom: 'SP-45A'
        }
    },
    bgColor: '#ff9d00'
};
const PAP = {
    name: 'Programski algoritmi in protokoli',
    abbreviation: 'PAP',
    direction: 'Mehatronika in laserska tehnika',
    canShow: false,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '8:00',
        timeEnd: '10:00',
        classroom: 'III/4'
    },
    exercises: {
        VP: {
            canShow: true,
            type: 'VP',
            group: '',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'III/2'
        },
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00',
            classroom: 'SII-82'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00',
            classroom: 'SII-82'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00',
            classroom: 'SII-82'
        }
    },
    bgColor: '#6aff00'
};
//#endregion

// Creates directions buttons
function CreateDirectionButtons(directions, directionColors){
    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        let directionButton = document.createElement('button');
        directionButton.classList.add('direction-button');
        directionButton.innerHTML = direction;
        let color = directionColors[i];
        directionButton.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
        directionButton.addEventListener('click', function(){
            if(directionButton.classList.contains('active-direction-button')){
                directionButton.classList.remove('active-direction-button');
                ToggleDirectionSubjects(directionButton, direction, false);
            }
            else{
                directionButton.classList.add('active-direction-button');
                ToggleDirectionSubjects(directionButton, direction, true);
            }
        })
        document.getElementById('direction-selector').appendChild(directionButton);
    }
}
// Toggle directions buttons to show/hide direction subjects
function ToggleDirectionSubjects(directionButton, direction, isActive){
    let subjectSelects = document.querySelectorAll('.subject-select');
    subjectSelects.forEach(subjectSelect => {
        let subjectDirection = subjectSelect.firstChild.innerHTML;
        if(subjectDirection === direction){
            if(isActive === true){
                document.getElementById('subject-selector').removeChild(subjectSelect);
                document.getElementById('subject-selector').prepend(subjectSelect);
            }
            let subjectToggleButton = subjectSelect.getElementsByTagName('div')[1].getElementsByTagName('div')[1].getElementsByTagName('button')[1];
            
            if(isActive){
                if(!subjectToggleButton.classList.contains('active-button')){
                    subjectToggleButton.click();
                }
            }
            else if(!isActive){
                if(subjectToggleButton.classList.contains('active-button')){
                    subjectToggleButton.click();
                }
            }
        }
    });
}
// Creates subject select to toggle subject/exercises
function CreateSubjectSelect(subject){
    // Create subject select menu in subject selector

    let subjectSelect = document.createElement('div');
    subjectSelect.classList.add('subject-select');
    subjectSelect.setAttribute('id', `${subject.name}`);
    subjectSelect.style.backgroundColor = subject.bgColor;
    
    let direction = document.createElement('div');
    direction.classList.add('subject-direction');
    direction.innerHTML = subject.direction;

    let subjectTitleToggle = document.createElement('div');
    subjectTitleToggle.classList.add('subject-title-toggle');
    
    let subjectTitle = document.createElement('div');
    subjectTitle.classList.add('subject-title');
    subjectTitle.innerHTML = subject.name;
    
    let subjectToggleButtons = document.createElement('div');
    subjectToggleButtons.classList.add('subject-toggle-buttons');

    let pinButton = document.createElement('button');
    pinButton.classList.add('subject-pin-button');
    //pinButton.innerHTML = '+';
    pinButton.addEventListener('click', function(){
        
            
        document.getElementById('subject-selector').removeChild(subjectSelect);
        document.getElementById('subject-selector').prepend(subjectSelect);
        
    })

    let flagIcon = document.createElement('img');
    flagIcon.src = 'Icons/flag-regular.svg';

    let subjectToggleButton = document.createElement('button');
    subjectToggleButton.classList.add('subject-toggle-button');
    subjectToggleButton.setAttribute('id', `${subject.abbreviation}-button`);
    subjectToggleButton.innerHTML = 'X';
    if(subject.canShow === true){
        subjectToggleButton.classList.add('active-button');
    };
    subjectToggleButton.addEventListener('click', function(){
        ToggleButton(subjectToggleButton, subject);
    });
    /*
    let subjectColorInput = document.createElement('input');
    subjectColorInput.classList.add('subject-color-input');
    subjectColorInput.setAttribute('id', `${subject.abbreviation}-color-picker`);
    subjectColorInput.type = 'color';
    subjectColorInput.addEventListener('input', UpdateAll)
    */
    let subjectGroupToggle = document.createElement('div');
    subjectGroupToggle.classList.add('subject-group-toggle');

    subjectTitleToggle.appendChild(subjectTitle);
    pinButton.appendChild(flagIcon);
    subjectToggleButtons.appendChild(pinButton);
    subjectToggleButtons.appendChild(subjectToggleButton);
    subjectTitleToggle.appendChild(subjectToggleButtons);
    subjectSelect.appendChild(direction);
    subjectSelect.appendChild(subjectTitleToggle);
    //subjectSelect.appendChild(subjectColorInput);
    subjectSelect.appendChild(subjectGroupToggle);

    let exercises = subject.exercises;
    for (const exerciseKey in exercises){
        if (exercises.hasOwnProperty(exerciseKey)) {
            let exercise = exercises[exerciseKey];
            let exerciseButton = document.createElement('button');
            exerciseButton.classList.add('subject-group-toggle-button');
            exerciseButton.setAttribute('id', `${subject.abbreviation}-${exercise.group}-button`);
            if(exercise.type === 'VP'){
                exerciseButton.innerHTML = `${exercise.type}${exercise.group}`;
            }
            else{
                exerciseButton.innerHTML = exercise.group;
            }
            if(exercise.canShow === true){
                exerciseButton.classList.add('active-button');
            }
            exerciseButton.addEventListener('click', function(){
                ToggleButton(exerciseButton, exercise);
            });
            subjectGroupToggle.appendChild(exerciseButton);
        };
    };
    document.getElementById('subject-selector').appendChild(subjectSelect);
};
// Toggles button active/inactive
function ToggleButton(button, exercise){
    let canShow = exercise.canShow;
    if(canShow === true){
        exercise.canShow = false;
        button.classList.remove('active-button');
    }
    else if(canShow === false){
        exercise.canShow = true
        button.classList.add('active-button');
    }
    
}

// Define all directions, creates colors and creates direction buttons
const directions = ['Energetsko strojništvo', 'Procesno strojništvo', 'Konstruiranje', 'Mehanika', 'Proizvodno strojništvo', 'Mehatronika in laserska tehnika'];
let directionColors = CreateMultipleColors(directions.length);
CreateDirectionButtons(directions, directionColors);

// Define all subjects, creates colors and creates subject selects
let allSubjects = [EMEPS, NPZ, ES, TP, TZ, ST, KT, IPK, KNS, VT, VD, MKE, MT, NOP, TO, MK, RS, PAP];
let subjectColors = CreateMultipleColors(allSubjects.length);
let index = 0;
allSubjects.forEach(subject => {
    const color = subjectColors[index];
    subject.bgColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    index ++;
    CreateSubjectSelect(subject)
});

// Outputs array of equally spaced colors
function CreateMultipleColors(number){
    let colors = [];
    for (let i = 1; i <= number; i++) {
        let h = (i / number);
        let s;
        if(i % 2 === 0){
            s = 0.8;
        }
        else{
            s = 0.3;
        }
        let v = 1;
        let color = HSVtoRGB(h,s,v);
        colors.push(color);
    }
    return colors;
}
// Converts HSV to RGB
function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
// Gets all buttons on page and adds event on click to update all
let allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.addEventListener('click', function(){
        UpdateAll();
    })
});


UpdateAll();



function UpdateAll(){
    let selectedSubjects = FindSelectedSubjects(allSubjects);
    let lessonsForEachDay = SortLessonsByDay(selectedSubjects);
    AddLessonsToTimetable(lessonsForEachDay);
}
// Gets only selected subjects
function FindSelectedSubjects(allSubjects){
    let selectedSubjects = [];
    allSubjects.forEach(subject => {
        if(subject.canShow === true){
            selectedSubjects.push(subject);
        }
    });
    //console.log("FindSelectedSubject: Done")
    return selectedSubjects;
}
// Sorts lessons for each day (monday - friday)
function SortLessonsByDay(selectedSubjects){
    let mondayLessons = [];
    let tuesdayLessons = [];
    let wednesdayLessons = [];
    let thursdayLessons = [];
    let fridayLessons = [];

    selectedSubjects.forEach(subject => {
        // Sort lesson
        let abbreviation = subject.abbreviation;
        let title = subject.name;
        let lecture = subject.lecture;
        let type = lecture.type;
        let day = lecture.day;
        let timeStart = lecture.timeStart;
        let timeEnd = lecture.timeEnd;
        let classroom = lecture.classroom;
        let bgColor = subject.bgColor;
        let lectureArray = [abbreviation, title, type, '', timeStart, timeEnd, classroom, day, bgColor];
        switch (day) {
            case 'monday':
                mondayLessons.push(lectureArray)
                break;
            case 'tuesday':
                tuesdayLessons.push(lectureArray)
                break;
            case 'wednesday':
                wednesdayLessons.push(lectureArray)
                break;
            case 'thursday':
                thursdayLessons.push(lectureArray)
                break;
            case 'friday':
                fridayLessons.push(lectureArray)
                break;
            default:
                break;
        }

        let exercises = subject.exercises;
        for (const exerciseKey in exercises){
            if (exercises.hasOwnProperty(exerciseKey)) {
                let exercise = exercises[exerciseKey];
                if(exercise.canShow === false) continue;
                let type = exercise.type;
                let group = exercise.group;
                let day = exercise.day;
                let timeStart = exercise.timeStart;
                let timeEnd = exercise.timeEnd;
                let classroom = exercise.classroom;
                let exerciseArray = [abbreviation, title, type, group, timeStart, timeEnd, classroom, day, bgColor];
                switch (day) {
                    case 'monday':
                        mondayLessons.push(exerciseArray)
                        break;
                    case 'tuesday':
                        tuesdayLessons.push(exerciseArray)
                        break;
                    case 'wednesday':
                        wednesdayLessons.push(exerciseArray)
                        break;
                    case 'thursday':
                        thursdayLessons.push(exerciseArray)
                        break;
                    case 'friday':
                        fridayLessons.push(exerciseArray)
                        break;
                    default:
                        break;
                }
            }
        }
    });

    //console.log('SortLessonsByDay: done')
    let lessonsByDay = [mondayLessons,tuesdayLessons,wednesdayLessons,thursdayLessons,fridayLessons]
    return lessonsByDay;
}
// Adds lessons to timetable
function AddLessonsToTimetable(lessonsByDay){
    // Removes all children of Entries
    if(document.getElementById('entries') != null){
        let entries = document.getElementById('entries');
        while (entries.firstChild) {
            entries.removeChild(entries.firstChild);
        }
    }
    lessonsByDay.forEach(lessonsForDay => {
        let columns = ControlOverlapping(lessonsForDay)
        AddLessonsByDay(columns);
        /*columns.forEach(column => {
            AddLessonsByDay(column);
        });*/
    });
    //console.log('AddLessonsToTimetable: done')
}
// INPUT - LESSONS FOR ONE DAY / RETURNS - ARRAY [[COL1],[COL2],...]
function ControlOverlapping(lessons){
    let col1 = []
    let col2 = []
    let col3 = []
    let col4 = []
    let col5 = []
    let col6 = []
    let col7 = []
    let col8 = []
    let col9 = []
    let col10 = []
    let columns = [col1, col2, col3, col4, col5, col6, col7, col8, col9, col10]
    lessons.forEach(lesson => {
        let lessonStart = ConvertTime(lesson[4])
        let lessonEnd = ConvertTime(lesson[5])
        let isPlaced = false;
        for (let index = 0; index < columns.length; index++) {
            const column = columns[index];
            
            if(column.length == 0){
                column.push(lesson)
                isPlaced = true
                break;
            }
            let canPlace = true;

            for (let j = 0; j < column.length; j++) {
                const colLesson = column[j];
                let colLessonStart = ConvertTime(colLesson[4])
                let colLessonEnd = ConvertTime(colLesson[5])
                
                if(lessonStart == colLessonStart || lessonEnd == colLessonEnd){
                    canPlace = false
                    break
                }
                if(lessonStart > colLessonStart && lessonStart < colLessonEnd){
                    canPlace = false
                    break
                }
                if(lessonEnd > colLessonStart && lessonEnd < colLessonEnd){
                    canPlace = false
                    break
                }
            }
            if(canPlace){
                column.push(lesson)
                break
            }
        }
        
    });
    
    for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        if(col.length == 0){
            columns.splice(i)
        }
        
    }
    return columns
}
// INPUT - array of lessons for one day [[COL1],[COL2],[],[]] - DAY
function AddLessonsByDay(columnOfLessonsByDay){
    let numberOfColumns = columnOfLessonsByDay.length;
    for (let i = 0; i < columnOfLessonsByDay.length; i++) {
        const column = columnOfLessonsByDay[i];
        for (let j = 0; j < column.length; j++) {
            const lesson = column[j];
            AddLessonToTimetable(lesson, i, numberOfColumns)
        }
    }
}
//
function AddLessonToTimetable(lesson, offsetXMultiplier, numberOfColumns){
    let abbreviation = lesson[0];
    let title = lesson[1];
    let type = lesson[2];
    let group = lesson[3];
    let time_start = lesson[4];
    let time_end = lesson[5];
    let classroom = lesson[6];
    let day = lesson[7];
    let bg_color = lesson[8];

    //#region CREATE DIVS
    let entry_box = document.createElement('div');
    entry_box.classList.add('entry-box');
        
    let entry = document.createElement('div');
    entry.classList.add('entry');
        
    let subject_title_type_group = document.createElement('div');
    subject_title_type_group.classList.add('subject-title-type-group');
        
    let subject_title = document.createElement('div');
    subject_title.classList.add('subject-title');
    subject_title.innerHTML = title;
        
    let subject_type = document.createElement('div');
    subject_type.classList.add('subject-type');
    subject_type.innerHTML = type;

    let subject_group = document.createElement('div');
    subject_group.classList.add('subject-group');
    subject_group.innerHTML = group;
        
    let subject_time = document.createElement('div');
    subject_time.classList.add('subject-time');
    subject_time.innerHTML = `${time_start}-${time_end}`;
        
    let subject_classroom = document.createElement('div');
    subject_classroom.classList.add('subject-classroom');
    subject_classroom.innerHTML = classroom;
    //#endregion

    //#region APPEND CHILDREN
    subject_title_type_group.appendChild(subject_title);
    subject_title_type_group.appendChild(subject_type);
    subject_title_type_group.appendChild(subject_group);

    entry.appendChild(subject_title_type_group);
    entry.appendChild(subject_time);
    entry.appendChild(subject_classroom);
    entry_box.appendChild(entry);
        
    let entries = document.getElementById('entries');
    entries.appendChild(entry_box);
    //#endregion

    //#region CALCULATE POSITION
    let xGap = 0.2;
    let yGap = 0.3;

    let baseWidth = 20;
    let columnWidth = (baseWidth / numberOfColumns);
    let width =  columnWidth - xGap * 2;
    let left;
    switch (day) {
        case 'monday':
            left = 0;
            break;
        case 'tuesday':
            left = 20;
            break;
        case 'wednesday':
            left = 40;
            break;
        case 'thursday':
            left = 60;
            break;
        case 'friday':
            left = 80;
            break;
        default:
            console.log("Unknown DAY")
            break;
    }
    
    left += offsetXMultiplier * columnWidth + xGap;
    let top = (ConvertTime(time_start)-7) * (100/13) + yGap;
    let height = ((ConvertTime(time_end)-7) - (ConvertTime(time_start)-7)) * (100/13) - yGap * 2;
    //#endregion
    
    //#region CHANGE STYLES
    entry_box.style.top = `${top}%`;
    entry_box.style.height = `${height}%`;
    entry_box.style.left = `${left}%`;
    entry_box.style.width = `${width}%`;
    entry_box.style.borderWidth = '8px';
    entry_box.style.backgroundColor = bg_color;

    if(width < 10){
        entry.style.fontSize = '10px'
    }
    if(width < 9){
        subject_title.innerHTML = abbreviation;
    }
    if(width < 5){
        entry.style.fontSize = '9px'
    }
    if(type === 'P'){
        entry_box.style.border = 'solid 1px black';
        entry_box.style.boxShadow = 'inset 0 0 5px black';
    }

    //entry_box.style.opacity = 0.7;
    //#endregion

    //console.log('AddLessonToTimetable: done')
}
// INPUT - 7:00,7:30,7:15 / OUTPUT - 7.00,7.50,7.25                      
function ConvertTime(time){
    const [hoursStr, minutesStr] = time.split(':');
    hours = parseInt(hoursStr, 10);
    minutes = parseInt(minutesStr, 10);
    //if(minutes == 15) minutes = 0.25;
    if(minutes == 30) minutes = 0.50;
    //if(minutes == 45) minutes = 0.75;
    timeOut = hours + minutes; // 7 - hours starts with 7:00
    return timeOut;
}