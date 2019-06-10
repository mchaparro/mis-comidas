import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectForums } from 'ducks/forums';
import { ForumShape } from 'utils/types/forums';
import Forum from 'components/Forums/Forum';

const Forums = ({ forums }) => (
    <div>
        {forums.map((forum) => (
            <Forum forum={forum} />
        ))}
    </div>
);

Forums.propTypes = {
    forums: PropTypes.arrayOf(ForumShape).isRequired,
};

const mapStateToProps = (state) => ({
    forums: selectForums(state),
});

export default connect(mapStateToProps)(Forums);
