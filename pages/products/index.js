import Image from 'next/image'
import { fetcher } from '../../lib/api'

const ProductsIndex = ({ products }) => {
    return (
        <div className="products-container">
            {products.data.map(product => (
                <div className="product-card" key={product.id}>
                    <Image
                        src={`http://localhost:1337${product.attributes.images.data[0].attributes.url}`}
                        alt={product.attributes.name + product.attributes.flavour}
                        width={500}
                        height={500}
                    />
                    <h1>{product.attributes.name}</h1>
                    <h2>{product.attributes.flavour}</h2>
                    <p>{product.attributes.price}€ | {product.attributes.weight} grammes</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps() {
    const productsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?populate=images`)
    return {
        props: {
            products: productsResponse
        }
    }
}

export default ProductsIndex