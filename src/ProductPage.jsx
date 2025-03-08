function ProductPage() {
  return (
    <div>
      {/* 商品路徑 */}
      <nav className="bg-brand-01 text-white text-center nav">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 w-100">
            <li className="breadcrumb-item">
              <a href="#" className="text-white">
                全部商品
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-white">
                胸背牽繩
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              胸背帶
            </li>
          </ol>
        </nav>
      </nav>
      {/* 商品主要資訊 */}
      <div className="container mb-9">
        <div className="row align-items-center gx-0">
          <div className="col-md-6 col-12 img-container">
            <img
              src="https://picsum.photos/id/237/600/400"
              alt="Product"
              className="main-img img-fluid w-100"
            />
          </div>
          {/* 右邊的商品資訊 */}
          <div className="col-md-6 col-12 product-info">
            <h4 className="product-title">輕量化胸背</h4>

            <h4 className="product-price mt-4">NT$1,150</h4>

            {/* 商品數量 */}
            <div className="quantity-container mt-9">
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-outline-gray btn-quantity"
                >
                  -
                </button>
                <input
                  type="text"
                  className="quantity-input bg-white text-black mx-2"
                  value="1"
                  readOnly
                />
                <button
                  type="button"
                  className="btn btn-outline-gray btn-quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* 加入購物車與追蹤按鈕 */}
            <div className="product-actions mt-9">
              <button className="btn btn-add-to-cart w-100 py-2">
                加入購物車
              </button>
              <button className="btn text-gray-01 w-100 mt-2 py-2">
                追蹤清單
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 商品詳情 */}
      <div className="container">
        <div className="about-product  text-gray-01">
          <h4 className="text-center mb-5 bg-brand-03">商品資訊</h4>
          <p>
            輕量化胸背是一款輕量級、低調的狗狗背帶,既適合快節奏的活動,也適合那些喜歡極簡設計自由的寵物。
          </p>

          {/* 特色區塊 */}
          <div className="container text-dark mb-9">
            <h4 className="mb-5 text-dark">- 輕量化</h4>
            <p className="mb-5">輕量化設計,減少體積,確保日常穿戴舒適。</p>
            <img src="https://picsum.photos/id/237/600/400" alt="輕量化設計" />
          </div>

          <div className="container text-dark mb-9">
            <h4 className="mb-5 text-dark">- 自在行動輕量胸背</h4>
            <p className="mb-5">
              以輕便材質讓寵物如同沒穿戴般自在行動，適合日常散步及戶外活動。
            </p>
            <img src="https://picsum.photos/id/237/600/400" alt="自在行動" />
          </div>

          {/* 商品規格 */}
          <div className="product-info-container text-black">
            <table>
              <tbody>
                <tr>
                  <th>
                    <p className="title">材質</p>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="content">
                      外層：聚酯纖維（經 bluesign® 認證）
                      <br />
                      內裡：聚酯布料，經熱浮雕處理
                      <br />
                      扣環：鋁合金 V 形環
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p className="title">洗滌方式</p>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="content">
                      - 建議以冷水手洗
                      <br />
                      - 請以中性清潔劑洗滌
                      <br />- 請在通風處晾乾即可
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
