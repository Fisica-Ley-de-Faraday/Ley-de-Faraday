function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  let baseDePreguntas = [
    {
      pregunta: "Problema 1. Un conductor rectilíneo de 10 cm de longitud se mueve perpendicularmente a un campo de inducción magnética igual a 0.4 T con una velocidad cuya magnitud es de 3.4 m/s. ¿cuál es la fem inducida?",
     
      respuesta: "0.136V",
      distractores: ["0.130V", "0.236V", "0.400V"],
    },
    {
      pregunta: "Problema 2. Una bobina de 600 espiras emplea 8x10^-2 segundos en pasar entre los polos de un imán en forma de U desde un lugar donde el flujo magnético es de 1.8x10^-4 Wb, a otro en el que éste es igual a 9x10-4 Wb. ¿Cuál es la fem media inducida?",
     
      respuesta: "-5.4V",
      distractores: ["-5.9V", "-7.4V ", "-5.4y"],
    },
    {
      pregunta: "Problema 3. El flujo magnético que cruza una espira de alambre varía de 2x10^-3 a 7x10^-3 webers en 0.04 segundos ¿qué fem media se induce en el alambre?",
    
      respuesta: "-0.155 V",
      distractores: [" -0.124 V", "-0.225 V", "-0.145 V."],
    },
  ];