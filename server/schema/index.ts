import { GraphQLSchema } from "graphql";

import mutations from "./mutations";
import RootQueryType from './types/root_query_type'

export default new GraphQLSchema({
    query:RootQueryType,
    mutation:mutations
})