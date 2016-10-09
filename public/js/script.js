var Product = React.createClass({
    getInitialState: function () {
      return {
          qty: 0
      }
    },
    buy: function () {
        this.setState({qty: this.state.qty + 1});
        this.props.handleTotal(this.props.price);
    },

    show: function () {
        this.props.handleShow(this.props.name)
        // alert("You selected " + this.props.name)
    },
    render: function () {
        return (
            <div>
                <p>{this.props.name} - ${this.props.price}</p>
                <button onClick={this.buy}>Buy</button>
                <button onClick={this.show}>Show</button>
                <h3>Qty: {this.state.qty} item(s)</h3>
                <hr/>
            </div>
        );

    }
});

var Total = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Total Cash: {this.props.total}</h3>
            </div>
        )
    }
});

var ProductList = React.createClass({
    getInitialState: function () {
        return {
            total: 0
        }
    },
    calculateTotal: function (price) {
      this.setState({total: this.state.total + price});
        console.log(price, this.state.total);
        alert(this.state.total);
    },
    showProduct: function (name) {
        alert("You selected " + name)
    },
    render: function () {
        return (
            <div>
                <Product name="Android" price={121}
                         handleShow={this.showProduct}
                         handleTotal={this.calculateTotal}/>
                <Product name="Apple" price={65}
                         handleShow={this.showProduct}
                         handleTotal={this.calculateTotal}/>
                <Product name="Nokia" price={254}
                         handleShow={this.showProduct}
                         handleTotal={this.calculateTotal}/>
                <Total total={this.state.total}/>
            </div>
        )
    }
});


ReactDOM.render(<ProductList/>, document.getElementById('root'));
