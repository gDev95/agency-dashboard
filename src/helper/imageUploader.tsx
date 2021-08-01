import { storage } from '../config/firebase.config';

export class ImageUploadHelper {
  private uploadedUrl = '';
  // eslint-disable-next-line
  public upload(name: string, data: any, resolve: (url: any) => void, reject: (error: any) => void): void {
    const uploadImage = storage.ref(`images/${name}`).put(data);

    uploadImage.on(
      'state_changed',
      null,
      (error) => {
        reject(error);
      },
      () => {
        return storage
          .ref('images')
          .child(name)
          .getDownloadURL()
          .then((url) => {
            resolve(url);
          });
      },
    );
  }

  public getUploadedImageUrl(): string {
    return this.uploadedUrl;
  }
}
