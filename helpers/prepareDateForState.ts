import { DateTypes } from "../components/organisms/Offer/OfferTypes";
import removedDuplicatedDate from "./collectedDate";

const prepareDateForState = () => {
    let object = {} as DateTypes;

    removedDuplicatedDate.map((item: string) => {
        return object[item as keyof DateTypes] = false;
    });
    return { ...object };
};
const preparedDataForState = prepareDateForState();

export default preparedDataForState;