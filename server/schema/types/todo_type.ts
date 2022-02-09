import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const TodoType = new GraphQLObjectType({
    name:'TodoType',
    fields:() => ({
        id:{type:GraphQLID},
        title:{type:GraphQLString},
        description:{type:GraphQLString}
    })
})

export default TodoType;