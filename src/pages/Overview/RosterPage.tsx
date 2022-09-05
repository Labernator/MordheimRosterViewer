
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import React from "react";
import { useHistory } from "react-router-dom";
import { PDFLayout } from "../../components/PdfLayout";

export const RosterPage = () => {
    const history = useHistory();
    const exportPdf = async () => {
        const jsPdf = new jsPDF("portrait", "mm", "a4", true);
        let canvas: HTMLCanvasElement;
        const container = Array.from(document.querySelectorAll(".pdf-container"));
        canvas = await html2canvas(container[0] as unknown as HTMLElement, { scale: 4 });
        jsPdf.addImage(canvas.toDataURL("image/png"), "JPEG", 0, 0, jsPdf.internal.pageSize.getWidth(), jsPdf.internal.pageSize.getHeight());
        jsPdf.save("RosterViewer.pdf");
    };
    return <React.Fragment>
        <div
            className="back-btn"
            onClick={async () => exportPdf()}
        >Generate Pdf</div>
        <div
            className="back-btn"
            onClick={() => history.goBack()}
        >Back</div>
        <PDFLayout />
    </React.Fragment>;
};
