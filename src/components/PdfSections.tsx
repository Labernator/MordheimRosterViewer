import React from "react";
import { HenchmenEntity, HerosEntity, isHero, WarbandState } from "../data/Interfaces";
import { extractClass, extractExperience, extractName, getNextLevelUp, getRoutLimit, getStatLine, getWarbandRating } from "../data/Utils";

export const WarbandHeader = ({ warband }: { warband: WarbandState }) =>
    <div className="unit-container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>

            <div style={{ display: "flex" }}>
                <div className="bold-text-with-margins">Warband Name: </div>
                <div className="text-with-margins">{warband.warband}</div>
            </div>
            <div style={{ display: "flex" }}>
                <div className="bold-text-with-margins">Warband Rating: </div>
                <div className="text-with-margins">{getWarbandRating(warband.heros || [], warband.henchmen || [])}</div>
            </div>
            <div style={{ display: "flex" }}>
                <div className="bold-text-with-margins">Rout Limit: </div>
                <div className="text-with-margins">{getRoutLimit(warband.heros || [], warband.henchmen || [])}</div>
            </div>
            <div style={{ display: "flex" }}>
                <div className="bold-text-with-margins">Gold Coins: </div>
                <div className="text-with-margins">{warband.gc}</div>
            </div>
            <div style={{ display: "flex" }}>
                <div className="bold-text-with-margins">Shards: </div>
                <div className="text-with-margins">{warband.shards}</div>
            </div>
        </div>
    </div>;

export const UnitHeader = ({ Unit }: { Unit: HerosEntity | HenchmenEntity }) =>
    <div className="unit-layout">
        <div style={{ display: "flex" }}>
            <div className="bold-text-with-margins">Name: </div>
            <div className="text-with-margins">{extractName(Unit)}</div>
        </div>
        <div style={{ display: "flex" }}>
            <div className="bold-text-with-margins">Type: </div>
            <div className="text-with-margins">{extractClass(Unit)}</div>
        </div>
        {isHero(Unit) ? <div style={{ display: "flex" }}>
            <div className="bold-text-with-margins">Level: </div>
            <div className="text-with-margins">{`${extractExperience(Unit)} [ +${getNextLevelUp(extractExperience(Unit)) - extractExperience(Unit)} ]`}</div>
        </div> : <div></div>}
    </div>;

export const StatSection = ({ Unit }: { Unit: HerosEntity | HenchmenEntity }) => {
    const statLine = getStatLine(Unit.stats);

    return <div className="unit-layout" style={{ borderTop: "0.1rem solid" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
                {Object.entries(statLine).map(([key, value]) =>
                    <div style={{ display: "flex", flexDirection: "column" }}><div className="bold-text-with-margins">{key}</div><div className="text-with-margins" style={{ textAlign: "center" }}>{value}</div></div>
                )}
            </div>
        </div>
        <WeaponsSection Unit={Unit} />
        <ArmourSection Unit={Unit} />
    </div >;
};

export const RulesSection = ({ Unit }: { Unit: HerosEntity | HenchmenEntity }) => {
    const rules = Unit.rules;
    return rules ? <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="bold-text-with-margins">Rules: </div>
        <div className="text-with-margins">{rules}</div>
    </div> : <React.Fragment />;
};

export const WeaponsSection = ({ Unit }: { Unit: HerosEntity | HenchmenEntity }) => {
    const weapons = Unit.weapons;
    return weapons ? <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="bold-text-with-margins">Weapons: </div>
        <div className="text-with-margins">{weapons}</div>
    </div> : <React.Fragment />;
};

export const ArmourSection = ({ Unit }: { Unit: HerosEntity | HenchmenEntity }) => {
    const armour = Unit.armour;
    return armour ? <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="bold-text-with-margins">Armour: </div>
        <div className="text-with-margins">{armour}</div>
    </div> : <React.Fragment />;
};
