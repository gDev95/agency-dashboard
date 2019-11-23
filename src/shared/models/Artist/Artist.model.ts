export interface Label {
	logoUrl: string;
	link: string;
}

export interface Rider {
	equipment: string[];
	equipmentImageUrl: string;
}

export interface ArtistBasicInformation {
	name: string;
	description: string;
	logoUrl: string;
	coverImageUrl: string;
	profileImageUrl: string;
}

export interface ArtistAdvancedInformation {
	labels: Label[];
	rider: Rider;
	hospitality: string[];
}

export interface SocialMediaLinks {
	facebook: string;
	beatport: string;
	instagram: string;
	soundCloud: string;
	residentAdvisor: string;
}

export interface Events {
	date: Date;
	start: string;
	end: string;
	location: string;
	city: string;
	socialMediaLinks: SocialMediaLinks;
}

export interface ArtistInterface {
	basicInformation: ArtistBasicInformation;
	socialMedia: SocialMediaLinks;
	createdAt: string;
	events?: Events[];
}

export interface ArtistListItem {
	id: string;
	createdAt: string;
	basicInformation: {
		name: string;
	};
}

export interface ArtistList {
	artists: ArtistListItem[];
}
