'use server'

import { createOrder } from "@/app/services/apiRestaurant"
import { redirect } from 'next/navigation'

export async function newOrder(prevState, formData) {
    const phone = formData.get('phone')
    const customer = formData.get('customer')
    const address = formData.get('address')
    const priority = formData.get('priority')
    const cart = formData.get('cart')

    const order = {
        phone, customer, address, priority: priority === 'on', cart: JSON.parse(cart)
    }

    const newOrder = await createOrder(order)


    redirect(`/order/${newOrder.id}`)


}
