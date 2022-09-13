import { WIDTH_MAX, WIDTH_MIDDLE, MORE_STEP_MAX, MORE_STEP_MIN, INITIAL_COUNT_MAX, INITIAL_COUNT_MIDDLE, INITIAL_COUTN_MIN } from "./constants";

export const getMoreStep = (width) => {
    if (width >= WIDTH_MAX) {
        return MORE_STEP_MAX;
    }

    return MORE_STEP_MIN;
}

export const getInitialCount = (width) => {
    if (width >= WIDTH_MAX) {
        return INITIAL_COUNT_MAX;
    }

    if (width >= WIDTH_MIDDLE) {
        return INITIAL_COUNT_MIDDLE;
    }

    return INITIAL_COUTN_MIN;
}