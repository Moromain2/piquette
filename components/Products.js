const Products = ({ products }) => {
    {products &&
        products.data.map((product) => {
            return (
                <div className="product-card" key={product.id}>
                    {/* <Image
                        src={product.attributes.images.data[0].attributes.url}
                        alt={product.attributes.name + product.attributes.flavour}
                        width={500}
                        height={500}
                    /> */}
                    <h1>{product.attributes.name}</h1>
                    <h2>{product.attributes.flavour}</h2>
                    <p>{product.attributes.price}€ | {product.attributes.weight} grammes</p>
                    <hr />
                </div>
            )
    })}
}