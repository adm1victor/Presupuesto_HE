# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetTransactionsForUser*](#gettransactionsforuser)
  - [*ListCategoriesForUser*](#listcategoriesforuser)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*CreateBudget*](#createbudget)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetTransactionsForUser
You can execute the `GetTransactionsForUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getTransactionsForUser(): QueryPromise<GetTransactionsForUserData, undefined>;

interface GetTransactionsForUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTransactionsForUserData, undefined>;
}
export const getTransactionsForUserRef: GetTransactionsForUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getTransactionsForUser(dc: DataConnect): QueryPromise<GetTransactionsForUserData, undefined>;

interface GetTransactionsForUserRef {
  ...
  (dc: DataConnect): QueryRef<GetTransactionsForUserData, undefined>;
}
export const getTransactionsForUserRef: GetTransactionsForUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getTransactionsForUserRef:
```typescript
const name = getTransactionsForUserRef.operationName;
console.log(name);
```

### Variables
The `GetTransactionsForUser` query has no variables.
### Return Type
Recall that executing the `GetTransactionsForUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetTransactionsForUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetTransactionsForUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getTransactionsForUser } from '@dataconnect/generated';


// Call the `getTransactionsForUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getTransactionsForUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getTransactionsForUser(dataConnect);

console.log(data.transactions);

// Or, you can use the `Promise` API.
getTransactionsForUser().then((response) => {
  const data = response.data;
  console.log(data.transactions);
});
```

### Using `GetTransactionsForUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getTransactionsForUserRef } from '@dataconnect/generated';


// Call the `getTransactionsForUserRef()` function to get a reference to the query.
const ref = getTransactionsForUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getTransactionsForUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.transactions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.transactions);
});
```

## ListCategoriesForUser
You can execute the `ListCategoriesForUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCategoriesForUser(): QueryPromise<ListCategoriesForUserData, undefined>;

interface ListCategoriesForUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCategoriesForUserData, undefined>;
}
export const listCategoriesForUserRef: ListCategoriesForUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCategoriesForUser(dc: DataConnect): QueryPromise<ListCategoriesForUserData, undefined>;

interface ListCategoriesForUserRef {
  ...
  (dc: DataConnect): QueryRef<ListCategoriesForUserData, undefined>;
}
export const listCategoriesForUserRef: ListCategoriesForUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCategoriesForUserRef:
```typescript
const name = listCategoriesForUserRef.operationName;
console.log(name);
```

### Variables
The `ListCategoriesForUser` query has no variables.
### Return Type
Recall that executing the `ListCategoriesForUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCategoriesForUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListCategoriesForUserData {
  categories: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & Category_Key)[];
}
```
### Using `ListCategoriesForUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCategoriesForUser } from '@dataconnect/generated';


// Call the `listCategoriesForUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCategoriesForUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCategoriesForUser(dataConnect);

console.log(data.categories);

// Or, you can use the `Promise` API.
listCategoriesForUser().then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

### Using `ListCategoriesForUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCategoriesForUserRef } from '@dataconnect/generated';


// Call the `listCategoriesForUserRef()` function to get a reference to the query.
const ref = listCategoriesForUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCategoriesForUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.categories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation has no variables.
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser } from '@dataconnect/generated';


// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef } from '@dataconnect/generated';


// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## CreateBudget
You can execute the `CreateBudget` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createBudget(vars: CreateBudgetVariables): MutationPromise<CreateBudgetData, CreateBudgetVariables>;

interface CreateBudgetRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateBudgetVariables): MutationRef<CreateBudgetData, CreateBudgetVariables>;
}
export const createBudgetRef: CreateBudgetRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createBudget(dc: DataConnect, vars: CreateBudgetVariables): MutationPromise<CreateBudgetData, CreateBudgetVariables>;

interface CreateBudgetRef {
  ...
  (dc: DataConnect, vars: CreateBudgetVariables): MutationRef<CreateBudgetData, CreateBudgetVariables>;
}
export const createBudgetRef: CreateBudgetRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createBudgetRef:
```typescript
const name = createBudgetRef.operationName;
console.log(name);
```

### Variables
The `CreateBudget` mutation requires an argument of type `CreateBudgetVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateBudgetVariables {
  name: string;
  amount: number;
  startDate: DateString;
  endDate: DateString;
  categoryId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateBudget` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateBudgetData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateBudgetData {
  budget_insert: Budget_Key;
}
```
### Using `CreateBudget`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createBudget, CreateBudgetVariables } from '@dataconnect/generated';

// The `CreateBudget` mutation requires an argument of type `CreateBudgetVariables`:
const createBudgetVars: CreateBudgetVariables = {
  name: ..., 
  amount: ..., 
  startDate: ..., 
  endDate: ..., 
  categoryId: ..., 
};

// Call the `createBudget()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createBudget(createBudgetVars);
// Variables can be defined inline as well.
const { data } = await createBudget({ name: ..., amount: ..., startDate: ..., endDate: ..., categoryId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createBudget(dataConnect, createBudgetVars);

console.log(data.budget_insert);

// Or, you can use the `Promise` API.
createBudget(createBudgetVars).then((response) => {
  const data = response.data;
  console.log(data.budget_insert);
});
```

### Using `CreateBudget`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createBudgetRef, CreateBudgetVariables } from '@dataconnect/generated';

// The `CreateBudget` mutation requires an argument of type `CreateBudgetVariables`:
const createBudgetVars: CreateBudgetVariables = {
  name: ..., 
  amount: ..., 
  startDate: ..., 
  endDate: ..., 
  categoryId: ..., 
};

// Call the `createBudgetRef()` function to get a reference to the mutation.
const ref = createBudgetRef(createBudgetVars);
// Variables can be defined inline as well.
const ref = createBudgetRef({ name: ..., amount: ..., startDate: ..., endDate: ..., categoryId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createBudgetRef(dataConnect, createBudgetVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.budget_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.budget_insert);
});
```

