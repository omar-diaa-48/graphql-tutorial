import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { DATABASE } from "..";
import TodoType from "./types/todo_type";
import axios from "axios";

const mutations = new GraphQLObjectType({
    name:'mutations',
    fields:{
        addTodo:{
            type:TodoType,
            args:{
                title:{type:GraphQLString},
                description:{type:GraphQLString}
            },
            resolve(parentValue, args){
                const { title, description } = args;
                return axios.post(`${DATABASE}/todos`, {
                    title,
                    description
                })
                .then(data => data.data)
            }
        },
        removeTodo:{
            type:TodoType,
            args:{
                id:{type:GraphQLID},
            },
            resolve(parentValue, args){
                const {id} = args;
                return axios.delete(`${DATABASE}/todos/${id}`)
            }
        }
    }
})

export default mutations;