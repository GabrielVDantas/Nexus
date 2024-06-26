import Screenshot from "../../models/Images/Screenshot";

class ImageService {
    static async convertCoverArtToBase64(coverArtAsBuffer: Buffer) {
        return Buffer.from(coverArtAsBuffer).toString('base64');
    }

    static async convertScreenshotsToBase64(screenshots: Screenshot[]) {
        return screenshots.map((screenshot) => {
            return Buffer.from(screenshot.imageBuffer).toString('base64');
        })
    }
}

export default ImageService;