import { useState } from 'react';
import Axios from 'axios';

import './App.css';

function App() {

  const [workerName, setWorkerName] = useState("");
  const [workerAge, setWorkerAge] = useState(0);
  const [workerGender, setWorkerGender] = useState("");
  const [workerPosition, setWorkerPosition] = useState("");
  const [workerWage, setWorkerWage] = useState(0);

  const [employeesList, setEmployeeList] = useState([]);

  const saveEmployee = () => {
    Axios.post('http://localhost:3001/cadastro', {
      name: workerName,
      age: workerAge,
      gender: workerGender,
      position: workerPosition,
      wage: workerWage
    }).then(() => {
      console.log("Sucesso");
    })
  };

  const getEmployees = () => {
    Axios.get('http://localhost:3001/funcionarios', {

    }).then((response) => {
      console.log(response);
    })
  }

  return (
    <div className="App">
      <div className="Form">
        <h1><b>Cadastrar funcionário</b></h1>
        <label>Nome: </label>
        <input type="text" onChange={
          (event) => {
            setWorkerName(event.target.value)
            }
        }/>
        <label>Idade: </label>
        <input type="number" onChange={
          (event) => {
            setWorkerAge(event.target.value)
            }
        }/>
        <label>Gênero: </label>
        <input type="text" onChange={
          (event) => {
            setWorkerGender(event.target.value)
            }
        }/>
        <label>Posição: </label>
        <input type="text" onChange={
          (event) => {
            setWorkerPosition(event.target.value)
            }
        }/>
        <label>Salário (anual): </label>
        <input type="number" onChange={
          (event) => {
            setWorkerWage(event.target.value)
            }
        }/>
      </div>
      <div className="Buttons">
        <button name="btnSave" id="btnSave" onClick={saveEmployee}>Salvar</button>
        <button name="btnCancel" id="btnCancel">Cancelar</button>
      </div>
      <div className="EmployeesList">
        <button id="btnStd" onClick={getEmployees}>Mostrar funcionários</button>
      </div>
    </div>
  );
}

export default App;
