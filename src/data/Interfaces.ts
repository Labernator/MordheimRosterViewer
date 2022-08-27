export interface WarbandState {
    warband: string;
    campaign: number;
    gc: number;
    shards: number;
    objective: string;
    alignment: string;
    heros?: (HerosEntity)[] | null;
    henchmen?: (HenchmenEntity)[] | null;
}
export interface HerosEntity {
    hero: string;
    stats: string;
    weapons: string;
    armour?: string | null;
    rules?: string | null;
    skilllists: string;
}
export interface HenchmenEntity {
    group: string;
    stats: string;
    weapons?: string | null;
    armour?: null;
    rules?: string | null;
}
