// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import "./App.css";
import React, { useState } from 'react';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import "primereact/resources/themes/lara-light-indigo/theme.css"

import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

function App() {
  const [filters, setFilters] = useState({
    global: {value: null, matchMode: FilterMatchMode.CONTAINS}, 
  });

  const data = [
    {
      id: 1,
      name: "John",
      age: 25,
      city: "New York",
    },
    {
      id: 2,
      name: "Mark",
      age: 24,
      city: "USA",
    },
    {
      id: 3,
      name: "Cris",
      age: 27,
      city: "Germany",
    },
  ];

  // useEffect(() => {
  //   ProductService.getProductsMini().then(data => setProducts(data));
  // }, []);
  
  return (
    <div className="App">
      <Card>
        <div className="mb-3 w-full justify-start">
          <InputText onInput={(e) => 
            setFilters({
              global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS},
            })
          } placeholder="Keyword Search" className="bg-white border shadow-md px-3 py-3.5 "/>
            </div>
        <DataTable value={data} sortMode="multiple" filters={filters} tableStyle={{ minWidth: '50rem' }}>
          <Column field="id" header="ID" sortable></Column>
          <Column field="name" header="Name" sortable></Column>
          <Column field="age" header="Age" sortable></Column>
          <Column field="city" header="City" sortable></Column>
        </DataTable>
      </Card>
    </div>
  );
}

export default App;