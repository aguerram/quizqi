import {atom} from "recoil";

export const answersAtom = atom({
    key: 'answersAtom', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});
