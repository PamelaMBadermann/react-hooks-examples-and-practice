import { useState, useEffect, useRef } from 'react';

export default function Components() {
  const [valor, setValor] = useState(1);
  const [dobro, setDobro] = useState(1);
  const [nome, setNome] = useState('oi');

  console.log('RENDER');

  function onClickCounter() {
    setValor(valor + 1);
  }

  // só executa quando algum valor do array mudar
  useEffect(() => {
    console.log('RENDER EFFECT');
    // setDobro(dobro * 2);
    setDobro(dobroVelho => dobroVelho * 2);
  }, [nome, valor]);

  // só executa uma vez, quando o componente for renderizado
  useEffect(() => {
    console.log('RENDER EFFECT VARIAÇÃO');
  }, []);

  // executa toda vez que o componente for renderizado
  useEffect(() => {
    console.log('RENDER EFFECT VARIAÇÃO 2');
  }, []);

  const input = useRef(null);
  const div = useRef(null);

  function onUseRef() {
    console.log(input.current.value);
    console.log(div.current);
  }

  return(
    <>
      <h1>Hooks</h1>
      <div>
        <h2>useState</h2>
        { valor } - { dobro }
        <button type="button" onClick={onClickCounter}>+ 1</button>
        {/* <button type="button" onClick={() => setValor(valor + 1)}>+ 1</button> */}
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
      </div>
      <div>
        <h2>useEffect</h2>
      </div>
      <div ref={div}>
        <h2>useRef</h2>
        <input type="text" value={input} />
        <button type="button" onClick={onUseRef}>faz algo usando useRef</button>
      </div>
    </>
  );
}

// parei em 1:07:22