"use client";
import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import { QRCode } from "react-qrcode-logo";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { jsPDF }from "jspdf";

type QrDialogProps = {
  onClose: () => void;
  open: boolean;
  link: string;
  providerName: string;
};

export const QrDialog = ({
  onClose,
  open,
  link,
  providerName,
}: QrDialogProps) => {
  const [logoProps, setLogoProps] = useState({
    logoImage: "",
    logoHeight: 0,
    logoWidth: 0,
  });

  useEffect(() => {
    // Load and resize the logo
    const logo = new Image();
    logo.src = "./ondc-network-vertical.png";
    logo.onload = () => {
      const basewidth = 100;
      const wpercent = basewidth / logo.width;
      const hsize = logo.height * wpercent;
      const canvas = document.createElement("canvas");
      canvas.width = basewidth;
      canvas.height = hsize;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.drawImage(logo, 0, 0, basewidth, hsize);
        const resizedLogoDataURL = canvas.toDataURL();
        setLogoProps({
          logoImage: resizedLogoDataURL,
          logoHeight: hsize,
          logoWidth: basewidth,
        });
      }
    };
  }, []);

  const downloadQr = () => {
    const canvas = document.getElementById("qr-code-component") as HTMLCanvasElement;
    if (canvas) {
      const qrDataUrl = canvas.toDataURL("image/png");

      const pdf = new jsPDF();

      // Add QR Code to the PDF
      pdf.addImage(qrDataUrl, "PNG", 10, 10, 190, 190);

      // Add provider name or other text
      pdf.setFontSize(16);
      pdf.text(providerName, 10, 210);

      // Save the PDF
      pdf.save(`${providerName}_QR.pdf`);
    }
  };

  return (
    <Dialog onClose={onClose} open={open} maxWidth="md">
      <DialogContent>
        <QRCode
          size={450}
          ecLevel="H"
          quietZone={4}
          value={link}
          logoImage={logoProps.logoImage}
          logoHeight={logoProps.logoHeight}
          logoWidth={logoProps.logoWidth}
          id="qr-code-component"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={downloadQr}>
          Download QR
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default QrDialog;