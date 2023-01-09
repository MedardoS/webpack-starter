import './style.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//  se puede usar de las 2 formas si solo se envia una sola cosa si tiene que retornar a,b tiene que hacerse con
// la funcion de flecha
// todoList.todos.forEach( todo => crearTodoHtml( todo ) );

todoList.todos.forEach( crearTodoHtml );


console.log('todos', todoList.todos);
