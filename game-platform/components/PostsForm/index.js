import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { Container } from './styles'

const PostsForm = ({ userId }) => {
    const [message, setMessage] = useState('');
    return (
        <Container>
            <Formik
                initialValues={{ name: '', imageURL: '', gameURL: '', type: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.title = 'Requerido';
                    }
                    if (!values.imageURL) {
                        errors.imageURL = 'Requerido';
                    }
                    if (!values.gameURL) {
                        errors.gameURL = 'Requerido';
                    }
                    if (!values.type) {
                        errors.type = 'Requerido';
                    }
                    return errors;
                }}
                onSubmit={

                    async (values, { setSubmitting }) => {
                        try {
                            const res = await axios.post('/api/posts/create', { ...values, user_id: userId })
                            const data = await res.data
                            setSubmitting(false);
                            setMessage(`Game created`);
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
                            <Field type="text" name="name" placeholder="Title" />
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <div className="input_row">
                            <Field type="text" name="imageURL" placeholder="image URL" />
                            <ErrorMessage name="imageURL" component="div" />
                        </div>
                        <div className="input_row">
                            <Field type="text" name="type" placeholder="Tag" />
                            <ErrorMessage name="type" component="div" />
                        </div>
                        <div className="input_row">
                            <Field type="text" name="gameURL" placeholder="game URL" />
                            <ErrorMessage name="game URL" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Create
                        </button>
                    </Form>
                )}
            </Formik>
            <p>{message}</p>
        </Container>
    )
}

export default PostsForm;