// import doc from "js-yaml-loader!../../data/Beastmen/beastmen.mordheim.post1.yml";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Beastmen from "../../data/Beastmen/beastmen.mordheim.post1.json";
import { WarbandState } from "../../data/Interfaces";
import * as Skaven from "../../data/Skaven/deadguard-skaven.mordheim.json";
import * as Vampires from "../../data/Vampires/vampires.mordheim.json";
import { BeastmenImg, SkavenImg, VampiresImg } from "../../images/index";
import { SET_WARBAND } from "../../redux/actions";

export const LandingPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    return <div className="flex-container" style={{ textAlign: "center" }}>
        <div className="large-header">Warband Selection</div>
        <div
            className="tile"
            onClick={() => {
                // const file = fs.readFileSync("../../data/Beastmen/beastmen.mordheim.post1.yml", "utf8");
                // const doc = load(file);
                // tslint:disable-next-line: no-console
                // console.log(doc);
                dispatch({ type: SET_WARBAND, payload: (Beastmen as any).default as WarbandState });
                history.push("/WarbandViewer");
            }}>
            <div className="large-header">{Beastmen.warband}</div>
            <img alt="SampleWarband" style={{ width: "35%" }} src={BeastmenImg} />
        </div>
        <div
            className="tile"
            onClick={() => {
                dispatch({ type: SET_WARBAND, payload: (Skaven as any).default as WarbandState });
                history.push("/WarbandViewer");
            }}>
            <div className="large-header">{Skaven.warband}</div>
            <img alt="SampleWarband" style={{ width: "35%" }} src={SkavenImg} />
        </div>
        <div
            className="tile"
            onClick={() => {
                dispatch({ type: SET_WARBAND, payload: (Vampires as any).default as WarbandState });
                history.push("/WarbandViewer");
            }}>
            <div className="large-header">{Vampires.warband}</div>
            <img alt="SampleWarband" style={{ width: "35%" }} src={VampiresImg} />
        </div>
    </div >;
};
