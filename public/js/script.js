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

var ProductForm = React.createClass({
    submit: function (e) {
      e.preventDefault();

        var product = {
            name: this.refs.name.value,
            price: parseInt(this.refs.price.value)
        }

        this.props.handleCreateProduct(product);

        this.refs.name.value = "";
        this.refs.price.value = "";
    },
   render: function () {
       return (
           <form>
               <input type="text" placeholder="Product Name" ref="name"/> -
               <input type="text" placeholder="Product Price" ref="price"/>
               <br/>
               <br/>
               <button onClick={this.submit}>Create Product</button>
               <hr/>
           </form>
       )
   }
});

var ProductList = React.createClass({
    getInitialState: function () {
        return {
            total: 0,
            productList: [{
                    name: "Android",
                    price: 121
                },
                {
                    name: "Apple",
                    price: 650
                },
                {
                    name: "Nokia",
                    price: 254
                }]
        }
    },
    createProduct: function (product) {
        this.setState({
            productList: this.state.productList.concat(product)
        })
    },

    calculateTotal: function (price) {
      this.setState({total: this.state.total + price});
        console.log(price, this.state.total);
    },
    showProduct: function (name) {
        alert("You selected " + name)
    },
    render: function () {
        var products = this.state.productList.map(function (product) {
            return (
                <Product name={product.name} price={product.price}
                handleShow={this.showProduct}
                handleTotal={this.calculateTotal}/>
                );

        }.bind(this));
        return (
            <div>
                <ProductForm handleCreateProduct={this.createProduct}/>
                {products}
                <Total total={this.state.total}/>
            </div>
        )
    }
});


ReactDOM.render(<ProductList/>, document.getElementById('root'));
