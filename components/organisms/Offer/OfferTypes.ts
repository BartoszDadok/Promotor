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
        "Autokar": boolean,
        "Dojazd własny": boolean,
    },
}

export type InitialStateKeysWithoutDate = keyof Omit<InitialStateTypes, "date">;
export type TranslationKeys = keyof Translations;
export type NestedKeys = keyof InitialStateTypes[InitialStateKeysWithoutDate]


export interface Translations {
    "italy": "Włochy",
    "france": "Francja",
    "austin": "Austria",
    "czech": "Czechy",
    "fullCatering": "Pełne",
    "onlyBreakfast": "Tylko śniadania",
    "withoutCatering": "Bez wyżywienia",
    "holidays": "Wczasy ogólne",
    "withLessonsForKids": "Wczasy ze szkółkami dla dzieci",
    "youthCamps": "Obozy młodzieżowe",
    "expressSki": "Express narty",
    "ski50": "Ski 50+ aktywnie",
    "hotel": "Hotel",
    "apartment": "Apartament",
    "sportCenter": "Ośrodek sportowy",
    "skipass": "Skipass",
    "own/bus": "Autokar",
    "own": "Dojazd własny",
}

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
    "all"?: boolean;
}

export interface FilteringDataTypes {
    board: string[],
    skipass: string[],
    country: string[],
    date: string[],
    category: string[],
    accommodation: string[],
    transport: string[],
}

export interface ItemTypes {
    id: number,
    country: string,
    accommodation: string,
    object: string,
    price: string,
    date: string[],
    priceWithBus: string,
    skipass: string,
    board: string,
    category: string[],
    startingDate: string,
    transport: string[],
    additionalInformation?: string
}