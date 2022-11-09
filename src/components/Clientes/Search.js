import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PromotionList from '../List/List';
import './Search.css';
import Api from '../services/Api';

const Search = () => {
  const [clientes, setClientes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = {};
    if (search) {
      params.name = search;
    }
    Api.get('/api/cliente/show?companyId=2', { params })
      .then((response) => {
        setClientes(response.data);
      });
  }, [search]);

  return (
    <div className="promotion-search">
      <header className="promotion-search__header">
        <h1>Promo Show</h1>
        <Link to="/create">Nova Promoção</Link>
      </header>
      <input
        type="search"
        className="promotion-search__input"
        placeholder="Buscar"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <PromotionList promotions={promotions} loading={!promotions.length} />
    </div>
  );
};

export default Search;