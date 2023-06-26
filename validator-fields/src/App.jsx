import { useState } from 'react';
import validator from 'validator';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [field, setField] = useState('cpf');
  const [valid, setValid] = useState(false);

  console.log(valid);

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleOption = (event) => {
    setField(event.target.value);
  };

  const handleValidator = (event) => {
    event.preventDefault();

    switch (field) {
      case 'hexColor':
        setValid(validator.isHexColor(input));
        break;

      case 'isEmail':
        setValid(validator.isEmail(input));
        break;

      case 'isURL':
        setValid(validator.isURL(input));
        break;

      case 'cpf':
        setValid(validator.isTaxID(input, 'pt-BR'));
        break;

      default:
        setValid(false);
        break;
    }
  }

  return (
    <div className='container'>
      <h1>
        Validador de Campos
      </h1>
      <form onSubmit={handleValidator}>
        <input
          type="text"
          placeholder="Insira aqui o valor"
          id="value"
          value={input}
          onChange={handleInput}
        />
        <select name="campo" id="option" onChange={handleOption}>
          <option value='cpf'>CPF</option>
          <option value='hexColor'>Cor Hexadecimal</option>
          <option value='isEmail'>Email</option>
          <option value='isURL'>URL</option>
        </select>
        <button id="button" type="submit">
          Validar
        </button>

        {valid ? (
          <span>{input} é um campo válido!</span>
        ) : (
          <p id="answer">Digite o valor, escolha a opção e clique em validar</p>
        )}
      </form>
    </div>
  );
}

export default App;
