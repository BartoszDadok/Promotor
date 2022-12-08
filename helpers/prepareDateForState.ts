import { DateTypes } from "../components/organisms/Offer/OfferTypes";
import removedDuplicatedDate from "./collectedDate";

const prepareDateForState = () => {
    let object = <DateTypes>{};

    removedDuplicatedDate.forEach((item: string) => {
        return object[item as keyof DateTypes] = false;
    });
    return { ...object };
};
const preparedDataForState = prepareDateForState();

export default preparedDataForState;