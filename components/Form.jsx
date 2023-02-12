import React, { useRef, useState } from "react";
import { indicarRangoHemogloblina } from "../src/logica/solucionEnJs.js";

export default function Form() {
  const [values, setValues] = useState({
    valorHemoglobina: "",
    genero: "",
  }); //estado

  const [result, setResult] = useState("");
  const formRef = useRef(null);

  //Capturo valores del formulario
  const captureValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //Obtengo respuesta de la logica y limpio el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    getResponse();
    formRef.current.reset();
  };

  const getResponse = () => {
    const valorHemoglobina = parseFloat(values.valorHemoglobina);
    const genero = parseFloat(values.genero);
    const result = indicarRangoHemogloblina(valorHemoglobina, genero);
    setResult(result);
  };

  //Interfaz
  return (
    <form onSubmit={handleSubmit} ref={formRef} className="baseForm">
      <h3 className="h3">Nivel Hemoglobina</h3>
      <div>
        <label className="labelPrimary " htmlFor="valor-hemoglobina ">
          Ingrese el valor de Hemoglobina
        </label>
        <input
          onChange={captureValues}
          required
          autoComplete="off"
          name="valorHemoglobina"
          className="inputPrimary"
          type="number"
          step="0.01"
        />
      </div>
      <div>
        <label className="labelPrimary" htmlFor="genero ">
          Seleccionar género
        </label>
        <select
          onChange={captureValues}
          required
          className="inputPrimary"
          name="genero"
          id=""
        >
          <option value="">Selecciona una opción</option>
          <option value="1">Masculino</option>
          <option value="2">Femenino</option>
        </select>
      </div>

      <button className="btnPrimary rounded-3xl" type="submit">
        Identificar Nivel
      </button>

      <div>
        {values.genero === "1" && <p className="h4Center">Masculino</p>}
        {values.genero === "2" && <p className="h4Center">Femenino</p>}

        <p className="pCenter">
          Tu nivel de hemoglobina es: <strong>{result}</strong>
        </p>
      </div>
    </form>
  );
}
