# Scalar client
___
Scalars client provides auto-generated and type-safe query client
for your application build in scalars

# Getting started
___
The first step when using Scalars Client is installing its npm package as follows:

## Installation
### yarn

```bash
yarn add @scalars/cli
```

### npm
```bash
npm install @scalars/cli
```

Once you installed the package it's needed to invoke the `sync`
command which reads your scalars endpoint and client ID from your 
environment variables, **don't forget to create an `.env.dev`
file** as follows:
```dotenv
# YOUR SCALARS ENDPOINT GOES HERE
SCALARS_API=https://app.scalars.co/qoboe5t4aH/api
# or
SCALARS_ENDPOINT=https://app.scalars.co/qoboe5t4aH/api

# YOUR SCALARS CLIENT ID GOES HERE
SCALARS_CLIENT_ID=c921b093-4334e-1be1-c0cb-5aa907d3d912
```
## Using Scalars Client
___
Once Scalars Client has been generated you can import in your code

```javascript
import { ScalarsClient } from '@scalars/cli'

const client = new ScalarsClient()
```
Then you can start using operations like *creating*, *getting*, 
*updating* and *deleting* on your entities:

### Retrieve a car
```javascript
const car = await client.query.car( {
    where: { id: '22bc79036f26481e' }
} )
```
> 💡 `car` will be an object like `{ id: '22bc79036f26481e' }`

> Note that you need to provide the `select` field on every 
> operation to indicate which attributes of the entity 
> you need to retrieve, otherwise it will only return
> a simple object:

### Retrieve a car with its model and brand
```javascript
const car = await client.query.car( {
    select: { id: true, model: true, brand: true },
    where: { id: '22bc79036f26481e' }
} )
```

### Creating a new car
```javascript
const newCar = await client.mutation.createCar( {
    data: { brand: 'Toyota', model: 'T90' }
} )
```

### Updating an existing car
```javascript
const updatedCar = await client.mutation.updateCar( {
    data: { brand: 'BMW' },
    where: { id: '22bc79036f26481e' }
} )
```

### Deleting an existing car
```javascript
const deletedCar = await client.mutation.deleteCar( {
    where: { id: '22bc79036f26481e' }
} )
```

## Typescript support
Scalars Client offers type definitions, these ensure that all your
operations are type safe and validated, also enables features like
IntelliSense (autocompletion) in your editor.

Examples above would look as follows with type definitions:


### Retrieve a car with its model and brand
```typescript
const carSelect: CarSelect = { id: true, model: true, brand: true }
const carWhere: CarWhereUniqueInput = { id: '22bc79036f26481e' }
const car: ICar = await client.query.car( {
    select: carSelect,
    where: carWhere
} )
```

### Creating a new car
```typescript
const carData: CarCreateInput = { brand: 'Toyota', model: 'T90' }
const newCar: ICar = await client.mutation.createCar( {
    data: carData
} )
```

### Updating an existing car
```typescript
const carData: CarUpdateInput = { brand: 'BMW' }
const carWhere: CarWhereUniqueInput = { id: '22bc79036f26481e' }
const updatedCar = await client.mutation.updateCar( {
    data: carData,
    where: carWhere
} )
```

### Deleting an existing car
```javascript
const carWhere: CarWhereUniqueInput = { id: '22bc79036f26481e' }
const deletedCar = await client.mutation.deleteCar( {
    where: carWhere
} )
```
