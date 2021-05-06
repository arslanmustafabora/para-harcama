import {useState} from 'react';
import {moneyFormat} from "../helper";

function Header({money, total}){

    return(
        <div className="header">
            {money-total !==0 && total > 0 && (
                <p>Harcamak için ${moneyFormat(money-total)} para kaldı</p>
            )}
            {total === 0 && (
                <p>Harcamak için ${moneyFormat(money)} para var, hiçbir şey almadın</p>
            )}
            {money-total === 0 && (
                <p>Para bitti mal çocuk</p>
            )}
            <style jsx>{`
            .header{
                background: linear-gradient(to bottom, yellow, green);
                height: 50px;
                color: white;
                font-size: 20px;
                letter-spacing: 1px;
           
                display: flex;
                align-items: center;
                justify-content: center;
                
                position: sticky;
                top: 0px;
            }
            `}</style>
        </div>
    )
}

export default Header;
