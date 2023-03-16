import axios from "axios";

export const API_URL = "https://fedevofferapi-info3.b4a.run";

export const $api = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
