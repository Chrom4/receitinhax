import React, { Component } from "react";
import BarraPrimaria from "./BarraPrimaria/BarraPrimaria.js"
import styles from "./index.module.css"

class Barra extends Component {
    constructor(props) {
        super(props);

        this.state = {
            barra: '',
            tipoBarra: this.props.tipo,
        };
    }
    
    setTipoBarra = () => {
        switch (this.state.tipoBarra) {
            case "primaria":
                this.setState({
                    barra: (
                        <BarraPrimaria />
                    )
                })
                break;
                
            default:
                break;
        }
    }

    componentDidMount() {
        this.setTipoBarra();
    }

    render () {
        return (
            <div className={styles.Barra}>
                {this.state.barra}
            </div>
        )
    }
}

export default Barra;