import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Count from "./Count";

type People = {
  name: string;
  age: number;
  location?: string; // ? là có cũng được ko có cũng ko sao
};
// type Emloyee = {
//   name: string;
//   age: number;
//   jobtitle: string;
// };

// hoặc do People và Emloyee đều có name và age nên dùng chung và điền thêm
type Emloyee = People & {
  name: string;
  age: number;
  jobtitle: string;
};

// interface IPeople {
//   name: string;
//   age: number;
//   location?: string;
// }

// interface IRealationship {
//   wifeName: string;
//   childName: string;
// }

// interface IEmployee extends IPeople, IRealationship {
//   jobTitle: string;
//   degree: Degree;
//   level?: string | number | Degree;
// }

// enum Degree {
//   ASSOCIATES = 'ASSOCIATES',
//   BACHELORS = 'BACHELORS',
//   MASTERS = 'MASTERS',
//   DOCTORATE = 'DOCTORATE',
//   PROFESSIONAL = 'PROFESSIONAL',
// }
//////////////////////////////
// type ApiResponse = {
//   data: { id: number; name: string };
//   status: 'success' | 'failure';
// };
// type BookResponse = {
//   data: { id: number; bookName: string };
//   status: 'success' | 'failure';
// };
////////////////////


type ApiResponse<DataType> = {
  data: DataType;
  status: 'success' | 'failure';
};

function App() {
  const [count, setCount] = useState<number>(0);
  const [people, setPeople] = useState<People>();
  const emloyee: Emloyee = {
    name: "Emloyee",
    age: 25,
    jobtitle: "FE",
  };
  //   const employee: IEmployee = {
  //   name: 'Employee',
  //   age: 48,
  //   jobTitle: 'Software Engineer',
  //   degree: Degree.MASTERS, //enum đây =>  degree: MASTERS
  //   wifeName: 'ABC',
  //   childName: 'BCD',
  //   level: Degree.PROFESSIONAL
  // };

//   const employee2: typeof employee = {
//   name: 'Employee2',
//   age: 48,
//   jobTitle: 'Software Engineer',
//   degree: Degree.MASTERS,
//   wifeName: 'ABC',
//   childName: 'BCD',
//   level: Degree.PROFESSIONAL,
// };

//////////////
// const userResponse: ApiResponse = {
//   data: { id: 1, name: 'John' },
//   status: 'success'
// };
// const bookResponse: BookResponse = {
//   data: { id: 1, bookName: 'NGUOI PHAN XU' },
//   status: 'success',
// };
/////////////////
const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: 'John' },
  status: 'success',
};

const bookResponse: ApiResponse<{ id: number; bookName: string }> = {
  data: { id: 1, bookName: 'NGUOI PHAN XU' },
  status: 'success',
};



  function total(number1: number, number2: number): string {
    return String(number1 + number2);
  }

  console.log(emloyee, people, userResponse, bookResponse);

  useEffect(() => {
    setPeople({
      name: "Toi hoc TS",
      age: 23,
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Count count={count} setCount={setCount} total={total} />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
