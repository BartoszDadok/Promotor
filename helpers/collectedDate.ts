import { data } from "../public/assets/data";
import { ItemTypes } from "../components/organisms/Offer/OfferTypes";

const convertedDate = data.map((item: ItemTypes) => {
    return [[...item.date], item.startingDate];
});

const sortedDate = convertedDate.sort((a: any, b: any) => new Date(a[1]).getTime() - new Date(b[1]).getTime());

const swappedDate = sortedDate.map(data => {
    if (!data[0][1]) return data[0][0];
    return [data[0][1], data[0][0]];
});
const flattenDate = swappedDate.flat();

const removeDuplicatedDate = (arr: string[]) => {
    let withoutDuplicates = [] as string[];
    arr.forEach((element) => {
        if (!withoutDuplicates.map((item: string) => item).includes(element)) {
            withoutDuplicates.push(element);
        }
    });
    return withoutDuplicates;
};

const removedDuplicatedDate = removeDuplicatedDate(flattenDate);

export default removedDuplicatedDate;