import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { gettext } from 'utils/i18n';
// import Recipes from 'components/Recipes/Recipes';
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
                Hello
            </Col>
        </Row>
    </Container>
);

export default RecipesView;
