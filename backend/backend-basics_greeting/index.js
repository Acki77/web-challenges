import { server } from "./server.js";
const port = 8000;

server.listen(8000, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
