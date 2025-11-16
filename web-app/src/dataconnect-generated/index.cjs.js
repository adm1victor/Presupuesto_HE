const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: '7conzaichatesteestaperfectobasegithub',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dc) {
  return executeMutation(createUserRef(dc));
};

const getTransactionsForUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTransactionsForUser');
}
getTransactionsForUserRef.operationName = 'GetTransactionsForUser';
exports.getTransactionsForUserRef = getTransactionsForUserRef;

exports.getTransactionsForUser = function getTransactionsForUser(dc) {
  return executeQuery(getTransactionsForUserRef(dc));
};

const createBudgetRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateBudget', inputVars);
}
createBudgetRef.operationName = 'CreateBudget';
exports.createBudgetRef = createBudgetRef;

exports.createBudget = function createBudget(dcOrVars, vars) {
  return executeMutation(createBudgetRef(dcOrVars, vars));
};

const listCategoriesForUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCategoriesForUser');
}
listCategoriesForUserRef.operationName = 'ListCategoriesForUser';
exports.listCategoriesForUserRef = listCategoriesForUserRef;

exports.listCategoriesForUser = function listCategoriesForUser(dc) {
  return executeQuery(listCategoriesForUserRef(dc));
};
