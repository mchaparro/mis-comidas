import { createDetailSchemaSelector, createSchemaSelector } from '@thorgate/spa-entities';
import { schema } from 'normalizr';


export const forumSchema = new schema.Entity('forums');

export const selectForums = createSchemaSelector(forumSchema);
export const selectForum = createDetailSchemaSelector(forumSchema);
