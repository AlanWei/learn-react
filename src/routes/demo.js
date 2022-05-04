import { Outlet, useParams } from "react-router-dom";

function Layout() {
  return (
    <div className="app">
      <h1>Invoices</h1>
      <Outlet />
    </div>
  );
}

function Index() {
  return <h1>Index</h1>;
}

function Invoice() {
  let { invoiceId } = useParams();
  return <h1>Invoice {invoiceId}</h1>;
}

function SentInvoices() {
  return <h1>Sent Invoices</h1>;
}

function NotFound() {
  return <h1>404</h1>;
}

export { Layout, Index, Invoice, SentInvoices, NotFound };
