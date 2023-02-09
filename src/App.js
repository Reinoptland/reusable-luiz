import "./App.css";
import Button from "./components/Button";
import InputField from "./components/InputField";
import Label from "./components/Label";
import SearchBar from "./components/SearchBar";

function App() {
  const click = () => {
    console.log("Hey you!");

    const products = [
      { title: "tablet", price: 80 },
      { title: "usb adpator", price: 10 },
      { title: "e-reader", price: 35 },
      { title: "adaptor-cable", price: 8 },
      { title: "mobile cable", price: 10 },
      { title: "notebook", price: 600 },
      { title: "16-in monitor", price: 35 },
      { title: "led clipper", price: 5 },
      { title: "phone charger", price: 12 },
      { title: "e-chessboard", price: 44 },
    ];
  };

  const clients = [
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
  ];

  const invoices = [
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
  ];

  return (
    <div className="App">
      <div>
        <SearchBar
          label={<Label />}
          input={<InputField />}
          button={<Button />}
        />
      </div>
    </div>
  );
}

export default App;
