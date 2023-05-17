//1º parte - importes
import './App.css'
import '../src/componentes/helloworld'
import HelloWorld from '../src/componentes/helloworld'
//2º parte - processamento
function App(){

  const name='Sanji',sobreN='Vinsmoke'
  const idade='21'
  const num ='4º Membro da tripulação'
  const cor ="Cabelo Loiro"
  const prof= 'Cozinheiro'
  const sonho= 'Encontrar o All Blue (O mar onde há todos os peixes do mundo)'
  const url="./img/Sanji.gif"


  return(
    <>
    <div className='cor'>
      <div className='botao'>
        <button id='luffy'><a href='../luffy.html'>Luffy</a></button>
        <button id='zoro'><a href='../zoro.html'>Zoro</a></button>
        <button id='nami'><a href='../nami.html'>Nami</a></button>
        <button id='usopp'><a href='../usopp.html'>Usopp</a></button>
        <button id='sanji'><a href='../index.html'>Sanji</a></button>
        <button id='chopper'><a href='../chopper.html'>Chopper</a></button>
        <button id='robin'><a href='../robin.html'>Robin</a></button>
        <button id='franky'><a href='../franky.html'>Franky</a></button>
        <button id='brook'><a href='../brook.html'>Brook</a></button>
        <button id='jimbe'><a href='../jimbe.html'>Jimbe</a></button>
      </div>
    <div className='texto'>
      <h1>Mugiwaras</h1>
      <h2>Nome completo: {name +" "+ sobreN}</h2>
      <img src={url} alt="" />
      <div className='organico'>
        <p>Idade: {idade}</p>
        <p>Numero de entrada: {num} </p>
        <p>Cor do cabelo: {cor}</p>
        <p>Profissão no bando: {prof}</p>
        <p>Sonho: {sonho}</p>
      </div>
      </div>
    </div>
    </>
  )
}
//3º parte - exportis
export default App