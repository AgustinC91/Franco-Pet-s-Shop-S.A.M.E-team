Vue.createApp({
    data() {
        return {
            articulos:[],
            //articulos2:[],
            articulosFiltrados:[],
            texto: "",
            nav: document.querySelector('nav')
        }
    }, 

    created(){
        fetch("https://apipetshop.herokuapp.com/api/articulos")
        .then(response => response.json())
        .then(data =>  {
            this.articulos = data.response
            console.log(data.response)
            if (document.title.includes("Farmacia")){
                this.articulosFiltrados = this.articulos.filter(articulo => articulo.tipo === "Medicamento")
                this.articulos= this.articulosFiltrados
            } else {
                this.articulosFiltrados = this.articulos.filter(articulo => articulo.tipo === "Juguete")
                this.articulos= this.articulosFiltrados
            }
            
            
        })
    },

    methods:{
        
    },


    computed:{
        buscar: function(){
            this.articulosFiltrados = this.articulos.filter(articulo => articulo.nombre.
                toUpperCase().
                includes(this.texto.toUpperCase()))
        },

        navbar: function(){
            window.addEventListener('scroll', function () {
                if (window.pageYOffset > 100) {
                    this.nav.classList.add('bg-light', 'shadow');
                } else {
                    this.nav.classList.remove('bg-light', 'shadow');
                }
            })
        }
    }

}).mount('#app')

var nav = document.querySelector('nav');

            window.addEventListener('scroll', function () {
                if (window.pageYOffset > 100) {
                    nav.classList.add('bg-light', 'shadow');
                } else {
                    nav.classList.remove('bg-light', 'shadow');
                }
            });