"use strict";

window.onload = function () {
  document.getElementById("gridRowGap").addEventListener(
    "input",
    function () {
      let valorFila = obtenerValor("gridRowGap");
      let valorColumna = obtenerValor("gridColumnGap");
      actualizarGridGap(valorFila, valorColumna);
      actualizarTextoHtml(valorFila, valorColumna);
    },
    false
  );

  document.getElementById("gridColumnGap").addEventListener(
    "input",
    function () {
      let valorFila = obtenerValor("gridRowGap");
      let valorColumna = obtenerValor("gridColumnGap");
      actualizarGridGap(valorFila, valorColumna);
      actualizarTextoHtml(valorFila, valorColumna);
    },
    false
  );

  function obtenerValor(id) {
    return document.getElementById(id).value;
  }

  function actualizarGridGap(valorFila, valorColumna) {
    document.getElementById(
      "cuadricula"
    ).style.gridGap = `${valorFila}px ${valorColumna}px`;
  }

  function actualizarTextoHtml(valorFila, valorColumna) {
    document.getElementById("valorRowGap").innerHTML = valorFila;
    document.getElementById("valorColumnGap").innerHTML = valorColumna;

    document.getElementById("spangridRowGap").innerHTML = valorFila;
    document.getElementById("spangridColumnGap").innerHTML = valorColumna;
  }
};
