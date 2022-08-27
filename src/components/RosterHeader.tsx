export const RosterHeader = ({ header, text }: { header: string; text: string | number }) =>
    <div key="crewRoster" id="crewRoster" style={{ paddingTop: "0.5rem", display: "flex", fontWeight: "bold" }}>
        <div>{header}: </div><div style={{ marginLeft: "0.5rem" }}>{text}</div>
    </div>;
