import React from 'react';
import { Formik } from 'formik';

const RecipeForm = () => (
    <div>
        <h1>Anywhere in your app!</h1>
        <Formik>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" />
                    <button type="button">Submit</button>
                </form>
            )}
        </Formik>
    </div>
);

export default RecipeForm;
