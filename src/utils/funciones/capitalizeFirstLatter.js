/* funcion que sirve para cambiar a mayusculas la primer letra del string que recive por params */
export default (str) =>
{
  if (str) {
    return str?.charAt(0).toUpperCase() + str?.slice(1)
  }else{
    return str
  }

}
