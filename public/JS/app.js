const App = () => {
  const [products, setProducts] = React.useState([])

  const [form, setForm] = React.useState({
    name: '',
    price: '',
  })
  function fetchProducts() {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data) //SETTING PRODUCTS
        console.log(data)
      })
  }
  //USEEFFECT TO LOAD OUR PRODUCT DATA
  React.useEffect(() => {
    fetchProducts()
  }, [])

  function handleSubmit(e) {
    //to submit new-product form
    e.preventDefault()
    if (!form.name || !form.price) {
      return
    }
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        res.json()
        console.log(res)
      })
      .then((data) => {
        fetchProducts()
        console.log(data)
        setForm({ name: '', price: '' })
      })
  }

  function updateForm(event, field) {
    if (field === 'name') {
      setForm({
        ...form,
        name: event.target.value,
      })
    } else {
      setForm({
        ...form,
        price: event.target.value,
      })
    }
  }

  const deleteProduct = (productId) => {
    fetch(`/api/products/${productId}`, {
      method: 'DELETE', // PUT , PATCH
    })
      .then((res) => res.json())
      .then((data) => {
        fetchProducts()
        console.log(data)
      })
  }

  return (
    //ADDING A FORM TO ADD NEW PRODUCT
    <>
      <div className="card">
        <div className="card-header">Add a product</div>
        <div className="card-body">
          <form onClick={handleSubmit}>
            <input
              type="text"
              value={form.name}
              onChange={() => updateForm(event, 'name')}
              placeholder="Product name"
              className="form-control mt-3"
              name="name"
            />
            <input
              type="text"
              value={form.price}
              onChange={() => updateForm(event, 'price')}
              placeholder="Product price"
              className="form-control mt-3"
              name="price"
            />
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* ADDING LIST OF ALL PRODUCTS */}
      <ul className="list-group mt-4">
        {products.map((product) => {
          return (
            <li
              key={product.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{product.name}: </strong>${product.price}
              </div>
              <button className="btn" onClick={() => deleteProduct(product.id)}>
                🗑️
              </button>
            </li>
          )
        })}{' '}
      </ul>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
