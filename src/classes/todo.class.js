

export class Todo{

    static fromJson ({ id, tarea, completado, creado }) {

        const temTodo = new Todo( tarea );

        temTodo.id         = id;
        temTodo.completado = completado;
        temTodo.creado     = creado;
        
        return temTodo;

    }

    constructor( tarea ){

        this.tarea = tarea;

        this.id         = new Date().getTime(); //123456789 esta va hacer la representacion de la hora,minutos,sg actual
        this.completado = false;
        this.creado     = new Date();
    }
    
    imprimirClase(){
        console.log( ` ${ this.tarea } - ${ this.id } ` );
    }


}