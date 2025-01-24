import Tesseract from 'tesseract.js';

// Function to handle image file input
export async function performOCR(file: File): Promise<string> {
  try {
    // Perform OCR
    const result = await Tesseract.recognize(
      file,
      'eng', // Language code (e.g., 'eng' for English)
    );

    // Return the recognized text
    return result.data.text;
  } catch (error) {
    console.error('Error performing OCR:', error);
    throw error;
  }
}

