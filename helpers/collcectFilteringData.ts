import { FilteringDataTypes, InitialStateTypes } from "../components/organisms/Offer/OfferTypes";

const collectFilteringData = (filteringState: InitialStateTypes) => {
    let filteringData = {} as FilteringDataTypes;
    Object.keys(filteringState).forEach((item) => {
        Object.keys(filteringState[item as keyof InitialStateTypes]).forEach((el) => {
            // @ts-ignore
            if (filteringState[item][el]) {
                if (!filteringData[item as keyof FilteringDataTypes]) {
                    filteringData[item as keyof FilteringDataTypes] = [el];
                } else {
                    filteringData[item as keyof FilteringDataTypes] = [...filteringData[item as keyof FilteringDataTypes], el];
                }
            }
        });
    });
    return filteringData;

};


export default collectFilteringData;