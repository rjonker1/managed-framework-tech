export class PhysicalAddress {
    id: number;
    country: Country;
    province: Province;
    city: City;
    suburb: string;
}

export class Country {
    id: number;
    name: string;
}

export class Province {
    id: number;
    name: string;
    country: Country;
}

export class City {
    id: number;
    name: string;
    provice: Province;
}

export class Suburb {
    id: number;
    name: string;
    city: City;
}