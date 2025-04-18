/* funcion que modifica el nombre de la seccion para que se vea en español */

export default (value) =>
{
  return value === "infusions" ? "Infusiones" :
    value === "specialty" ? "Especialidad" :
      value === "classics" ? "Clásicos" :
        value === "cold" ? "Fríos" :
          value === "cakes" ? "Tortas" :
            value === "puddings" ? "Budines" :
              value === "healthy bowls" ? "Bowls Naturales" :
                value === "toasted" ? "Tostados" :
                  value === "toasted" ? "Tostados" : value
}