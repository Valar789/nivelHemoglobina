export const indicarRangoHemogloblina = (valorHemoglobina, genero) => {
console.log(typeof valorHemoglobina, genero);
  //Creamos el objeto segun el valor de genero
  const rango =
    genero === 1 //Si es Masculino
      ? { alerta1: 13.2, alerta2: 16.6, sinAlerta: [13.2, 16.6] } //crea el obj. Rango hemoglobina Masculino
      : genero === 2 //Si es Femenino
      ? { alerta1: 11.6, alerta2: 15, sinAlerta: [11.6, 15] } //crea el obj. Rango hemoglobina Feminino
      : null; //caso contrario return null

  //return string segun la condicion que se cumpla
  return rango === null //si es null
    ? "No es posible general la alerta"
    : valorHemoglobina < rango.alerta1 //si es menor
    ? "Baja"
    : valorHemoglobina > rango.alerta2 //si es mayor
    ? "Alta"
    : "normal"; //si no se cumple ningua de lo anterior
};


