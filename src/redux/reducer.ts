import { InitialWarbandState } from "../data/Constants";
import { WarbandState } from "../data/Interfaces";
import * as ReduxActions from "./actions";

export function stateReducer(state: WarbandState = InitialWarbandState, action: ReduxActions.Actions): WarbandState {
    switch (action.type) {
        case ReduxActions.SET_WARBAND:
            return action.payload;
    }
}
