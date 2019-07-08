import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { gettext } from 'utils/i18n';
import RecipeForm from 'forms/recipes/Recipe';
// import recipes from 'components/recipes/recipes';
// import PropTypes from 'prop-types';

const RecipesView = () => (
    <Container>
        <Row className="mt-3">
            <Col>
                <h1>
                    {gettext('Recipes')}
                </h1>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
                <RecipeForm />
            </Col>
        </Row>
    </Container>
);

export default RecipesView;
