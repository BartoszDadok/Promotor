import { data } from "../public/assets/data";
import { ItemTypes } from "../components/organisms/Offer/OfferTypes";

const filterData = (filteringCategories: string[], collectedFilteringData: any) => {
    const pureData = [...data];
    return filteringCategories.reduce((acc: ItemTypes[], category: string) => {
        return acc.filter((item: ItemTypes) => {
            const dataToCheck = Object.values(item).flat();
            // @ts-ignore
            return collectedFilteringData[category].some(r => {
                if (r === "all") {
                    return item;
                }
                if (dataToCheck.includes(r)) {
                    return item;
                }
            });
        });
    }, [...pureData]);
};


export default filterData;