import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createServer, Model } from "miragejs";

createServer({
  models: {
    transactions: Model,
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => this.schema.all("transactions"));
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transactions", data);
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
