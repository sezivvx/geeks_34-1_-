import React from 'react';
import Buttons from "../../components/buttons/Buttons";
import User from "../user/User";
import Input from "../input/Input";
import Example from "../../components/example/Example";

const MainPage = () => {
    return (
        <React.Fragment>
            <Buttons/>
            <User name={'Bakyt'} age={18}/>
            <User name={'Kuban'} age={30}/>
            <User name={'Ermek'} age={10}/>


            <Input/>
            <Example>
                <p style={{color:'red',fontSize:'20px'}}>User</p>
                <p>Age</p>
            </Example>
            <input/>
        </React.Fragment>
    );
};

export default MainPage;