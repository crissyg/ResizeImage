import { Jimp }from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname in ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const INPUT_IMAGE = 'sample_image.png';
const OUTPUT_IMAGE = 'resized_output_image.png';
const RESIZE_RATIO = 5;

/**
 * Resizes an image and saves it to a new file.
 * @param {string} inputPath - Path to the input image
 * @param {string} outputPath - Path to the output image
 * @param {number} ratio - The divisor for resizing (e.g., 5 means 1/5th size)
 */
async function resizeImage(inputPath, outputPath, ratio) {
  try {
    const image = await Jimp.read(inputPath);
    console.log('Original dimensions:', image.bitmap.width, 'x', image.bitmap.height);

    const width = Math.floor(image.bitmap.width / ratio);
    const height = Math.floor(image.bitmap.height / ratio);
    console.log('Calculated width:', width, 'Calculated height:', height);

    image.resize(width, height);
    console.log('Resized dimensions:', image.bitmap.width, 'x', image.bitmap.height);

    await image.writeAsync(outputPath);
    console.log(`Resized image saved as ${outputPath}`);
  } catch (err) {
    console.error('Error processing image:', err);
    throw err; // Re-throw for caller to handle if needed
  }
}

// Main function 
async function main() {
  const inputPath = path.join(__dirname, INPUT_IMAGE);
  const outputPath = path.join(__dirname, OUTPUT_IMAGE);

  console.log(`Resizing ${inputPath}...`);
  await resizeImage(inputPath, outputPath, RESIZE_RATIO);
  console.log('Image processing complete.');
}

main().catch(console.error);
