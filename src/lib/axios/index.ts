import axios from 'axios';
import { variables } from '../constants';

export const appAxios = axios.create({
	baseURL: variables.BACKEND_API
	// baseURL: "http://localhost:8000/api",
	//   headers: {
	//     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
	//     "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
	//   },
});
