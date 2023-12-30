// PDFDownloadWrapper.js
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PDFDownloadWrapper = ({ children, elementId, fileName = 'document.pdf' }) => {
    
    const addCenteredImage = (pdf, imgData, imgWidth, imgHeight) => {
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
      
        // Calculate the x and y coordinates to center the image
        const x = (pdfWidth - imgWidth) / 2;
        const y = (pdfHeight - imgHeight) / 2;
      
        pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
      };

    const scaleToFit = (imgWidth, imgHeight, pdfWidth, pdfHeight) => {
      // Calculate aspect ratios
      const imgAspectRatio = imgWidth / imgHeight;
      const pdfAspectRatio = pdfWidth / pdfHeight;
    
      let scaledWidth, scaledHeight;
    
      // If image aspect ratio is greater than PDF's, scale by width, else by height
      if (imgAspectRatio > pdfAspectRatio) {
        scaledWidth = pdfWidth;
        scaledHeight = pdfWidth / imgAspectRatio;
      } else {
        scaledWidth = pdfHeight * imgAspectRatio;
        scaledHeight = pdfHeight;
      }
    
      return { scaledWidth, scaledHeight };
    };
      
      
    const downloadPdfDocument = () => {
    const input = document.getElementById(elementId);
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
            
        // Get scaled dimensions
        const { scaledWidth, scaledHeight } = scaleToFit(canvas.width, canvas.height, pdfWidth, pdfHeight);
            
        // Calculate the position for centered image
        const x = (pdfWidth - scaledWidth) / 2;
        const y = (pdfHeight - scaledHeight) / 2;
            
        pdf.addImage(imgData, 'JPEG', x, y, scaledWidth, scaledHeight);
        pdf.save('document.pdf');
      });
    /*  
    html2canvas(input, { 
        scale: 1, 
        width: input.scrollWidth, 
        height: input.scrollHeight
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            unit: 'px',
            format: [input.offsetWidth, input.offsetHeight]
          });
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save(fileName);
      })
      .catch(error => {
        console.error("Error generating PDF: ", error);
      });
      */
  }

  return (
    <div>
      <div id={elementId}>
        {children}
      </div>
      <button className="bg-red-500 text-white p-4" onClick={downloadPdfDocument}>Version PDF</button>
    </div>
  );
}

export default PDFDownloadWrapper;
