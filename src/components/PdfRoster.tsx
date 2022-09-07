import React from "react";
import { WarbandState } from "../utilities/Interfaces";
import { RulesSection } from "./RulesSection";
import { StatsAndEquipmentSection } from "./StatsAndEquipmentSection";
import { UnitHeader } from "./UnitHeader";
import { WarbandHeader } from "./WarbandHeader";

export const PdfRoster = ({ state }: { state: WarbandState }) => {
    const heroes = state.heros || [];
    const henchmen = state.henchmen || [];
    const units = [...heroes, ...henchmen];
    return <React.Fragment>
        <div className="pdf-container" style={{ top: "-10000px" }} id="pdf-roster">
            <WarbandHeader warband={state} />
            {units.map((unit) =>
                <div className="unit-container">
                    <UnitHeader Unit={unit} />
                    <StatsAndEquipmentSection Unit={unit} />
                    <RulesSection Unit={unit} />
                </div>)}
            <div style={{ marginLeft: "1rem" }}>* the [ +* ] notation behind the level states how many level ups you need to gain an advance</div>
        </div>

    </React.Fragment>;
};
