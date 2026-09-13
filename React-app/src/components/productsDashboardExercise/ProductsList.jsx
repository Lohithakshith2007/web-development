import ProductCard from './ProductCard.jsx';

function ProductsList({ products }) {
    function handleBuy(productName) {
        console.log("Buying:", productName);
    }
    return (
        products.map(product => (
            <ProductCard key={product.id} product={product} onClick={handleBuy} />
        ))
    )
}

export default ProductsList;