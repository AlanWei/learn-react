import { Link, Outlet, useParams } from "react-router-dom";

function Layout() {
  return (
    <div className="app">
      <h1>Invoices</h1>
      <Outlet />
    </div>
  );
}

function Index() {
  return (
    <div>
      <h1>Index</h1>
      <h2>
        <Link to="/invoices/123">Invoice with ID</Link>
      </h2>
      <h2>
        <Link to="/invoices/sent">Sent Invoice</Link>
      </h2>
      <h2>
        <Link to="/invoices/hello/world">Not Found</Link>
      </h2>
    </div>
  );
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
