
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import React, { useContext, useEffect, useState } from "react";
import { ReactReduxContext } from "react-redux";
import { useHistory } from "react-router-dom";
import { PDFInfoPage, PDFLayout } from "../../components/PdfLayout";
import { WarbandState } from "../../data/Interfaces";
import CompletedPng from "./../../images/Completed.png";
import LoadingPng from "./../../images/Loading.png";

export const PdfCreationPage = () => {
    const history = useHistory();
    const { store } = useContext(ReactReduxContext);
    const state = store.getState() as WarbandState;
    const exportPdf = async () => {
        const jsPdf = new jsPDF("portrait", "mm", "a4", true);
        let canvas: HTMLCanvasElement;
        canvas = await html2canvas(document.querySelector("#pdf-roster") as HTMLElement, { scale: 4 });
        jsPdf.addImage(canvas.toDataURL("image/png"), "JPEG", 0, 0, jsPdf.internal.pageSize.getWidth(), jsPdf.internal.pageSize.getHeight());

        jsPdf.addPage();

        canvas = await html2canvas(document.querySelector("#pdf-info-page") as HTMLElement, { scale: 4 });
        jsPdf.addImage(canvas.toDataURL("image/png"), "JPEG", 0, 0, jsPdf.internal.pageSize.getWidth(), jsPdf.internal.pageSize.getHeight());
        jsPdf.save(`${state.warband}.pdf`);
    };
    const [showSuccess, setSuccess] = useState<boolean>(false);
    useEffect(() => {
        // tslint:disable-next-line: no-floating-promises
        (async () => {
            await exportPdf();
            setSuccess(true);
        })();
        return () => {
            // this now gets called when the component unmounts
        };
    }, []);
    return <React.Fragment>{
        showSuccess ?
            <React.Fragment>
                <img src={CompletedPng} style={{ margin: "5rem 3rem", width: "75%" }} ></img>
                <div
                    className="large-header"
                >Enjoy your pdf</div>
                <div
                    className="back-btn"
                    onClick={() => history.goBack()}
                >Back</div></React.Fragment> : <React.Fragment>
                <img src={LoadingPng} style={{ margin: "5rem 3rem", width: "75%" }} ></img>
                <div
                    className="large-header"
                >Please be patient. </div>
                <div
                    className="large-header"
                >The Snotlings are painting your pdf right now.</div>
                <div
                    className="large-header"
                >They are almost done.</div>
                <div
                    className="large-header"
                >Hang on...</div>
            </React.Fragment>
    }
        <PDFLayout />
        <PDFInfoPage />
    </React.Fragment>;
};
