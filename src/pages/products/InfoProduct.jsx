import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";

const InfoProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const productInfo = useSelector((state) => state.products.productEdit);

    useEffect(() => {
        dispatch(getProductById(id));
    }, []);

    const product = productInfo;

    return (
        <>
            <h1>Description</h1>
            <div>
                <h2>Title: {product.title}</h2>
                <h3>Description: {product.description}</h3>
                <h3>Price: {product.price}</h3>
                <h1>
                    <Link to={'/products/home'}>
                        <button type='button'>Back</button>
                    </Link>
                </h1>
            </div>
        </>
    );
};

export default InfoProduct;