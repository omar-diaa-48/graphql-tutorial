import { GraphQLList, GraphQLObjectType } from "graphql";
import axios from "axios";
import TodoType from "./todo_type";
import { DATABASE } from "../..";

const RootQueryType = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        todos:{
            type:new GraphQLList(TodoType),
            resolve(parentValue, args){
                return axios.get(`${DATABASE}/todos`)
                    .then(data => data.data)
            }
        }
    }
})

export default RootQueryType;