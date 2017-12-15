import axios from 'axios';

const initialState = {
    allPlanets: []
}

const GET_ALL = 'GET_ALL';

export default function reducer (state = initialState, action){
    switch(action.type) {
        
        case GET_ALL:
        console.log("ACTION", action.payload)
        return Object.assign({}, state, {allPlanets: [...action.payload.data.results]})

        default: return state
    }
}

export function getAll(){
    return {
        type: GET_ALL, 
        payload: axios.get('https://swapi.co/api/planets').then(res => res) 
    }
}
