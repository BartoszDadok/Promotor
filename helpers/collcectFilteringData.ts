import { FilteringDataTypes, InitialStateTypes } from "../components/organisms/Offer/OfferTypes";

const collectFilteringData = (
    filteringState: InitialStateTypes,
): FilteringDataTypes => {
    let filteringData = <FilteringDataTypes>{};

    (Object.keys(filteringState) as Array<keyof InitialStateTypes>).forEach(
        (item) => {
            (Object.keys(filteringState[item]) as Array<keyof InitialStateTypes[typeof item]>)
                .forEach((el) => {
                    if (filteringState[item][el]) {
                        if (!filteringData[item]) {
                            filteringData[item] = [el];
                        } else {
                            filteringData[item] = [...filteringData[item], el];
                        }
                    }
                });
        },
    );
    return filteringData;
};

export default collectFilteringData;