import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Budget_Key {
  id: UUIDString;
  __typename?: 'Budget_Key';
}

export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateBudgetData {
  budget_insert: Budget_Key;
}

export interface CreateBudgetVariables {
  name: string;
  amount: number;
  startDate: DateString;
  endDate: DateString;
  categoryId: UUIDString;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface GetTransactionsForUserData {
  transactions: ({
    id: UUIDString;
    amount: number;
    date: DateString;
    description?: string | null;
    merchant?: string | null;
    type: string;
  } & Transaction_Key)[];
}

export interface ListCategoriesForUserData {
  categories: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & Category_Key)[];
}

export interface Transaction_Key {
  id: UUIDString;
  __typename?: 'Transaction_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface GetTransactionsForUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTransactionsForUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetTransactionsForUserData, undefined>;
  operationName: string;
}
export const getTransactionsForUserRef: GetTransactionsForUserRef;

export function getTransactionsForUser(): QueryPromise<GetTransactionsForUserData, undefined>;
export function getTransactionsForUser(dc: DataConnect): QueryPromise<GetTransactionsForUserData, undefined>;

interface CreateBudgetRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateBudgetVariables): MutationRef<CreateBudgetData, CreateBudgetVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateBudgetVariables): MutationRef<CreateBudgetData, CreateBudgetVariables>;
  operationName: string;
}
export const createBudgetRef: CreateBudgetRef;

export function createBudget(vars: CreateBudgetVariables): MutationPromise<CreateBudgetData, CreateBudgetVariables>;
export function createBudget(dc: DataConnect, vars: CreateBudgetVariables): MutationPromise<CreateBudgetData, CreateBudgetVariables>;

interface ListCategoriesForUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCategoriesForUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCategoriesForUserData, undefined>;
  operationName: string;
}
export const listCategoriesForUserRef: ListCategoriesForUserRef;

export function listCategoriesForUser(): QueryPromise<ListCategoriesForUserData, undefined>;
export function listCategoriesForUser(dc: DataConnect): QueryPromise<ListCategoriesForUserData, undefined>;

