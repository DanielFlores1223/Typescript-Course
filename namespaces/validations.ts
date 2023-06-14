// it is like a grouper where you can create functions, classes and they can be shared, it is used to creating a library o framework
namespace Validation {
  export const validateText = (text: string) => {
    return text.length > 3;
  };

  export const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf());
  };
}

console.log(Validation.validateText("Fer"));
