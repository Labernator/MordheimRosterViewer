import { WarbandState } from "../data/Interfaces";
export const SET_WARBAND = "SET_WARBAND";

interface SetWarband {
    type: typeof SET_WARBAND;
    payload: WarbandState;
}

export type Actions = SetWarband;
