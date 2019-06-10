import React from 'react';
import { ForumShape } from 'utils/types/forums';

const Forum = ({ forum }) => (
    <div className="forum">
        <span className="forum__title">
            {forum.title}
        </span>
    </div>
);

Forum.propTypes = {
    forum: ForumShape.isRequired,
};

export default Forum;
