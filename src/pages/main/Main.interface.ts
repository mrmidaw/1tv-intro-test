export interface IVideo {
	id: number;
	image: string;
	title: string;
	description: string;
	text: string;
	detail: string;
}

export interface IComment {
	id: number;
	author: string;
	description: string;
	comment: string;
}

export interface IComments {
	pid: number;
	comments: Comment[];
}
