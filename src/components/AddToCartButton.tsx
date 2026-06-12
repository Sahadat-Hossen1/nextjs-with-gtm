'use client'

import {useCallback} from 'react'
import {useGTMEvent} from '@/hooks/use-gtm-event'
import type {Product} from '@/data/products'

interface AddToCartButtonProps {
  product: Product
  className?: string
}

export function AddToCartButton({product, className}: AddToCartButtonProps) {
  const {fireGTMEvent} = useGTMEvent()

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
