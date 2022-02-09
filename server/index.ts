import express from "express";
import { graphqlHTTP } from "express-graphql";

import schema from './schema';

const app = express();

export const DATABASE = 'http://localhost:5000';
const PORT = 3000;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})