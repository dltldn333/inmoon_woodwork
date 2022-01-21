import NotoSansThin_otf from "./NotoSansKR-Thin.otf";
import NotoSansThin_woff from "./NotoSansKR-Thin.woff";
import NotoSansThin_woff2 from "./NotoSansKR-Thin.woff2";

import { createGlobalStyle } from "styled-components";
import NotoSansLight_otf from "./NotoSansKR-Light.otf";
import NotoSansLight_woff from "./NotoSansKR-Light.woff";
import NotoSansLight_woff2 from "./NotoSansKR-Light.woff2";

import NotoSansRegular_otf from "./NotoSansKR-Regular.otf";
import NotoSansRegular_woff from "./NotoSansKR-Regular.woff";
import NotoSansRegular_woff2 from "./NotoSansKR-Regular.woff2";

import NotoSansMedium_otf from "./NotoSansKR-Medium.otf";
import NotoSansMedium_woff from "./NotoSansKR-Medium.woff";
import NotoSansMedium_woff2 from "./NotoSansKR-Medium.woff2";

export default createGlobalStyle`
@font-face {
    font-family: "NotoSans";
    font-weight: 200;
    font-style: normal;
    src: url(${NotoSansThin_woff}) format('woff'),
    url(${NotoSansThin_woff2}) format('woff2'),
    url(${NotoSansThin_otf}) format('truetype')
}
@font-face {
    font-family: "NotoSans";
    font-weight: 300;
    font-style: normal;
    src: url(${NotoSansLight_woff}) format('woff'),
    url(${NotoSansLight_woff2}) format('woff2'),
    url(${NotoSansLight_otf}) format('truetype')
}
@font-face {
    font-family: "NotoSans";
    font-weight: 400;
    font-style: normal;
    src: url(${NotoSansRegular_woff}) format('woff'),
    url(${NotoSansRegular_woff2}) format('woff2'),
    url(${NotoSansRegular_otf}) format('truetype')
}
@font-face {
    font-family: "NotoSans";
    font-weight: 500;
    font-style: normal;
    src: url(${NotoSansMedium_woff}) forzmat('woff'),
    url(${NotoSansMedium_woff2}) format('woff2'),
    url(${NotoSansMedium_otf}) format('truetype')
}


`;
