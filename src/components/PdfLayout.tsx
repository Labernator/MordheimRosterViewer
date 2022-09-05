import React, { useContext } from "react";
import { ReactReduxContext } from "react-redux";
import { isArmour, isMelee, isMisc, isMissile, isSpell, SkillsEntity, SpellsEntity, WarbandState } from "../data/Interfaces";
import { findEquipment, findSkills, getEquipmentRules } from "../data/Utils";
import "./Pdf.css";
import { RulesSection, StatSection, UnitHeader, WarbandHeader } from "./PdfSections";

export const PDFLayout = ({ }: {}) => {
    const { store } = useContext(ReactReduxContext);
    const state = store.getState() as WarbandState;
    const heroes = state.heros || [];
    const henchmen = state.henchmen || [];
    const units = [...heroes, ...henchmen];
    findSkills(units);
    return <React.Fragment>
        <div className="pdf-container" style={{ top: "-10000px" }} id="pdf-roster">
            <WarbandHeader warband={state} />
            {units.map((unit) =>
                <div className="unit-container">
                    <UnitHeader Unit={unit} />
                    <StatSection Unit={unit} />
                    <RulesSection Unit={unit} />
                </div>)}
            <div style={{ marginLeft: "1rem" }}>* the [ +* ] notation behind the level states how many level ups you need to gain an advance</div>
        </div>

    </React.Fragment>;
};

export const PDFInfoPage = ({ }: {}) => {
    const { store } = useContext(ReactReduxContext);
    const state = store.getState() as WarbandState;
    const heroes = state.heros || [];
    const henchmen = state.henchmen || [];
    const units = [...heroes, ...henchmen];
    const spells = findSkills(units).filter((entity) => entity && isSpell(entity)) as SpellsEntity[];
    const skills = findSkills(units).filter((entity) => entity && !isSpell(entity)) as SkillsEntity[];
    const equipment = findEquipment(units);
    return <React.Fragment>
        <div className="pdf-container" id="pdf-info-page">
            <WarbandHeader warband={state} />
            <div className="unit-container">
                {state.notes ? <React.Fragment><div className="large-header">Notes</div>
                    <div className="text-with-margins">{state.notes}</div>
                </React.Fragment> : undefined}
                {skills.length > 0 ? <React.Fragment>
                    <div className="large-header">Skills and other Rules</div>
                    {skills.map((entity) => <div className="info-page-flexbox">
                        <div className="bold-text-with-margins">{entity.type === "Generic" ? `${entity.name}` : `${entity.name} (${entity.type})`}</div>
                        <div className="text-with-margins">{entity.text}</div>
                    </div>)}
                </React.Fragment> : undefined}
                {spells.length > 0 ? <React.Fragment>
                    <div className="large-header">Spells</div>
                    {spells.map((entity) => <div className="info-page-flexbox">
                        <div className="bold-text-with-margins">{`${entity.name} (${entity.type}) [${entity.castingCost}]`}</div>
                        <div className="text-with-margins">{entity.text}</div>
                    </div>)}
                </React.Fragment> : undefined}
                {equipment.length > 0 ? <React.Fragment>
                    <div className="large-header">Equipment</div>
                    {equipment.map((entity) => {
                        if (isArmour(entity)) {
                            return <div className="info-page-flexbox">
                                <div className="bold-text-with-margins">{`${entity.type}`}</div>
                                <div className="text-with-margins"><div>{`Add +${entity.armour} to your armour save.`}</div>{getEquipmentRules(entity.rules || []).map((rule) => <div>{rule.text}</div>)}</div>
                            </div>;
                        }
                        if (isMelee(entity)) {
                            return <div className="info-page-flexbox">
                                <div className="bold-text-with-margins">{`${entity.type} (Strength ${entity.strengthModifier || "+0"})`}</div>
                                <div className="text-with-margins">{getEquipmentRules(entity.rules || []).map((rule) => <div>{rule.text}</div>)}</div>
                            </div>;
                        }
                        if (isMisc(entity)) {
                            return <div className="info-page-flexbox">
                                <div className="bold-text-with-margins">{`${entity.type}`}</div>
                                {entity.rules ? <div className="text-with-margins">{getEquipmentRules(entity.rules).map((rule) => <div>{rule.text}</div>)}</div> : <div className="text-with-margins">{entity.text}</div>}
                            </div>;
                        }
                        if (isMissile(entity)) {
                            return <div className="info-page-flexbox">
                                <div className="bold-text-with-margins">{`${entity.type} (Strength ${entity.strength}, Range ${entity.range})`}</div>
                                <div className="text-with-margins">{getEquipmentRules(entity.rules || []).map((rule) => <div>{rule.text}</div>)}</div>
                            </div>;
                        }
                    }

                    )}
                </React.Fragment> : undefined}
            </div>
        </div>
    </React.Fragment>;
};
