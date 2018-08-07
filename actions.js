import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCESS, FETCHING_PEOPLE_FAILURE } from './constants';

export function fetchPeopleFromAPI() {
    return (dispatch) => {
        dispatch(getPeople())
        fetch("https://swapi.co/api/people/")
        .then(res => res.json())
        .then(json => dispatch(getPeopleSucess(json.results)))
        .catch(err => dispatch(getPeopleFailure(err)))
    }
}

function getPeople() {
    return {
        type: FETCHING_PEOPLE
    }
}

function getPeopleSucess(data) {
    return {
        type: FETCHING_PEOPLE_SUCESS,
        data
    }
}

function getPeopleFailure() {
    return {
        type: FETCHING_PEOPLE_FAILURE
    }
}