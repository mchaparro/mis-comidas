import { createFetchAction, createFetchSaga } from '@thorgate/spa-entities';
import { createPaginationSuccessHook } from '@thorgate/spa-pagination';
import { takeLatest } from 'redux-saga/effects';

import { forumSchema } from 'ducks/forums';
import api from 'services/api';
import { serializeData } from 'utils/serializeData';


export const fetchForums = createFetchAction('@@sagas/forums/fetch');

const successHook = createPaginationSuccessHook(forumSchema.key, true);

const fetchForumsWorkerBase = createFetchSaga({
    key: forumSchema.key,
    resource: api.forum.list,
    listSchema: [forumSchema],
    successHook,
    serializeData,
});


export const fetchForumsInitialWorker = fetchForumsWorkerBase.asInitialWorker(() => fetchForums());

export function* fetchForumWatcher() {
    yield takeLatest(fetchForums.getType(), fetchForumsWorkerBase, null);
}
