import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCESS, FETCHING_PEOPLE_FAILURE, } from './constants';

export function fetchPeopleFromAPI() {
    return (dispatch) {
        dispatch(getPeople())
    }
}

function getPeople() {
    return {
        type: FETCHING_PEOPLE
    }
}

function getPeopleSucess(data) {
    return {
        type: FETCHING_PEOPLE_SUCESS
    }
}

function getPeopleFailure() {
    return {
        type: FETCHING_PEOPLE_FAILURE
    }
}