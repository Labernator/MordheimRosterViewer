import * as yaml from "js-yaml";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SET_WARBAND } from "../../redux/actions";
import ImportCrewPng from "./../../images/ImportCrew.png";
export const LandingPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    return <div className="flex-container" style={{ textAlign: "center" }}>
        <label htmlFor="file-uploader" className="flex-container">
            <input
                id="file-uploader"
                type="file"
                accept=".yml"
                style={{ display: "none" }}
                onChange={() => {
                    const reader = new FileReader();
                    reader.onload = (ev: ProgressEvent<FileReader>) => {
                        const jsobject = yaml.load(ev.target?.result as string);
                        dispatch({ type: SET_WARBAND, payload: jsobject });
                        history.push("/PdfExport");
                    };
                    reader.readAsText((document.querySelector("#file-uploader") as HTMLInputElement)?.files?.item(0) as File);
                }}
            />
            <img style={{ margin: "5rem 1rem" }} src={ImportCrewPng}></img>
            <div className="large-header" onClick={() => document.getElementById("file-uploader")?.click()}>Tap here to load your .yml file and get a nice pdf for it</div>
        </label>
    </div>;
};
