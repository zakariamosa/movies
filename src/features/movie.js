import { createAction, createReducer } from "@reduxjs/toolkit";

const addtoshopkart=createAction('add movie to shop cart')
const checkout=createAction('do pay to be apple to have access to items')

const actions = {addtoshopkart, checkout};

const initialState = 0;//the shop cart default value

const reducer = createReducer(initialState, {
    [addtoshopkart]:(state, action)=>state + 1,
    [checkout]:(state, action)=>initialState
})

export {actions, reducer};