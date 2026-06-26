'use client'
<<<<<<< HEAD
import { useCallback } from 'react'
import { sendGTMEvent } from '@next/third-parties/google'

export function useGTMEvent() {
  const fireGTMEvent = useCallback(
    ({ event, payload = {} }: { event: string; payload?: Record<string, unknown> }) => {
=======
import {useCallback} from 'react'
import {sendGTMEvent} from '@next/third-parties/google'

// import useSession from './use-session'

export function useGTMEvent() {
//   const {data} = useSession()

  const fireGTMEvent = useCallback(
    ({event, payload = {}}: {event: string; payload?: Record<string, unknown>}) => {
>>>>>>> 161ec365b7b4056a3dd12d38408ed4f009e392ad
      sendGTMEvent({
        event,
        ecommerce: {
          items: [
            {
              ...payload,
<<<<<<< HEAD
              ...({
=======
              ...( {
>>>>>>> 161ec365b7b4056a3dd12d38408ed4f009e392ad
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

<<<<<<< HEAD
  return { fireGTMEvent }
}
=======
  return {fireGTMEvent}
}
>>>>>>> 161ec365b7b4056a3dd12d38408ed4f009e392ad
