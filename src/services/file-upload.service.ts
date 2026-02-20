import { UploadedFile } from 'express-fileupload';
import cloudinary from '../config/cloudinary';
import { CustomError } from '../domain/errors/custom.error';

export class FileUploadService {

  async uploadSingle(
    file: UploadedFile,
    folder: string = 'uploads',
    validExtensions: string[] = ['png', 'gif', 'jpg', 'jpeg', 'webp']
  ) {


    //console.log("file en FileuploadService:");
    //console.log({ file });


    try {

      const fileExtension = file.mimetype.split('/').at(1) ?? '';

      if (!validExtensions.includes(fileExtension)) {
        throw CustomError.badRequest(
          `Invalid extension: ${fileExtension}, valid ones ${validExtensions}`
        );
      }
      console.log("file");
      console.log(file);

      console.log("file.tempFilePath");
      console.log(file.tempFilePath);

      // Subir a Cloudinary usando tempFilePath
      const result = await cloudinary.uploader.upload(
        file.tempFilePath,
        {
          folder,
        }
      );

      return {
        url: result.secure_url,
        public_id: result.public_id,
      };

    } catch (error) {
      console.log({ error });

      throw error;
    }
  }

  async uploadMultiple(
    files: UploadedFile[],
    folder: string = 'uploads',
    validExtensions: string[] = ['png', 'jpg', 'jpeg', 'gif', 'webp']
  ) {

    const fileArray = Array.isArray(files) ? files : [files];

    const uploads = await Promise.all(
      fileArray.map(file =>
        this.uploadSingle(file, folder, validExtensions)
      )
    );

    return uploads;
  }

  async deleteFile(publicId: string): Promise<boolean> {
    const result = await cloudinary.uploader.destroy(publicId);

    console.log('Cloudinary delete result:', result);

    return result.result === 'ok';
  }
}
