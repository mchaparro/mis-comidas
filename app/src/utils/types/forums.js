import PropTypes from 'prop-types';

export const ForumShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
});
