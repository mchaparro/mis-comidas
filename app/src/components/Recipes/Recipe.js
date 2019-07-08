import React from 'react';
import { ForumShape } from 'utils/types/forums';

const Recipe = ({ forum }) => (
    <div className="forum">
        <span className="forum__title">
            {forum.title}
        </span>
    </div>
);

Recipe.propTypes = {
    forum: ForumShape.isRequired,
};

export default Recipe;
