import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname); // safer unique filename
  }
});

const upload = multer({ storage });

// This allows handling multiple image fields (image1, image2, etc.)
export const productUpload = upload.fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
  { name: "image3", maxCount: 1 },
  { name: "image4", maxCount: 1 }
]);

export default upload;
