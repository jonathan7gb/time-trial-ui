# Time Trial UI

Interface front-end para o sistema **Time Trial** — uma aplicação que exibe rankings de voltas cronometradas de carrinhos Hot Wheels em uma pista instrumentada com sensores.

> ⚙️ **Este repositório é o front-end da aplicação.**
> O back-end (API REST + WebSocket + MQTT) está disponível em:
> 👉 [https://github.com/PabloTzeliks/time-trial-api](https://github.com/PabloTzeliks/time-trial-api)

---

## ✨ Funcionalidades

- 🏆 **Ranking dos 10 mais rápidos** — exibe os melhores tempos registrados na pista
- 🕐 **Ranking dos 10 mais recentes** — exibe as últimas voltas realizadas
- 👥 **Seção de equipe** — apresenta os membros do projeto
- 🌙 **Tema claro / escuro** — alternância de tema com persistência

---

## 🛠️ Tecnologias

| Tecnologia | Versão |
|---|---|
| [React](https://react.dev/) | 19 |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 |
| [Vite](https://vite.dev/) | 7 |
| [Tailwind CSS](https://tailwindcss.com/) | 4 |
| [Lucide React](https://lucide.dev/) | — |

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
