'use client'
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [{ pizzaId: 12, name: 'medetirania', quantity: 2, unitPrice: 16, totalPrice: 32 }]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action)
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity++
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice
        },
        clearCart(state, action) {
            state.cart = []
        }
    }
}
)

export const { addItem } = cartSlice.actions

export default cartSlice.reducer