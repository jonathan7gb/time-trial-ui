import { useEffect, useState } from "react"
import SockJS from "sockjs-client"
import { Client, type IMessage } from "@stomp/stompjs"
import type { PainelSaidaDTO } from "../types/paineis"

export function usePainelWebSocket() {

  const [dados, setDados] = useState<PainelSaidaDTO | null>(null)

  useEffect(() => {

    const client = new Client({

      webSocketFactory: () => new SockJS("http://localhost:8080/ws-time-trial"),

      reconnectDelay: 5000,

      onConnect: () => {

        console.log("Conectado ao WebSocket")

        client.subscribe("/topic/painel", (message: IMessage) => {

            console.log("Mensagem recebida:", message.body)
          if (message.body) {
              
            const payload: PainelSaidaDTO = JSON.parse(message.body)

            setDados(payload)

          }

        })
      },

      onStompError: (frame) => {
        console.error("Erro STOMP:", frame.headers["message"])
      }

    })

    client.activate()

    return () => {
      client.deactivate()
    }

  }, [])

  return dados
}