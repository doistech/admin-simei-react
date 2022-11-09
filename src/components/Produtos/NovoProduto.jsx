import React, { useMemo, useState } from 'react'
import { Button, Form } from "react-bootstrap"
import Menu from '../Menu/Menu';
import Api from '../services/Api';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function NovoProduto() {
  
  const [CodigoEan, setEan] = useState('');
  const [Descricao, setDescricao] = useState('');
  const [name, setName] = useState('');
  const [precoDeCusto, setPrecoDeCusto] = useState(0.00);
  const [lucroVarejo, setLucroVarejo] = useState(0.00);
  const [precoVarejo, setPrecoVarejo] = useState((precoDeCusto*(lucroVarejo/100))+precoDeCusto);
  const [lucroAtacado, setLucroAtacado] = useState(0.00);
  const [precoDeAtacado, setPrecoAtacado] = useState(0.0);
  const [quantidadeAtacado, setQuantidadeAtacado] = useState(0.00);
  




return(
<div>


<li>{precoVarejo}</li>
<input type="number" value={precoDeCusto} onChange={(e) => setPrecoDeCusto(e.target.value)}/>
<input type="number" value={lucroVarejo} onChange={(e) => setLucroVarejo(e.target.value)}/>
<input type="number" value={precoVarejo} onChange={(e) => setPrecoVarejo(e.target.value)}/>
<input type="number" value={lucroAtacado} onChange={(e) => setLucroAtacado(e.target.value)}/>
<input type="number" value={precoDeAtacado} onChange={(e) => setPrecoAtacado(e.target.value)}/>
<input value={quantidadeAtacado} onChange={(e) => setQuantidadeAtacado(e.target.value)}/>

</div>



)





}