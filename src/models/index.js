// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sport, User, Pool } = initSchema(schema);

export {
  Sport,
  User,
  Pool
};