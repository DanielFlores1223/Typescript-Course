export const printObject = (argument: any) => {
  console.log(argument);
};

// Generic type <T> usually we use the letter T but you can use anyone
// Typescript identfies which type recieves and it returns the same type and you can use its methods
export function genericFunction<T>(argument: T): T {
  return argument;
}

export const genericFunctionArrow = <T>(argument: T) => argument;
