import React, { useContext, useState } from "react";
import { ErrorMessage, Formik } from "formik";
import "./Form.css";
import {addDoc,collection,getFirestore,Timestamp} from "firebase/firestore";
import { CartContext } from "../context/CartContext";

function Form() {
    const { cartList, total } = useContext(CartContext);
    const [enviado, setEnviado] = useState(false);

    const [idOrder, setIdOrder] = useState();

    const generarOrden = (nombre, email, cel) => {
        let orden = {};

        orden.date = Timestamp.fromDate(new Date());

        orden.total = total;

        orden.buyer = { nombre: nombre, tel: cel, email: email };

        orden.items = cartList.map((cartItem) => {
            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price;
            const cantidad = cartItem.cantidad;
            const subTotal = cartItem.precioTotal;

            return { id, name, price, cantidad, subTotal };
        });

        const db = getFirestore();
        const ordenColeccion = collection(db, "orders");
        addDoc(ordenColeccion, orden)
            .then((resp) => setIdOrder(resp.id))
            .catch((error) => console.log(error))
            .finally(() => setEnviado(true));
    };

    return (
        <>
            {!enviado ? (
                <Formik
                    initialValues={{
                        nombre: "",
                        email: "",
                        cel: "",
                    }}
                    validate={(valores) => {
                        let errores = {};

                        if (!valores.nombre) {
                            errores.nombre = "Por favor ingresa un nombre";
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                            errores.nombre = "solo puede contener letras y espacios";
                        }

                        if (!valores.email) {
                            errores.email = "Por favor ingresa un email";
                        } else if (
                            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                                valores.email
                            )
                        ) {
                            errores.email =
                                "solo puede contener letras y sus respectivos caracteres";
                        }

                        if (!valores.cel) {
                            errores.cel = "Por favor ingresa un numero de telefeno";
                        } else if (!/^[0-9]{1,30}$/.test(valores.cel)) {
                            errores.cel = "solo puede numeros";
                        }

                        return errores;
                    }}
                    onSubmit={(valores) => {
                        console.log("enviado" + valores.nombre);
                        generarOrden(valores.nombre, valores.email, valores.cel);
                    }}
                >
                    {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
                        <form className="form" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="Nombre">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    placeholder="Introduce tu nombre"
                                    value={values.nombre}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <ErrorMessage
                                    name="nombre"
                                    component={() => (
                                        <div className="error"> {errors.nombre} </div>
                                    )}
                                />
                            </div>
                            <div>
                                <label htmlFor="Email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Ingrese su email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <ErrorMessage
                                    name="email"
                                    component={() => (
                                        <div className="error"> {errors.email} </div>
                                    )}
                                />
                            </div>

                            <div>
                                <label htmlFor="Cel">Celular</label>
                                <input
                                    type="text"
                                    name="cel"
                                    id="cel"
                                    placeholder="Ingrese su numero de celular"
                                    value={values.cel}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <ErrorMessage
                                    name="cel"
                                    component={() => <div className="error"> {errors.cel} </div>}
                                />
                            </div>

                            <button type="submit" className="btnBlack">
                                Comprar
                            </button>
                        </form>
                    )}
                </Formik>
            ) : (
                <div className="compraExitosa">
                    <h1> Compra {idOrder} realizada con exito</h1>
                </div>
            )}
        </>
    );
}

export default Form;
