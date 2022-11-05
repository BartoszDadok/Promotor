import { ImageComponent } from "../ImageComponent/ImageComponent";
import logoSrc from "../../../public/assets/logo.svg"

const propsLogo = {
    src: logoSrc,
    alt: "Logo biura podróży Promotor",
    preLoading: true,
};

export const Logo = () => {
    return (
        <div>
            <ImageComponent props={ propsLogo }/>
        </div>
    );
};