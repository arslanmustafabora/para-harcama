import './App.css';
import {useState, useEffect} from 'react';
import Header from "./components/header";
import products from './products.json';
import Product from "./components/product";
import Basket from "./components/basket";

function App() {

    const [money, setMoney] = useState(100000)
    const [basket, setBasket] = useState([])
    const [total, setTotal] = useState(0)

    const resetBasket = () => {
        setBasket([])
    }

    useEffect(() => {
        const p = basket.reduce((acc, item) => {
            return acc + (item.amount * (products.find(product => product.id === item.id).price))
        }, 0)
        setTotal(p)
    }, [basket])

    return (

        <div>

            <Header money={money} total={total}/>
            {products.map(product => (
                <Product product={product} basket={basket} setBasket={setBasket} key={product.id} total={total}
                         money={money}/>
            ))}
            {total > 0 && (<Basket basket={basket} products={products} total={total} resetBasket={resetBasket}/>)}

        </div>
    );
}

export default App;
