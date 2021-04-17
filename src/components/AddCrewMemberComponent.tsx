import React, { useState } from "react";
import { AddIcon } from "../images";
import { AddCrewDialogComponent } from "./AddCrewDialog";

export const AddCrewMemberComponent = () => {
    const [showDialog, setDialogShown] = useState<boolean>(false);
    return <div key={"add_soldier_tile"} className="add-character-tile" onClick={() => setDialogShown(true)}>
        {showDialog ? <AddCrewDialogComponent callback={setDialogShown} /> : undefined}
        <div>
            <div style={{ float: "left" }}>
                <img className="background-image add-image" src={AddIcon} />
                <div className="background-title add-title">{"Click here to hire a new crew member"}</div>
            </div>
        </div>
    </div>;
};
