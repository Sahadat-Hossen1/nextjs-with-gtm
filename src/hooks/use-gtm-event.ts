'use client'
import {useCallback} from 'react'
import {sendGTMEvent} from '@next/third-parties/google'

// import useSession from './use-session'

export function useGTMEvent() {
//   const {data} = useSession()

  const fireGTMEvent = useCallback(
    ({event, payload = {}}: {event: string; payload?: Record<string, unknown>}) => {
      sendGTMEvent({
        event,
        ecommerce: {
          items: [
            {
              ...payload,
              ...( {
                name: "sahadat",
                phone: '0123456789',
                email: "sahadat.hossen1435@gmail.com",
              }),
            },
          ],
        },
      })
    },
    [],
  )

  return {fireGTMEvent}
}