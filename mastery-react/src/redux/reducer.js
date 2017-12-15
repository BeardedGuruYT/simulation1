import axios from 'axios';



const initialState = {
    allHeroes: [],

}

const GET_ALL = 'GET_ALL';

export default function reducer (state = initialState, action){
    switch(action.type) {
        case 'GET_ALL':
        return Object.assign({}, state, {allHeroes: action.payload.data})

        default: return state
    }
}

export function getAll(){
    return {
        type: GET_ALL, 
        payload: axios.get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=a81a7793b9240c97113e5c4eaafab633&hash=0a515539961fbf79e59ceedf2bfc1297')
        .then(res => res)
    }
}