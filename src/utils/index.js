//input es un array que todas las colecciones tienen igual por eso se escrib una sola vez
const input = [{ value: "name", name: "Nombre" }, { vlaue: "description", name: "Descripcion" }, { value: "price", name: "Precio" }]

/* objeto contiene detalles especificos de cada colecciony que sirve para poder utilizar un solo formulario y que este cambie segun cada una */
export default {
  alPlato: {
    collection: "alPlato",
    defaultValues: { name: '', price: '', description: '', section: "", subSection: "" },
    title: "AL PLATO",
    section: [{ value: "pastas", name: "Pastas" }, { value: "carnes y pollos", name: "Carnes y Pollos" }],
    subSection: [{ value: "pastas", name: "Pastas" },{ value: "sorrentinos", name: "Sorrentinos" }, { value: "salsas", name: "Salsas" }, { value: "arroz", name: "Arroz" }],
    input,
    header: [{ Header: "Nombre", accessor: "name" }, { Header: "Descripcion", accessor: "description" }, { Header: "Precio", accessor: "price" }, { Header: "Seccion", accessor: "section" }, { Header: "Sub Seccion", accessor: "subSection" }]
  },
  bebidas: {
    collection: "bebidas",
    defaultValues: { name: '', price: '', price2: '', description: '', section: "" },
    title: "BEBIDAS",
    section: [{ value: "licuados", name: "Licuados" }, { value: "jugos", name: "Jugos" }, { value: "refrescos", name: "Refrescos" }],
    input,
    header: [{ Header: "Nombre", accessor: "name" }, { Header: "Descripcion", accessor: "description" }, { Header: "Precio Jarra/500 cc", accessor: "price" }, { Header: "Precio Vaso/1.5 L", accessor: "price2" }, { Header: "Seccion", accessor: "section" }]
  },
  bebidasAlcohol: {
    collection: "bebidasAlcohol",
    defaultValues: { name: '', price: '', price2: '', description: '', section: "", bodega: "" },
    title: "... CON ALCOHOL",
    section: [{ value: "vinos", name: "Vinos" }, { value: "cervezas", name: "Cervezas" }, { value: "tragos y aperitivos", name: "Tragos y Aperitivos" }],
    bodega: [{ value: "vinos de potrero", name: "Vinos de Potrero" }, { value: " ", name: "Otra" }],
    input,
    header: [{ Header: "Nombre", accessor: "name" }, { Header: "Descripcion", accessor: "description" }, { Header: "Precio Botella", accessor: "price" }, { Header: "Precio Lata", accessor: "price2" }, { Header: "Seccion", accessor: "section" }, { Header: "Bodega", accessor: "bodega" }]
  },
  cafeteria: {
    collection: "cafeteria",
    defaultValues: { name: '', price: '', description: '', section: "" },
    title: "CAFETERÍA",
    section: [{ value: "classics", name: "Clásicos" }, { value: "infusions", name: "Infusiones" }, { value: "specialty", name: "Especialidad" }, { value: "cold", name: "Fíos" }],
    input,
    header: [{ Header: "Nombre", accessor: "name" }, { Header: "Descripcion", accessor: "description" }, { Header: "Precio", accessor: "price" }, { Header: "Seccion", accessor: "section" }]
  },
  ensaladasGuarniciones: {
    collection: "ensaladasGuarniciones",
    defaultValues: { name: '', price: '', description: '', section: "" },
    title: "ENSALADAS...",
    section: [{ value: "ensaladas", name: "Ensaladas" }, { value: "guarniciones", name: "Guarniciones" }],
    input,
    header: [{ Header: "Nombre", accessor: "name" }, { Header: "Descripcion", accessor: "description" }, { Header: "Precio", accessor: "price" }, { Header: "Seccion", accessor: "section" }]
  },
  entrePanes: {
    collection: "entrePanes",
    defaultValues: { name: '', price: '', description: '', section: "", subSection: "" },
    title: "ENTRE PANES",
    section: [{ value: "sandwiches", name: "Sandwiches" }, { value: "hamburguesas", name: "Hamburguesas" }],
    subSection: [{ value: "carne", name: "Carne" }, { value: "pollo", name: "Pollo" }, { value: "opcional", name: "Opcional veggie" }],
    input,
    header: [{ Header: "Nombre", accessor: "name" }, { Header: "Descripcion", accessor: "description" }, { Header: "Precio", accessor: "price" }, { Header: "Seccion", accessor: "section" }, { Header: "Sub Seccion", accessor: "subSection" }]
  },
  pasteleria: {
    collection: "pasteleria",
    defaultValues: { name: '', price: '', description: '', section: "" },
    title: "PASTELERIA",
    section: [{ value: "cakes", name: "Tortas" }, { value: "puddings", name: "Budines" }, { value: "cookies", name: "cookies" }, { value: "healthy bowls", name: "Bowls Naturales" }, { value: "toasted", name: "Tostados" }, { value: "alfajores", name: "alfajores" }],
    input,
    header: [{ Header: "Nombre", accessor: "name" }, { Header: "Descripcion", accessor: "description" }, { Header: "Precio", accessor: "price" }, { Header: "Seccion", accessor: "section" }]
  },
  pizzaTartasEmpanadas: {
    collection: "pizzaTartasEmpanadas",
    defaultValues: { name: '', price: '', description: '', section: "" },
    title: "PIZZAS...",
    section: [{ value: "pizzas", name: "Pizzas" }, { value: "tartas", name: "Tartas" }, { value: "empanadas", name: "Empanadas" }],
    input,
    header: [{ Header: "Nombre", accessor: "name" }, { Header: "Descripcion", accessor: "description" }, { Header: "Precio", accessor: "price" }, { Header: "Seccion", accessor: "section" }]
  },
  postres: {
    collection: "postres",
    defaultValues: { name: '', price: '', description: '', },
    title: "POSTRES",
    input,
    header: [{ Header: "Nombre", accessor: "name" }, { Header: "Descripcion", accessor: "description" }, { Header: "Precio", accessor: "price" }]
  },
  tapeo: {
    collection: "tapeo",
    defaultValues: { name: '', price: '', price2: '', description: '', section: "", subSection: "" },
    title: "TAPEO",
    section: [{ value: "picadas", name: "Picadas" }, { value: "tapeo", name: "Tapeo" }],
    subSection: [{ value: "hot", name: "Picada Caliente" }, { value: "classics", name: "Picada Clasica" }],
    input,
    header: [{ Header: "Nombre", accessor: "name" }, { Header: "Descripcion", accessor: "description" }, { Header: "Precio para 2", accessor: "price" }, { Header: "Precio para 4", accessor: "price2" }, { Header: "Seccion", accessor: "section" }, { Header: "Sub Seccion", accessor: "subSection" }]
  }
}