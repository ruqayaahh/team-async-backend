import cloudinary from 'cloudinary';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryConfig = async (cvPath, photoPath) => {
  try {
    const cvData = await cloudinary.v2.uploader.upload(cvPath);
    const photoData = await cloudinary.v2.uploader.upload(photoPath);
    const data = [cvData, photoData];
    return data;
  } catch (error) {
    return (error);
  }
};

const generateUUID = () => uuidv4();

export {
  cloudinaryConfig,
  generateUUID,
};
