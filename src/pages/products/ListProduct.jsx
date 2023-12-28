import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {Delete, getAll} from "../../redux/service/productService.jsx";

export default function ListProduct(){
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        return products.list;
    });
    useEffect(() => {
        dispatch(getAll());
    }, [])
    const remove = (id) => {
        dispatch(Delete(id))
    }
    return (
        <>
            <h1>List Product</h1>

            {/*{*/}
            {/*    products.map((item) => (*/}
            {/*        <>*/}
            {/*            <h3>Name: {item.name} - Image: <img src={item.image} alt={"#"}*/}
            {/*                                                style={{width: "100px", height: "100px"}}/></h3>*/}
            {/*            <Link to={"/products/" + item.id}>*/}
            {/*                <button>Sửa</button>*/}
            {/*            </Link>*/}
            {/*            <button onClick={() => {*/}
            {/*                remove(item.id)*/}
            {/*            }}>Xóa*/}
            {/*            </button>*/}
            {/*        </>*/}
            {/*    ))*/}
            {/*}*/}
            <table border={1}>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td colSpan={2}>Action</td>
                </tr>

                </thead>
                <tbody>
                {
                    products.map((item) =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td> {item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={"/products/" + item.id}>
                                    <button>Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => {
                                    remove(item.id)
                                }}>Delete
                                </button>
                            </td>

                        </tr>
                    )
                }

                </tbody>
            </table>

        </>
    )


}