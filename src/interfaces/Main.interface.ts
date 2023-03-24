export interface IVideo {
	id: number;
	image: string;
	title: string;
	description: string;
	text: string;
	detail: string;
}

export interface Production {
	year: string;
	country: string;
}

export interface Labels {
	fullhd: boolean;
	subtitles: boolean;
	age_restrictions: string;
}

export interface IVideoFeature {
	id: number;
	title: string;
	image: string;
	genre: string[];
	production: Production;
	labels: Labels;
}

export interface IComment {
	id: number;
	author: string;
	description: string;
	comment: string;
}

export interface IComments {
	pid: number;
	comments: IComment[];
}
