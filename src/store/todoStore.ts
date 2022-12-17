import { defineStore } from 'pinia'
import { ref } from 'vue'
import ajax from '../ajax';

export const useTodoStore = defineStore('todosStroe', () => {
    const todos = ref()
    function getTodos() {
        ajax({ method: "get", url: "/api/v1/getTodos" }).then((res) => {
            const {
                data: { data },
            } = res;
            todos.value = data;
        });
    }
    const toggleTodo = (id: number) => {
        ajax({ method: "post", url: "/api/v1/toggleTodo", data: { id } }).then(
            (res) => {
                console.log(res.data);
            }
        ).then((res) => {
            getTodos()
        })
    };
    const addTodo = (name: string) => {
        return ajax({
            method: "post",
            url: "/api/v1/addTodo",
            data: {
                done: false,
                name
            },
        }).then((res) => {
            getTodos()
        })
    }
    const deleteTodo = (id: number) => {
        console.log(id);
        ajax({ method: "post", url: "/api/v1/deleteTodo", data: { id } }).then(
            (res) => {
                console.log(res);
            }
        ).then((res) => {
            getTodos()
        })
    };
    return { todos, getTodos, toggleTodo, deleteTodo, addTodo }
})