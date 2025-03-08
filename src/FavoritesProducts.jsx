import React, { useState } from "react";

const FavoritesProducts = () => {
  const [products, setProducts] = useState([
    {
      id: "1",
      category: "食品",
      image: "https://picsum.photos/200/300",
      title: "特價-咖哩牛肉罐頭-3",
      origin_price: 1000,
      price: 800,
    },
    {
      id: "2",
      category: "寵物用品",
      image: "https://picsum.photos/200/300",
      title: "貓咪旅遊-高蓬",
      origin_price: 250,
      price: 250,
    },
  ]);

  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="container">
      {/* 桌面版 (`lg` 以上顯示 Table) */}
      <div className="d-none d-lg-block">
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col">品名</th>
              <th scope="col" className="text-center">
                分類
              </th>
              <th scope="col" className="text-center">
                價格
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>
                  <a href={`/product/${item.id}`} className="product-link">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="product-image"
                    />
                    {item.title}
                  </a>
                </td>
                <td className="text-center">{item.category}</td>
                <td>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="price-container">
                      {item.price !== item.origin_price ? (
                        <>
                          <span className="product-origin-price">
                            NT$ {item.origin_price.toLocaleString()}
                          </span>
                          <span className="product-sale-price">
                            NT$ {item.price.toLocaleString()}
                          </span>
                        </>
                      ) : (
                        <span className="product-sale-price">
                          NT$ {item.origin_price.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      🗑️ 刪除
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 手機 & 平板版 */}
      <div className="d-block d-lg-none">
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} className="card product-card">
              <div className="d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image"
                />
                <div className="flex-grow-1 ms-3">
                  <h5>{item.title}</h5>
                  <p>分類: {item.category}</p>
                  <p className="d-flex align-items-center justify-content-between">
                    <span className="price-container text-center">
                      {item.price !== item.origin_price ? (
                        <>
                          <span className="product-origin-price">
                            NT$ {item.origin_price.toLocaleString()}
                          </span>
                          <span className="product-sale-price">
                            NT$ {item.price.toLocaleString()}
                          </span>
                        </>
                      ) : (
                        <span className="product-sale-price">
                          NT$ {item.origin_price.toLocaleString()}
                        </span>
                      )}
                    </span>
                    <button
                      className="btn btn-outline-danger btn-sm ms-2"
                      onClick={() => handleDelete(item.id)}
                    >
                      🗑️
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">沒有商品</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesProducts;
