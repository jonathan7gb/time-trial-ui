# Time Trial UI

Interface front-end para o sistema **Time Trial** — uma aplicação que exibe em tempo real os rankings de voltas cronometradas de carrinhos Hot Wheels em uma pista instrumentada com sensores.

> ⚙️ **Este repositório é o front-end da aplicação.**
> O back-end (API REST + WebSocket + MQTT) está disponível em:
> 👉 [https://github.com/PabloTzeliks/time-trial-api](https://github.com/PabloTzeliks/time-trial-api)

---

## 📖 Sobre o projeto

O **Time Trial UI** é uma Single Page Application (SPA) construída com React e TypeScript que consome em tempo real os dados gerados pela pista de corrida instrumentada.

### Como funciona a comunicação com o back-end

A comunicação em tempo real entre o front-end e o back-end é realizada através de **WebSocket**, com as camadas de transporte e mensageria fornecidas pelo **SockJS** e pelo protocolo **STOMP**:

1. **SockJS** estabelece a conexão com o endpoint `/ws-time-trial` exposto pelo back-end Spring Boot, garantindo compatibilidade com ambientes que não suportam WebSocket nativo por meio de fallbacks HTTP.
2. **STOMP** (Simple Text Oriented Messaging Protocol) é utilizado sobre o SockJS como protocolo de mensagens, permitindo que o cliente se inscreva em tópicos específicos do servidor.
3. O front-end se inscreve no tópico **`/topic/painel`**, onde o back-end publica atualizações sempre que um novo tempo de volta é registrado pelos sensores da pista.
4. Ao receber uma mensagem, o payload JSON é desserializado e o estado do painel é atualizado imediatamente, refletindo em tempo real os rankings de melhores tempos e voltas mais recentes na tela.

O fluxo completo é: **Sensores → MQTT → Back-end Spring Boot → WebSocket/STOMP → React UI**.

---

## ✨ Funcionalidades

- 🏆 **Ranking dos 10 mais rápidos** — exibe os melhores tempos registrados na pista
- 🕐 **Ranking dos 10 mais recentes** — exibe as últimas voltas realizadas
- 📡 **Atualização em tempo real** — os rankings são atualizados automaticamente via WebSocket sem necessidade de recarregar a página
- 👥 **Seção de equipe** — apresenta os membros do projeto
- 🌙 **Tema claro / escuro** — alternância de tema com persistência

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | 19 | Biblioteca principal de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Tipagem estática |
| [Vite](https://vite.dev/) | 7 | Bundler e servidor de desenvolvimento |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização utilitária |
| [SockJS Client](https://github.com/sockjs/sockjs-client) | 1.6 | Transporte WebSocket com fallback HTTP |
| [STOMP.js (`@stomp/stompjs`)](https://stomp-js.github.io/stomp-websocket/) | 7 | Protocolo de mensageria sobre WebSocket |
| [Lucide React](https://lucide.dev/) | — | Ícones |

---

## 🚀 Como executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/jonathan7gb/time-trial-ui.git
cd time-trial-ui

# Instale as dependências
npm install
```

### Executar em modo de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Build de produção

```bash
npm run build
```

### Pré-visualizar o build

```bash
npm run preview
```

---

## 🔗 Repositório relacionado

| Repositório | Descrição |
|---|---|
| [time-trial-api](https://github.com/PabloTzeliks/time-trial-api) | Back-end Spring Boot com REST API, WebSocket e integração MQTT |
