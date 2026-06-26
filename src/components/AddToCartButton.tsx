'use client'

<<<<<<< HEAD
import { useCallback } from 'react'
import { useGTMEvent } from '@/hooks/use-gtm-event'
import type { Product } from '@/data/products'
=======
import {useCallback} from 'react'
import {useGTMEvent} from '@/hooks/use-gtm-event'
import type {Product} from '@/data/products'
>>>>>>> 161ec365b7b4056a3dd12d38408ed4f009e392ad

interface AddToCartButtonProps {
  product: Product
  className?: string
}

<<<<<<< HEAD
export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { fireGTMEvent } = useGTMEvent()
=======
export function AddToCartButton({product, className}: AddToCartButtonProps) {
  const {fireGTMEvent} = useGTMEvent()
>>>>>>> 161ec365b7b4056a3dd12d38408ed4f009e392ad

  const handleAddToCart = useCallback(() => {
    fireGTMEvent({
      event: 'add_to_cart_button',
      payload: {
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        price: product.price,
      },
    })
  }, [fireGTMEvent, product])

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className={className}
    >
      Add to Cart
    </button>
  )
}
