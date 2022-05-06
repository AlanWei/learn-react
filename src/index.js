import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JSXDemo from "./jsx/jsx";
import FunctionalDemo from "./components/functional";
import ClassDemo from "./components/class";
import StateDemo from "./hooks/state";
import EffectDemo from "./hooks/effect";
import ContextDemo from "./context/demo";
import { Layout, Index, Invoice, SentInvoices, NotFound } from "./routes/demo";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jsx" element={<JSXDemo />} />
        <Route
          path="/component-functional"
          element={<FunctionalDemo text="Hello World!" />}
        />
        <Route path="/component-class" element={<ClassDemo />} />
        <Route path="/hooks-state" element={<StateDemo />} />
        <Route path="/hooks-effect" element={<EffectDemo />} />
        <Route path="/context" element={<ContextDemo />} />
        <Route path="invoices" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path=":invoiceId" element={<Invoice />} />
          <Route path="sent" element={<SentInvoices />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
