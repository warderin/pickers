import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SportMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PoolMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Sport {
  readonly id: string;
  readonly name: string;
  readonly display_name: string;
  readonly config?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Sport, SportMetaData>);
  static copyOf(source: Sport, mutator: (draft: MutableModel<Sport, SportMetaData>) => MutableModel<Sport, SportMetaData> | void): Sport;
}

export declare class User {
  readonly id: string;
  readonly nickname?: string | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly poolID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Pool {
  readonly id: string;
  readonly name: string;
  readonly max_members: number;
  readonly admin?: User | null;
  readonly members?: (User | null)[] | null;
  readonly sport: Sport;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly poolAdminId?: string | null;
  readonly poolSportId: string;
  constructor(init: ModelInit<Pool, PoolMetaData>);
  static copyOf(source: Pool, mutator: (draft: MutableModel<Pool, PoolMetaData>) => MutableModel<Pool, PoolMetaData> | void): Pool;
}