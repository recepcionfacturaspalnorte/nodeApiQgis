import { Response, Request } from 'express';

import path from 'path';
import { fileURLToPath } from 'url';
import { UploadedFile } from 'express-fileupload';

import { FileUploadService } from '../../services/file-upload.service';

import { CustomError } from '../../domain/errors/custom.error';
import { log } from 'console';

function extractFiles(req: any): UploadedFile[] {
  if (!req.files) return [];

  // Caso 1: req.files.file
  if (req.files.file) {
    return Array.isArray(req.files.file)
      ? req.files.file
      : [req.files.file];
  }

  // Caso 2: req.files.files.file  ← TU CASO
  if (req.files.files?.file) {
    return Array.isArray(req.files.files.file)
      ? req.files.files.file
      : [req.files.files.file];
  }

  return [];
}

export class FileUploadController {

  // DI
  constructor(
    private readonly fileUploadService: FileUploadService,
  ) { }


  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error' });
  };


  uploadFile = async (req: Request, res: Response) => {
    console.log('upload file');
    //console.dir(req.files, { depth: null });

    const files = extractFiles(req);

    if (files.length === 0) {
      throw CustomError.badRequest('No files uploaded');
    }
    //log({ files });


    const type = req.params.type;
    //console.log(files);

    console.log({ type });

    //res.json(file);
    //return;

    const fileUploadService = new FileUploadService();
    if (files.length == 1)
      await fileUploadService.uploadSingle(files[0], type)
        .then(uploaded => res.json(uploaded))
        .catch(error => this.handleError(error, res))

        ;
    //res.json(files);
    /*
        fileUploadService.uploadSingle(files, `uploads/${type}`)
          .then(uploaded => res.json(uploaded))
          .catch(error => this.handleError(error, res))
    */
  };




  uploadMultipleFiles = (req: Request, res: Response) => {
    console.log('upload Multiple files');
    const type = req.params.type;
    //const files = req.body.files as UploadedFile[]; undefined
    const files = req.files?.files as UploadedFile[]; // si el campo se llama "files"
    //console.log({ files });
    console.log('dirname en controler:');

    console.log(__dirname);
    const projectRoot = path.resolve(__dirname, `../../../uploads/${type}/`); // ajusta según tu estructura
    console.log('projectRoot:');

    console.log(projectRoot);

    this.fileUploadService.uploadMultiple(files, `${projectRoot}`)
      .then(uploaded => res.json(uploaded))
      .catch(error => this.handleError(error, res))

  };


  deleteFile = (req: Request, res: Response) => {
    console.log('delete file');
    const type = req.params.type;
    const name = req.params.name;
    //const file = req.body.files.at(0) as UploadedFile;
    //const file = req.files?.file as UploadedFile; // si el campo en el form-data se llama "file"
    console.log({ type });

    //res.json(file);
    //return;


    this.fileUploadService.deleteFile(`uploads/${type}/${name}`)
      .then(resp => res.status(200).json(resp))
      .catch(error => this.handleError(error, res))

  };


}