import React, {Component} from 'react';
import Button from "../button/Button";
import classes from "./btn.module.css";

class Buttons extends Component {
    render() {
        return (
            <div className={classes.btn}>
                <Button title={'Save'}/>
                <Button title={'Edit'}/>
                <Button title={'Delete'}/>
            </div>
        );
    }
}

export default Buttons;