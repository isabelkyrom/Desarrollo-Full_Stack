class UsuarioRepository {
    #usuarios;
    #nextId;

    constructor() {
        this.#usuarios = [];
        this.#nextId = 1;
    }


    create(nombre, email) {
        // Si nombre
        if (typeof nombre !== 'string' || nombre.length === 0) {
            return "Nombre invalido"
        }

        // Si email
        if (typeof email !== 'string' || email.length === "" || !email.includes('@') || !email.includes('.')) {
            return "Email invalido"
        }

        const nuevo = {
            id: this.#nextId ++,
            nombre,
            email
        }

        this.#usuarios.push(nuevo);

    }

    getAll() {
        return [...this.#usuarios]
    }

    getById(id) {
        return this.#usuarios.find(usuario => usuario.id === id)
    }

    delete(id) {
        const index = this.#usuarios.find(usuario => usuario.id === id)

        if(index === -1) {
            return false
        }

        this.#usuarios.splice[index, 1];
        return index;

    }

    update(id, data) {

        const usuario = this.#usuarios.find(usuario => usuario.id === id)

        if (id === -1) {
            return "-- El Id no existe"
        }

        if (data === null) {
            return "Campo vació"
        }

        if( data.includes('@') ) {
            this.#usuarios[id].email = data;
            return "Email cambiado a: " + data;
        }

        if(typeof data === 'string') {
            this.#usuarios[id].nombre = data;
            return "Nombre cambiado a: " + data;
        }

        return usuario;

    }
} 

const usuarios = new UsuarioRepository;

usuarios.create("Kyra", "kyra@gmail.com")
usuarios.create("Jocelyn", "kyra@gmail.com")
usuarios.create("Dafne", "kyra@gmail.com")
usuarios.create("Malanco", "kyra@gmail.com")

console.log("\nGetAll: \n")
console.log(usuarios.getAll())

console.log("\nGetById: \n")
console.log(usuarios.getById(3))

console.log("\nDelete y GetAll: \n")
console.log(usuarios.delete(4))
console.log(usuarios.getAll())

console.log("\nUpdate: \n")
console.log(usuarios.update(2, "joce@gmail.com"))
console.log(usuarios.update(0, "Isabel"))

console.log(usuarios.getAll())



// nombre no debe de estar vació
// email tenga "@" y "."

// Reglas update
/*
    - id debe exitir
    - data puede traer:
    nombre
    email
    - si un campo no viene no se modifica
    - si no existe regresa null
    
*/