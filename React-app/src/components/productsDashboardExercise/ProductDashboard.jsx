import ProductsList from './ProductsList.jsx';

function ProductDashboard({ products, isAdmin }) {
    return (
        <div>
            <h1>Product Dashboard</h1>
            {isAdmin ? <ProductsList products={products} /> : <h3>You are not authorized to view this content.</h3>}
        </div>
    );
}

export default ProductDashboard;