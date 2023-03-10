import "./App.css";
import Button from "./components/Button";
import InputField from "./components/InputField";
import Label from "./components/Label";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

const data = {
  products: [
    { title: "tablet", price: 80 },
    { title: "usb adaptor", price: 10 },
    { title: "e-reader", price: 35 },
    { title: "adaptor-cable", price: 8 },
    { title: "mobile cable", price: 10 },
    { title: "notebook", price: 600 },
    { title: "16-in monitor", price: 35 },
    { title: "led clipper", price: 5 },
    { title: "phone charger", price: 12 },
    { title: "e-chessboard", price: 44 },
  ],
  clients: [
    {
      name: "Josephine Smith",
      address: "Mariahilfe Strasse, 21",
      clientNumber: 1234,
      purchases: [10],
    },
    {
      name: "John Dias",
      address: "Maroastraat, 80",
      clientNumber: 2345,
      purchases: [9],
    },
    {
      name: "Rafaela Moreno",
      address: "Lumenstraat, 28",
      clientNumber: 4321,
      purchases: [8],
    },
    {
      name: "Arlindo Santos",
      address: "James Watsonstraat, 22",
      clientNumber: 2143,
      purchases: [7],
    },
    {
      name: "Robert Romaans",
      address: "Genovevastraat, 33",
      clientNumber: 3876,
      purchases: [6],
    },
    {
      name: "Iria Blooberg",
      address: "Jupiterlaan, 123",
      clientNumber: 3344,
      purchases: [5],
    },
    {
      name: "Maria Daniels",
      address: "Jack Daniel'sstraat, 66",
      clientNumber: 4466,
      purchases: [4],
    },
    {
      name: "Jacob Maurits",
      address: "Kikostraat, 10",
      clientNumber: 4567,
      purchases: [3],
    },
    {
      name: "Julius Frank",
      address: "Riachuelostraat, 17",
      clientNumber: 1718,
      purchases: [2],
    },
    {
      name: "Linus Lee",
      address: "Uranuslaan, 28",
      clientNumber: 8877,
      purchases: [1],
    },
  ],
  invoices: [
    { invoiceId: 1, clientId: 8877 },
    { invoiceId: 2, clientId: 1718 },
    { invoiceId: 3, clientId: 4567 },
    { invoiceId: 4, clientId: 4466 },
    { invoiceId: 5, clientId: 3344 },
    { invoiceId: 6, clientId: 3876 },
    { invoiceId: 7, clientId: 2143 },
    { invoiceId: 8, clientId: 432 },
    { invoiceId: 9, clientId: 2345 },
    { invoiceId: 10, clientId: 1234 },
  ],
};

const searchFunctions = {
  products: (query) => (product) => {
    return product.title.includes(query);
  },
  invoices: (query) => (invoice) => {
    return (
      invoice.invoiceId === parseInt(query) ||
      String(invoice.clientId).includes(query)
    );
  },
};

const mappers = {
  products: (product) => <li key={product.title}>{product.title}</li>,
  invoices: (invoice) => (
    <li key={invoice.invoiceId}>
      Id: {invoice.invoiceId}, client: {invoice.clientId}
    </li>
  ),
};

function App() {
  const [entity, setEntity] = useState("invoices");
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    const foundItems = data[entity].filter(searchFunctions[entity](query));
    setResults(foundItems);
  };

  // const result = products.filter((product) => product.title.includes(search));
  // console.log("result:", result);

  return (
    <div className="App">
      {/* <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setSearch(search)}>go</button> */}
      {results.map(mappers[entity])}
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setEntity(e.target.value);
        }}
      >
        {Object.keys(data).map((entity) => (
          <option>{entity}</option>
        ))}
      </select>
      <div>
        {/* <SearchBar
          label={<Label htmlFor="something">Search for users</Label>}
          input={<InputField placeholder="type something" id="something" />}
          button={<Button onClick={click}>Go</Button>}
        /> */}

        <SearchBar
          handleSearch={handleSearch}
          entity={entity}
          suggestions={data[entity].map((product) => product.title)}
        />
      </div>
    </div>
  );
}

export default App;
