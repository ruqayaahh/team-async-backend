const cloudinary = require("cloudinary)";
const Datauri = require("datauri");
const { config } = require('dotenv');

const datauri = new Datauri();
config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinaryConfig = async (file, image) => {
    try {
        datauri.format('.png', image.buffer);
        datauri.format('.pdf', file.buffer)
        const fileBuffer = datauri.content;
        const imageBuffer = datauri.content;
        const cvData = await cloudinary.v2.uploader.upload(fileBuffer);
        const imageData = await cloudinary.v2.uploader.upload(imageBuffer);
        const data = [cvData, imageData];
        return data;
    } catch (error) {
        return (error);
    }  
};

const cloudinaryUpload = async (req, res, next) => {
    try {
      console.log(req.files);
      const data = await cloudinaryConfig(req.files.file.tempFilePath, req.files.image.tempFilePath);
      console.log('data', data);
  
      req.body.cv = data[0].secure_url;
      req.body.photo = data[1].secure_url;
      next();
    } catch (error) {
      console.log(error);
    }
  };
  
module.exports = { cloudinaryUpload };
