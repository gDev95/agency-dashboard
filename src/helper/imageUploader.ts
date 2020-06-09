import { storage } from "../config/firebase.config";

export class ImageUploadHelper {
	private uploadedUrl: string = "";

	public upload(
		name: string,
		data: any,
		resolve: (url: string) => void,
		reject: (error: any) => void
	): void {
		const uploadImage = storage.ref(`images/${name}`).put(data);

		uploadImage.on(
			"state_changed",
			(snapshot: any) => {
				// @ts-ignore
			},
			(error: any) => {
				reject(error);
			},
			() => {
				return storage
					.ref("images")
					.child(name)
					.getDownloadURL()
					.then((url: any) => {
						resolve(url);
					});
			}
		);
	}

	public getUploadedImageUrl(): string {
		return this.uploadedUrl;
	}
}
