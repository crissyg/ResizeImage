# Image Resizer Portfolio Project

## Overview

A Node.js application that leverages the [Jimp](https://www.npmjs.com/package/jimp) library to resize images efficiently. 

## Features

- **Resizes images by a specified ratio**
- **Uses absolute file paths for reliability**
- **Logs detailed process information for debugging**
- **Handles errors gracefully with informative messages**
- **Ready for integration into larger workflows or automation**

## Requirements

- **Node.js** (version 16 or higher recommended)
- **npm** (included with Node.js)
- **Jimp** (installed via npm)
- **An image file** (e.g., `sample_image.png`)

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/crissyg/ResizeImage.git
   cd image-resizer
   ```

2. **Install dependencies:**

   ```
   npm install jimp@latest
   ```

3. **Place your image file (e.g., `sample_image.png`) in the project root.**

## Usage

1. **Run the script:**

   ```
   node resizeImage.js
   ```

2. **Check the console for process logs and any errors.**

3. **The resized image will be saved as `resized_output_image.png` in your project directory.**

## Example Output

```
Resizing /path/to/sample_image.png...
Original dimensions: 1000 x 800
Calculated width: 200, Calculated height: 160
Resized dimensions: 200 x 160
Resized image saved as /path/to/resized_output_image.png
Image processing complete.
```

## Troubleshooting

- **Ensure the input image file exists in the project root.**
- **Check that Node.js and npm are correctly installed.**
- **Review the console output for detailed error messages.**

### Notes

- The script prints the dimensions before and after resizing.
- To display the image, you can open the output file with your system’s default image viewer.
- You can adjust the `RESIZE_RATIO` variable to change the resize ratio.
