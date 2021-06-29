import React, { useState } from 'react';
import ItemData from '../data/data1.json';

import utilStyles from '../styles/utils.module.css';

const Counter = (list: string[]) => {
  const dic: any = {};
  for (let i = 0; i < list.length; i++) {
    if (list[i] in dic) {
      dic[list[i]] += 1;
    } else {
      dic[list[i]] = 1;
    }
  }
  return dic;
};

const Market = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [amount, setAmount] = useState<number>(0);
  let cartDic: any = {};
  let key = Object.keys(cartDic);

  return (
    <>
      <h2>カートの中身</h2>
      <div className={utilStyles.cart}>
        {(() => {
          for (let i = 0; i < cartDic.length; i++) {
            return (
              <li>
                {cartDic[i]}:{key[i]}
              </li>
            );
          }
        })()}
      </div>
      <h3>合計金額{amount}</h3>
      <button>会計</button>
      <div className={utilStyles.itemList}>
        {ItemData.map((item, i) => {
          return (
            <div className={utilStyles.itemBox}>
              <button
                className={utilStyles.item}
                onClick={() => {
                  if (item.stock > 0) {
                    cart.push(item.name);
                    cartDic = Counter(cart);
                    setAmount(amount + item.price);
                    item.stock -= 1;
                  } else {
                    alert('この商品売り切れです');
                  }
                }}
              >
                <h1>{item.name}</h1>
                <h2>価格:{item.price}¥</h2>
                <p>在庫数:{item.stock}</p>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Market;
