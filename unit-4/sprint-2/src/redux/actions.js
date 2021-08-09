import axios from "axios";
import {
	GET_MOVIES_DATA_FAILURE,
	GET_MOVIES_DATA_REQUEST,
	GET_MOVIES_DATA_SUCCESS,
} from "./actionTypes";

const getMoviesDataRequest = () => {
	return { type: GET_MOVIES_DATA_REQUEST };
};
const getMoviesDataSuccess = (payload) => {
	return { type: GET_MOVIES_DATA_SUCCESS, payload: payload };
};
const getMoviesDataFailure = () => {
	return { type: GET_MOVIES_DATA_FAILURE };
};
export const getMoviesData = () => (dispatch) => {
	dispatch(getMoviesDataRequest());
	try {
		axios.get("http://localhost:3004/movies").then((res) => {
			console.log(res.data);
			dispatch(getMoviesDataSuccess(res.data));
		});
	} catch (e) {
		dispatch(getMoviesDataFailure());
	}
};
