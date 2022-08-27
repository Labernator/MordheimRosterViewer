import React from "react";
import { HerosEntity } from "../data/Interfaces";

export const HeroEntityItem = ({ hero }: { hero: HerosEntity }) =>
    <React.Fragment>
        <div key="crewRoster" id="crewRoster" style={{ paddingTop: "0.5rem" }}>
            <div style={{ fontWeight: "bold" }}>{hero.hero}</div>
            <div style={{ display: "flex", marginLeft: "1rem" }}>
                <div style={{ fontWeight: "bold" }}>Stats: </div>
                <div style={{ marginLeft: "0.5rem" }}>{hero.stats}</div>
            </div>
            <div style={{ display: "flex", marginLeft: "1rem" }}>
                <div style={{ fontWeight: "bold" }}>Weapons and Armour: </div>
                <div style={{ marginLeft: "0.5rem" }}>{hero.armour ? `${hero.weapons}, ${hero.armour}` : `${hero.weapons}`}</div>
            </div>
            <div style={{ display: "flex", marginLeft: "1rem" }}>
                <div style={{ fontWeight: "bold" }}>Skill Lists: </div>
                <div style={{ marginLeft: "0.5rem" }}>{hero.skilllists}</div>
            </div>
            <div style={{ display: "flex", marginLeft: "1rem" }}>
                <div style={{ fontWeight: "bold" }}>Rules: </div>
                <div style={{ marginLeft: "0.5rem" }}>{hero.rules}</div>
            </div>
        </div>
    </React.Fragment>;
