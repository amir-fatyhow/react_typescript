import React, {useState} from 'react';
import {IProduct} from "../module";
import axios from "axios";
import Error from "./Error";

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 5.0,
        count: 123
    }
}

interface CreateProduct {
    onCreate: (product: IProduct) => void
}

const CreateProduct = ({onCreate}: CreateProduct) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('What?')
            return
        }

        productData.title = value

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className ='border py-2 px-4 mb-2 w-full outline-0'
                placeholder ='Enter product title'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {error && <Error error={error} />}
            <button type={"submit"} className='py-2 px-4 border bg-yellow-400 hover:text-white'>Create</button>
        </form>
    );
};

export default CreateProduct;