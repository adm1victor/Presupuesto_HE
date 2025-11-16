import { CreateUserData, GetTransactionsForUserData, CreateBudgetData, CreateBudgetVariables, ListCategoriesForUserData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useGetTransactionsForUser(options?: useDataConnectQueryOptions<GetTransactionsForUserData>): UseDataConnectQueryResult<GetTransactionsForUserData, undefined>;
export function useGetTransactionsForUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetTransactionsForUserData>): UseDataConnectQueryResult<GetTransactionsForUserData, undefined>;

export function useCreateBudget(options?: useDataConnectMutationOptions<CreateBudgetData, FirebaseError, CreateBudgetVariables>): UseDataConnectMutationResult<CreateBudgetData, CreateBudgetVariables>;
export function useCreateBudget(dc: DataConnect, options?: useDataConnectMutationOptions<CreateBudgetData, FirebaseError, CreateBudgetVariables>): UseDataConnectMutationResult<CreateBudgetData, CreateBudgetVariables>;

export function useListCategoriesForUser(options?: useDataConnectQueryOptions<ListCategoriesForUserData>): UseDataConnectQueryResult<ListCategoriesForUserData, undefined>;
export function useListCategoriesForUser(dc: DataConnect, options?: useDataConnectQueryOptions<ListCategoriesForUserData>): UseDataConnectQueryResult<ListCategoriesForUserData, undefined>;
