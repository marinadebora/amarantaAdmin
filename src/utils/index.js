const input =[{value:"name",name:"Nombre"},{vlaue:"description",name:"Descripcion"},{value:"price",name:"Precio"}]

export default {
  alPlato:{
    collection:"alPlato",
    defaultValues:{name: '',price: '',description: '',section: "",subSection:""},
    title:"AL PLATO",
    section:[{value:"pastas",name:"Pastas"},{value:"carnes y pollos",name:"Carnes y Pollos"}],
    subSection:[{value:"sorrentinos",name:"Sorrentinos"},{value:"salsas",name:"Salsas"},{value:" ",name:"Ninguna"}],
    input,
  },
  bebidas:{
    collection:"bebidas",
    defaultValues:{name: '',price: '',price2: '',description: '',section: ""},
    title:"BEBIDAS",
    section:[{value:"licuados",name:"Licuados"},{value:"jugos",name:"Jugos"},{value:"refrescos",name:"Refrescos"}],
    input,
  },
  bebidasAlcohol:{
    collection:"bebidasAlcohol",
    defaultValues:{name: '',price: '',price2: '',description: '',section: "",bodega:""},
    title:"... CON ALCOHOL",
    section:[{value:"vinos",name:"Vinos"},{value:"cervezas",name:"Cervezas"},{value:"tragos y aperitivos",name:"Tragos y Aperitivos"}],
    bodega:[{value:"vinos de potrero",name:"Vinos de Potrero"},{value:" ",name:"Otra"}],
    input,
  },
  cafeteria:{
    collection:"cafeteria",
    defaultValues:{name: '',price: '',description: '',section: ""},
    title:"CAFETERÍA",
    section:[{value:"classics",name:"Clásicos"},{value:"infusions",name:"Infusiones"},{value:"specialty",name:"Especialidad"},{value:"cold",name:"Fíos"}],
    input,
  },
  ensaladasGuarniciones:{
    collection:"ensaladasGuarniciones",
    defaultValues:{name: '',price: '',description: '',section: ""},
    title:"ENSALADAS...",
    section:[{value:"ensaladas",name:"Ensaladas"},{value:"guarniciones",name:"Guarniciones"}],
    input,
  },
  entrePanes:{
    collection:"entrePanes",
    defaultValues:{name: '',price: '',description: '',section: ""},
    title:"ENTRE PANES",
    section:[{value:"sandwiches",name:"Sandwiches"},{value:"hamburguesas",name:"Hamburguesas"}],
    subSection:[{value:"carne",name:"Carne"},{value:"pollo",name:"Pollo"},{value:"opcional",name:"Opcional veggie"}],
    input,
  },
  pasteleria:{
    collection:"pasteleria",
    defaultValues:{name: '',price: '',description: '',section: ""},
    title:"PASTELERIA",
    section:[{value:"cakes",name:"Tortas"},{value:"puddings",name:"Budines"},{value:"healthy bowls",name:"Bowls Naturales"},{value:"toasted",name:"Tostados"}],
    input,
  },
  pizzaTartasEmpanadas:{
    collection:"pizzaTartasEmpanadas",
    defaultValues:{name: '',price: '',description: '',section: ""},
    title:"PIZZAS...",
    section:[{value:"pizzas",name:"Pizzas"},{value:"tartas",name:"Tartas"},{value:"empanadas",name:"Empanadas"}],
    input,
  },
  postres:{
    collection:"postres",
    defaultValues:{name: '',price: '',description: '',},
    title:"POSTRES",
    input,
  },
  tapeo:{
    collection:"tapeo",
    defaultValues:{name: '',price: '',price2: '',description: '',section: "",subSection:""},
    title:"TAPEO",
    section:[{value:"picadas",name:"Picadas"},{value:"tapeo",name:"Tapeo"}],
    subSection:[{value:"hot",name:"Picada Caliente"},{value:"classics",name:"Picada Clasica"}],
    input,
  }
}