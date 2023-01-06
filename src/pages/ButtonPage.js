import React from 'react';
import Button from '../components/Button';
import { GoBell } from 'react-icons/go'

function ButtonPage(){

    const handleClick = () => {

    }

    return(
        <div>
            <div>
                <Button secondary outline onClick={handleClick}>
                    <GoBell></GoBell>Click me!</Button>
            </div>
            <div>
                <Button danger rounded>Buy Now!</Button>
            </div>
            <div>
                <Button primary>See deals</Button>
            </div>
            <div>
                <Button success rounded outline>See deals</Button>
            </div>
            <div>
                <Button primary>See deals</Button>
            </div>
            <div>
                <Button primary>See deals</Button>
            </div>
        </div>
    );
}

export default ButtonPage;