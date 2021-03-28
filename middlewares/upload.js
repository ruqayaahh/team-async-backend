import { cloudinaryConfig } from '../utils/helpers';

const cloudinaryUpload = async (req, res, next) => {
  try {
    const data = await cloudinaryConfig(req.files.cv.tempFilePath, req.files.photo.tempFilePath);
    req.body.cv = data[0].secure_url;
    req.body.photo = data[1].secure_url;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default cloudinaryUpload;
