import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Ensure you include jsPDF autoTable plugin
import { PDFDocument, rgb, degrees, StandardFonts } from 'pdf-lib';

/**
 * Adds a watermark to each page of a PDF document.
 * @param {Uint8Array} pdfBytes - The byte data of the PDF to be watermarked.
 * @param {string} watermarkText - The watermark text to be added to the PDF.
 * @returns {Promise<Uint8Array>} - A promise that resolves to the modified PDF byte data.
 */
async function applyWatermark(pdfBytes, watermarkText) {
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = pdfDoc.getPages();
  const fontSize = 100;
  const opacity = 0.5;
  const angle = 45; // 45 degrees
  pages.forEach(page => {
    const { width, height } = page.getSize();
    const textWidth = font.widthOfTextAtSize(watermarkText, fontSize);
    const textHeight = fontSize;
    const centerX = width / 2;
    const centerY = height / 2;
    if (isNaN(centerX) || isNaN(centerY) || isNaN(textWidth) || isNaN(textHeight)) {
      console.error('Invalid position or size calculations:', {centerX, centerY, textWidth, textHeight });
      return;
    }
    page.drawText(watermarkText, {
      x: (centerX - textWidth / 2) + 80, // Center x position
      y: (centerY - textHeight / 2) - 80, // Center y position
      size: fontSize,
      color: rgb(0.9, 0.9, 0.9),
      opacity: opacity,
      rotate: degrees(angle), // Apply rotation
    });
  });
  return await pdfDoc.save();
}

/**
 * Generates a PDF document with a customizable header, footer, and data table using jsPDF and autoTable.
 * @param {Object} options - Configuration options for the PDF.
 * @param {string} options.mainTitle - The main title to display at the top of the PDF.
 * @param {Array<Object>} options.headerInfo - An array of header information, each with a label and value (for multi-column) or text and font details (for simple headers).
 * @param {boolean} [options.isMulticolhead=false] - Flag indicating if the header should display in a multi-column format.
 * @param {string} [options.format='a4'] - The format of the PDF page (default is A4).
 * @param {Array<string>} options.columns - Column headers for the table.
 * @param {Array<Array<string>>} options.rows - Data rows for the table body. 
 * @returns {ArrayBuffer} - A PDF document in array buffer format.
 */
async function generatePDF({mainTitle, headerInfo, isMulticolhead = false,  format, columns, rows }) {
  const doc = new jsPDF({ format: format || 'a4' });
  const pageHeight = doc.internal.pageSize.height;
  const pageWidth = doc.internal.pageSize.width;
  var docpos = 30;
  var header;
  if (isMulticolhead) {
    docpos = 45;
    header = () => {
      const headerFontSize = 10;
      let y = 10; // Starting Y position
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(mainTitle, pageWidth / 2, y, { align: 'center' });
      
      y += 12; // Move to next line    
      doc.setFontSize(headerFontSize);
      doc.setFont('helvetica', 'normal');
      
      // Define the number of columns for layout
      const numColumns = 2;
      const columnWidth = (pageWidth - 30) / numColumns; // Adjust for margins
    
      headerInfo.forEach((item, index) => {
        const x = (index % numColumns === 0) ? 15 : 15 + columnWidth; // Left or Right column
        const yOffset = Math.floor(index / numColumns) * 8; // Row spacing
    
        doc.text(item.label, x, y + yOffset);
        doc.text(`: ${item.value}`, x + 35, y + yOffset); // Value positioning
      });
    };
  }
  else {
    header = () => {
      let y = 10;
      headerInfo.forEach(line => {
        doc.setFontSize(line.fontSize || 12);
        doc.setFont(line.fontStyle === 'bold' ? 'helvetica' : 'helvetica', line.fontStyle || 'normal');
        doc.text(line.text, pageWidth / 2, y, { align: 'center' });
        y += 8;
      });
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
    };
  }

  const footer = (pageNumber) => {
    const now = new Date();
    const dateTime = now.toLocaleString();

    doc.setFontSize(8);
    doc.text(dateTime, 10, pageHeight - 10, { align: 'left' });
    doc.text(`Page ${pageNumber}`, pageWidth - 20, pageHeight - 10, { align: 'right' });
  };

  doc.autoTable({
    head: [columns],
    body: rows,
    startY: docpos,
    margin: { top: 30 },
    styles: { valign: 'middle' },
    columnStyles: { 0: { cellWidth: 50 }, 1: { cellWidth: 80 }, 2: { cellWidth: 60 } },
    didDrawPage: (data) => {
      header();
      footer(data.pageNumber);
    },
  });

  return doc.output('arraybuffer');
}

/**
 * Exports a PDF document with a watermark based on the current route in the application. The function dynamically sets
 * headers, format, and watermark text depending on the active page (e.g., "analytics" or "companyinfo"). 
 * It generates the PDF using the `generatePDF` function, applies a watermark, and initiates a download of the PDF.
 *
 * @param {Object} options - Configuration for PDF export.
 * @param {Array<string>} options.columns - Column headers for the table in the PDF.
 * @param {Array<Array<string>>} options.rows - Data rows for the table body in the PDF.
 */
export async function exportToPDFwithWatermark({columns, rows}) { 
  var headerInfo = [];
  var format = "a4";
  var watermarkText = "Confidential";
  var mainTitle = "EMPLOYEES LISTING REPORT - ALL COMPANIES";
  var isMulticolhead = false;
  var urlRoute = window.location.pathname.split("/");
  var currentPath = urlRoute[urlRoute.length - 1];      
  switch(currentPath) {
    case "analytics": {
      format = "a1";
      isMulticolhead = true;
      headerInfo = [
        { label: 'FROM DATE', value: '04-09-2024' },
        { label: 'TO DATE', value: '02-09-2024' },
        { label: 'COMPANY', value: 'ALL COMPANIES' },
        { label: 'BRANCH', value: 'FACTORY (VSKP)' },
        { label: 'DEPARTMENT', value: 'HUMAN RESOURCE' },
      ];
    }
    break;
    case "companyinfo": {
      format = "a1";
      watermarkText = "RKS NAGESH";
      headerInfo = [
        { text: 'EMPLOYEE PROFILE INFORMATION', fontSize: 14, fontStyle: 'bold' },
        { text: 'SPRINT EXPORTS PVT LTD', fontSize: 12, fontStyle: 'bold' },
        { text: 'FACTORY (VSKP)', fontSize: 11 }
      ];
    }
    break;
    default: {
      format = "a4";
      watermarkText = "RKS NAGESH";
    }
    break;
  }
  try {
    const pdfBytes = await generatePDF({ mainTitle, headerInfo, isMulticolhead, format, columns, rows });
    const pdfBytesWithWatermark = await applyWatermark(pdfBytes, watermarkText);
    const pdfBlob = new Blob([pdfBytesWithWatermark], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = currentPath+'.pdf';
    link.click();
  } catch (error) {
    console.error('Error generating or exporting PDF:', error);
  }
}