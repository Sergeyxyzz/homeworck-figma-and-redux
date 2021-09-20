import { createStore } from 'redux';
import './index.css';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'DEF':
            return 0
        default: 
            return state
    }
}

const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const def = () => ({type: 'DEF'})

let store = createStore(reducer)

document.querySelector('#plus').addEventListener('click', () => {
    store.dispatch(inc())
})

document.querySelector('#minus').addEventListener('click', () => {
    store.dispatch(dec())
})

document.querySelector('#reset').addEventListener('click', () => {
    store.dispatch(def())
})

const update = () => {
    document.querySelector('#counterText').textContent = store.getState()
}

store.subscribe(update)