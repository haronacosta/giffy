import React, { useEffect, useState } from 'react';
import Gift from './Gift';
import getGifts from '../services/getGifts';

const ListOfGifts = ({ params }) => {
  const [gifts, updateGifts] = useState([]);

  const [loading, setloading] = useState(false);

  const { keyword } = params;

  useEffect(() => {
    setloading(true);
    getGifts({ keyword }).then((gifts) => {
      updateGifts(gifts);
      setloading(false);
    });
  }, [keyword]);

  if (loading) {
    return <div className="loading">Por espere mientras cargamos...</div>;
  }

  return (
    <>
      <div className="gitfs-wrapper">
        {gifts.map(({ id, title, url }) => {
          return <Gift key={id} id={id} title={title} url={url} />;
        })}
      </div>
    </>
  );
};

export default ListOfGifts;
