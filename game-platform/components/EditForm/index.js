import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { Container } from './styles'

const EditForm = ({values, handleEditFormClose}) => {
    const {id, user_id, title, excerpt, content} = values
    const [message, setMessage] = useState('');
    return (
        <Container>
            <Formik
                initialValues={{ title, excerpt, content }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Requerido';
                    }
                    if (!values.excerpt) {
                        errors.excerpt = 'Requerido';
                    }
                    if (!values.content) {
                        errors.content = 'Requerido';
                    }
                    return errors;
                }}
                onSubmit={
                    async (values, { setSubmitting }) => {
                        try {
                            const res = await axios.post('/api/posts/edit', {...values, id, user_id})
                            const data = await res.data
                            setSubmitting(false);
                            setMessage(`Post edited, ${data.title} (${res.status})`)
                            handleEditFormClose()
                        } catch (error) {
                            if (error.response) {
                                console.log(error.response.data);
                                console.log(error.response.status);
                                console.log(error.response.headers);
                            } else if (error.request) {
                                console.log(error.request);
                            } else {
                                console.log('Error', error.message);
                            }
                            console.log(error);
                        }
                    }
                }
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="input_row">
                            <Field type="text" name="title" placeholder="Título" />
                            <ErrorMessage name="title" component="div" />
                        </div>
                        <div className="input_row">
                            <Field type="text" name="excerpt" placeholder="Bajada" />
                            <ErrorMessage name="company" component="div" />
                        </div>
                        <div className="input_row">
                            <Field as="textarea" type="content" name="content" placeholder="Contenido" />
                            <ErrorMessage name="content" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="orange">
                            Enviar
                        </button>
                    </Form>
                )}
            </Formik>
            <p>{message}</p>
        </Container>
    )
}

export default EditForm;