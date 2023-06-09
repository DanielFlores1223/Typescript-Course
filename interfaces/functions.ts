(() => {
  // interface for a function
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumberFunction: addTwoNumbers;
  addNumberFunction = (a: number, b: number) => {
    return 10;
  };

  interface Carro {
    llantas: true;
  }

  interface Volvo extends Carro {
    abc: number;
  }

  const car: Volvo = {
    llantas: true,
    abc: 123,
  };
})();
