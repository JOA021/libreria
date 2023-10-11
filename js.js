class Libro{
    constructor(pTitulo, pAutor, pGenero, pLeido){
        this.titulo = pTitulo
        this.autor = pAutor
        this.genero = pGenero
        this.leido = pLeido
    }


    ElTitulo(){
        console.log(`Libro ${this.titulo}`)
    }

    ElAutor(){
        console.log(`El autor es ${this.autor}`)
    }

    ElGenero(){
        console.log(`Su genero es ${this.genero}`)
    }

    Esta_leido(){
        if (this.leido = true) {
            console.log("Leido")
        }   else {
            console.log("No se ha leido")
        }
    }
}

const libro_1 = new Libro ("Rich Dad Poor Dad", "Robert. K", "Personal Grow", true)

libro_1.ElTitulo()
libro_1.ElAutor()
libro_1.ElGenero()
libro_1.Esta_leido()


