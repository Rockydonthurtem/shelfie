import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            items = {
                name: "product name",
                Price: 0,
                image: "url"
            }
        }

        this.updateName = this.updateName.bind(this);
        this.updateprice = this.updatePrice.bind(this);
    }

    componentDidMount() {
        axios.get("/api/inventory").then(response => {
            this.setState({
                item: response.data
            });
        });
    }
    updateName(text) {
        this.setState.name({ text });
    }

    updatePrice(value) {
        this.setState.Price({ value })
    }

    updateImage(text) {
        this.setState.Imge({ text })
    }

    render() {
        return (
            <div>
                Form
                <input
                    className="Product"
                    placeholder="Product name"
                    onChange={e => this.updateName(e.target.value)}
                />
                <input className="Price"
                    placeholder="Product Price"
                    onChange={e => this.updatePrice(e.target.value)} />


                <input className="Image"
                    placeholder="Product Image"
                    onChange={e => this.updatePrice(e.target.value)} />
                <button onClick={() => this.state}>Cancel</button>
                <button onClick={() => this.state.name} >
                    Add to Inventory</button>
            </div>
        )
    }
}
export default Form;