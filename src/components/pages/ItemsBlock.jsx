import React, { useState, useEffect } from 'react';
import { HttpHandler } from '../../http/handler';
import CardFree from '../../components/CardFree.jsx';
import CardPremium from '../../components/CardPremium.jsx';

function ItemsBlock() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [category, setCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true); // Nuevo estado para el spinner

  const handler = new HttpHandler();

  useEffect(() => {
    async function fetchData() {
      const result = await handler.getProduct('premium', 'desc');
      setData(result);
      setLoading(false); // Establecer el estado 'loading' en false cuando la llamada a la API haya finalizado
    }
    fetchData();
  }, []);

  let filteredItems = [];

  if (data.product) {
    filteredItems = data.product.filter(
      (item) =>
        item.status_shooping &&
        item.premium === true &&
        (category === '' || item.category === category) &&
        (searchText === '' || item.name.toLowerCase().includes(searchText.toLowerCase()))
    );
  }

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = filteredItems.slice(startIndex, endIndex);

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          {loading ? (
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          ) : (
            currentPageItems.map((item, index) => {
              const Component = item.premium ? CardPremium : CardFree;

              return (
                <div className="col-lg-4 col-md-6 col-12 my-1 mb-5" key={index}>
                  <Component item={item} image={item.images} title={item.name} description={item.description} price={item.price} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default ItemsBlock;