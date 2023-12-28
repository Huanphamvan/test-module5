import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {add} from "../../redux/service/productService.jsx";

function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Create =  value => {
        dispatch(add(value)).then(()=>{
            navigate("/products/home")
        })
    }


    return (
        <>
            <h1> ADD </h1>
            <Formik initialValues={{
                // id: '',
                title: '',
                description: '',
                price: ''

            }}

                    onSubmit={Create}
            >
                <Form>
                    {/*<Field name={"id"} placeholder={"Id"}/>*/}
                    <Field name={"title"} placeholder={"Title"}/>
                    <Field name={"description"} placeholder={"Description"}/>

                    <Field name={"price"} placeholder={"Price"}/>

                    <button type={"submit"}>Save</button>
                </Form>
            </Formik>
        </>
    )
}
export default AddProduct;