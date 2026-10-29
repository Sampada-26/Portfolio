# Portfolio

A personal portfolio built with React and Vite. The repository also contains a
Node.js/Express server scaffold.

## Requirements

- Node.js and npm

## Run the client

From the repository root, install the client dependencies and start the Vite
development server:

```bash
cd client
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). The
development server supports hot reloading as you edit the client.

## Client commands

Run these commands from the `client/` directory:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `client/dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Server status

The `server/` directory currently contains an Express/Mongoose scaffold, but it
does not yet have a server entry point or a start script. The backend cannot be
started yet. The portfolio client can be run on its own; no database setup is
needed for the current client.

## Project structure

```text
client/   React + Vite portfolio application
server/   Express + Mongoose server scaffold
```
