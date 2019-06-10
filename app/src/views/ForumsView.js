import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { gettext } from 'utils/i18n';
import Forums from 'components/Forums/Forums';
// import PropTypes from 'prop-types';

const ForumsView = () => (
    <Container>
        <Row className="mt-3">
            <Col>
                <h1>
                    {gettext('Forums')}
                </h1>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
                <Forums />
            </Col>
        </Row>
    </Container>
);

export default ForumsView;
