import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import cv from "../assets/Tony Igwe.pdf";
import preview from "../assets/cv-preview.png";

export default function CvModal({ onClose, returnFocusTo }: { onClose: () => void; returnFocusTo: RefObject<HTMLButtonElement | null> }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      returnFocusTo.current?.focus();
    };
  }, [returnFocusTo]);

  return (
    <dialog
      ref={dialog}
      className="cv-dialog"
      aria-labelledby="cv-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="cv-shell">
        <header className="cv-header">
          <div><span className="eyebrow">RÉSUMÉ</span><h2 id="cv-title">Chidubem Tony Igwe</h2></div>
          <div className="cv-controls">
            <button className="button button-outline" onClick={() => setIsZoomed(!isZoomed)} aria-pressed={isZoomed}>{isZoomed ? "Fit to width" : "Zoom in +"}</button>
            <a className="button button-primary" href={cv} download="Tony Igwe CV.pdf">Download CV ↓</a>
            <button className="modal-close" onClick={onClose} aria-label="Close CV preview" autoFocus>✕</button>
          </div>
        </header>
        <div className={`cv-document ${isZoomed ? "cv-document--zoomed" : ""}`}>
          <img src={preview} alt="Preview of Chidubem Tony Igwe’s CV. Download the PDF for selectable text and the full accessible document." />
        </div>
      </div>
    </dialog>
  );
}
