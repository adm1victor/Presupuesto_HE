import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: '7conzaichatesteestaperfectobasegithub',
  location: 'us-east4'
};

export const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';

export function createUser(dc) {
  return executeMutation(createUserRef(dc));
}

export const getTransactionsForUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTransactionsForUser');
}
getTransactionsForUserRef.operationName = 'GetTransactionsForUser';

export function getTransactionsForUser(dc) {
  return executeQuery(getTransactionsForUserRef(dc));
}

export const createBudgetRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateBudget', inputVars);
}
createBudgetRef.operationName = 'CreateBudget';

export function createBudget(dcOrVars, vars) {
  return executeMutation(createBudgetRef(dcOrVars, vars));
}

export const listCategoriesForUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCategoriesForUser');
}
listCategoriesForUserRef.operationName = 'ListCategoriesForUser';

export function listCategoriesForUser(dc) {
  return executeQuery(listCategoriesForUserRef(dc));
}

