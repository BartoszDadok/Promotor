export interface InitialStateTypes {
    date: DateTypes,
    country: {
        "Włochy": boolean,
        "Francja": boolean,
        "Austria": boolean,
        "Czechy": boolean,
    },
    board: {
        "Pełne": boolean,
        "Tylko śniadania": boolean,
        "Bez wyżywienia": boolean,
    },
    skipass: { "Skipass": boolean },
    category: {
        "Wczasy ogólne": boolean,
        "Wczasy ze szkółkami dla dzieci": boolean,
        "Obozy młodzieżowe": boolean,
        "Express narty": boolean,
        "Ski 50+ aktywnie": boolean,
    },
    accommodation: {
        "Hotel": boolean,
        "Apartament": boolean,
        "Ośrodek sportowy": boolean,
    },
    transport: {
        "Dojazd własny/autokar": boolean,
        "Autokar w cenie": boolean,
        "Dojazd własny": boolean,
    },
};

export interface Translations {
    "italy": string,
    "france": string,
    "austin": string,
    "czech": string,
    "fullCatering": string,
    "onlyBreakfast": string,
    "withoutCatering": string,
    "holidays": string,
    "withLessonsForKids": string,
    "youthCamps": string,
    "expressSki": string,
    "ski50": string,
    "hotel": string,
    "apartment": string,
    "sportCenter": string,
    "skipass": string,
    "own/bus": string,
    "busIncluded": string,
    "own": string,
};

export interface DateTypes {
    "03.03.2023 - 12.03.2023": boolean;
    "04.02.2023 - 11.02.2023": boolean;
    "06.01.2023 - 08.01.2023": boolean;
    "09.12.2023 - 18.12.2023": boolean;
    "10.02.2023 - 19.02.2023": boolean;
    "10.03.2023 - 19.03.2023": boolean;
    "10.12.2022 - 17.12.2022": boolean;
    "11.03.2023 - 19.03.2023": boolean;
    "17.03.2023 - 26.03.2023": boolean;
    "21.01.2023 - 28.01.2023": boolean;
    "24.02.2023 - 05.03.2023": boolean;
    "24.03.2023 - 02.04.2023": boolean;
    "27.01.2023 - 05.02.2023": boolean;
    "28.01.2023 - 04.02.2023": boolean;
    "29.01.2023 - 03.02.2023": boolean;
}

export interface FilteringDataTypes {
    board: string[],
    skipass: string[],
    country: string[],
    date: string[],
    category: string[],
    accomodation: string[],
    tranposrt: string[],
}
export interface ItemTypes {
    id: number,
    country: string,
    accommodation: string,
    object: string,
    price: string,
    date: string,
    skipass: string,
    board: string,
    category: string[],
    startingDate: string,
    transport: string

}