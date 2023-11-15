'use server'

import { createOrder } from "@/app/services/apiRestaurant"
import { redirect } from 'next/navigation'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    );


export async function newOrder(prevState, formData) {
    const phone = formData.get('phone')
    const customer = formData.get('customer')
    const address = formData.get('address')
    const priority = formData.get('priority')
    const cart = formData.get('cart')

    if (!isValidPhone(phone)) return 'this is no a phone'

    const order = {
        phone, customer, address, priority: priority === 'on', cart: JSON.parse(cart)
    }

    const newOrder = await createOrder(order)


    redirect(`/order/${newOrder.id}`)


}
