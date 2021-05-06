import {useState} from 'react';
import {moneyFormat} from "../helper";

function Header({money, total}){

    return(
        <div>
            {money-total !==0 && total > 0 && (
                <p>Harcamak için ${moneyFormat(money-total)} para kaldı</p>
            )}
            {total === 0 && (
                <p>Harcamak için ${moneyFormat(money)} para var, hiçbir şey almadın</p>
            )}
            {money-total === 0 && (
                <p>Para bitti mal çocuk</p>
            )}
        </div>
    )
}

export default Header;
