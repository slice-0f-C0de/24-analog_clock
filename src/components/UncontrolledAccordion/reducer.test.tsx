import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("collapsed should be true", () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

expect(newState.collapsed).toBe(false)
})

test("collapsed should be false", () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
})

test("reducer should throw error because action type is incorrect", () => {

    const state: StateType = {
        collapsed: false
    }

    expect(() => {
        reducer(state, {type: "FAKE TYPE"})
    }).toThrowError()
})