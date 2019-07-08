import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectForums } from 'ducks/forums';
import { ForumShape } from 'utils/types/forums';
import Recipe from 'components/Recipes/Recipe';

const Recipes = ({ forums }) => (
    <div>
        {forums.map((forum) => (
            <Recipe forum={forum} />
        ))}
    </div>
);

Recipes.propTypes = {
    forums: PropTypes.arrayOf(ForumShape).isRequired,
};

const mapStateToProps = (state) => ({
    forums: selectForums(state),
});

export default connect(mapStateToProps)(Recipes);
