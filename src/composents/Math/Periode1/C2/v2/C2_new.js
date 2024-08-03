import React from "react";
import SwipeableScreens from "../../../Reusable Components/Swipeable/SwipeableScreen";
import C2A1 from "./C2A1";
import C2E1 from "../C2E1";
import C2E2 from "../C2E2";

export default function C2_new() {
    const slides = [C2A1];

    return <SwipeableScreens slides={slides} currentSegment={0}></SwipeableScreens>;
}
