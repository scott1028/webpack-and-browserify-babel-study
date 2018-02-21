'use strict';

import { denormalize, normalize, schema } from 'normalizr';


// test to normalize data
const myData1 = {
    users: [
        { id: 1 },
        { id: 2 }
    ]
};

const user1 = new schema.Entity('users');
const mySchema1 = { users: [ user1 ] }
const normalizedData = normalize(myData1, mySchema1);
console.log(JSON.stringify(normalizedData));

// test to denormalize data
const user2 = new schema.Entity('users');
const mySchema2 = { users: [ user2 ] }
const entities2 = { users: { '1': { id: 1 }, '2': { id: 2 } } };
const denormalizedData = denormalize({ users: [ 1, 2 ] }, mySchema2, entities2);
console.log(JSON.stringify(denormalizedData));
