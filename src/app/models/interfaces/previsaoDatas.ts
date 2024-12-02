export interface PrevisaoDatas {
    coord:{
        lon: number;
        lat: number
    };

    weather:[
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];

    base: string;
    main:{
        feels_like: number;
        humidity: number;
        pressure:number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    visibility: number;
    wind:{
        speed: number;
        deg: number;
    };

    clouds:{
        all: number;
    };
    dt: number;
    sys:{
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
        country: string;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
