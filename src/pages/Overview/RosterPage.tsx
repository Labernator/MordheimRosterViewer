import React, { useContext } from "react";
import { ReactReduxContext } from "react-redux";
import { HeroEntityItem } from "../../components/HeroItem";
import { RosterHeader } from "../../components/RosterHeader";
import { WarbandState } from "../../data/Interfaces";

export const RosterPage = () => {
    const { store } = useContext(ReactReduxContext);
    const state = store.getState() as WarbandState;

    return <React.Fragment>
        {state.warband ?
            <div className="flex-container" >
                <div className="large-header">Warband Roster</div>
                <RosterHeader header={"Warband Name"} text={state.warband} />
                <RosterHeader header={"Gold Coins"} text={state.gc} />
                <RosterHeader header={"Wyrdstone Shards"} text={state.shards} />
                <div key="crewRoster" id="crewRoster" style={{ paddingTop: "0.5rem" }}>
                    {state.heros?.map((hero) => <HeroEntityItem hero={hero} />)}
                </div>
            </div> : null
        }
    </React.Fragment>;
};
