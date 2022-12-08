import { data } from "../public/assets/data";
import { FilteringDataTypes, ItemTypes } from "../components/organisms/Offer/OfferTypes";

const filterData = (filteringCategories: string[], collectedFilteringData: FilteringDataTypes) => {
    const pureData = [...data];

    return filteringCategories.reduce((acc: ItemTypes[], category: string) => {
        return acc.filter((item: ItemTypes) => {
            const dataToCheck = Object.values(item).flat();
            return (collectedFilteringData[category as keyof FilteringDataTypes]).some((value: string) => {
                if (value === "all") {
                    return item;
                }
                if (dataToCheck.includes(value)) {
                    return item;
                }
            });
        });
    }, [...pureData]);
};


export default filterData;