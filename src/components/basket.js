import {useState} from 'react';
import BasketItem from "./basketItem";

function Basket({basket, resetBasket, products, total}) {
    return (
        <div>
            {
                basket.map(item => (
                    <BasketItem item={item} product={products.find(p => p.id === item.id)}/>

                ))
            }
            <div>
                Toplam: ${total}
            </div>
            <button onClick={resetBasket}> Sıfırla </button>
        </div>
    )
}

export default Basket;
