import './App.css'

function App() {
  const [field, setField] = useState('')

  handleValidator = () => {

  }

  return (
    <div>
      <h1>
        Validador de Campos
      </h1>
      <form>
        <input
          type="text"
          placeholder="Insira aqui o valor"
          id="value"
        >
        </input>
        <select name="campo" id="option">
          <option value='cpf'>CPF</option>
          <option value='hexColor'>Cor Hexadecimal</option>
          <option value='email'>Email</option>
          <option value='uuid'>UUID v4</option>
          <option value='url'>URL</option>
        </select>
        <button
          id="button"
          onClick={handleValidator}
        >
          Validar
        </button>

        <p id="answer">Digite o valor, escolha a opção e clique em validar</p>
      </form>
    </div>
  )
}

export default App
