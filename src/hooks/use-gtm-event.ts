'use client'
import { useCallback } from 'react'
import { sendGTMEvent } from '@next/third-parties/google'

export function useGTMEvent() {
  const fireGTMEvent = useCallback(
    ({ event, payload = {} }: { event: string; payload?: Record<string, unknown> }) => {
      sendGTMEvent({
        event,
        ecommerce: {
          items: [
            {
              ...payload,
              ...({
                name: "sahadat",
                phone: '0123456789',
                email: "sahadat.hossen1435@gmail.com",
                price:4000,
              }),
            },
          ],
        },
      })
    },
    [],
  )

  return { fireGTMEvent }
}
