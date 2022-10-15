import "./App.css";
import { useState, useEffect } from "react";

// function Timeseries({ base }) {
//   return (
//     <div>
//       <h1>{base}</h1>
//     </div>
//   );
// }

const listItems = [
  { name: "vian", height: 5.7 },
  { name: "kat", height: 5.8 },
];
function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}> {renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return <List 
  data={listItems} 
  renderEmpty={<p>this list is empty</p>}
  renderItem={item => <>{item.name} - {item.height} ft.</>} />;
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch(
  //     `https://commodities-api.com/api/open-high-low-close/2022-10-14?access_key=a45j8kri99ls4lwqgp45o8358l4y6nfqv012ujr3p312cveb9kv8x40207q1&base=XAU&symbols=USD`
  //   )
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);
  // if (data) return <Timeseries base={data.base} />;
  // return <h1>Data</h1>;
}

export default App;
