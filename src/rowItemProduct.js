import React from 'react'

export default class RowItemProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {props: props}
    }

    render() {
        const product = this.state.props.product;
        let styleStocked = product.stocked ? { color: "black" } : { color: "red", textDecoration: "line-through" };

        return (
            <tr className="table-active"  >
                <td style={styleStocked}>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}