import React, {useContext} from 'react';
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Product from "../components/Product";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import {IProduct} from "../module";

const ProductsPage = () => {
    const {products, error, loading, addProducts} = useProducts();
    const {modal, open, close} = useContext(ModalContext)

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {loading && <Loader />}
            {error && <Error error={error}/>}
            { products.map(product => <Product product={product} key={product.id} />) }

            {modal && <Modal title='Create product' onClose={() => close()}> <CreateProduct onCreate={(product: IProduct) => {
                close()
                addProducts(product)
            }}/></Modal>}

            <button
                className='fixed absolute bottom-6 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2 pt-1'
                onClick={() => open()}
            >+</button>
        </div>
    )
};

export default ProductsPage;