(() => {
  interface Client {
    name: string;
    age?: number; //optional
    address?: Address;
    // How to look like a function but it can not have logic
    // When you want to implement methods in an object, you should use classes
    getFullAddress(id: string): string; // function type
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Daniel",
    age: 25,
    address: {
      id: 135,
      zip: "KYU",
      city: "Ottawa",
    },
    getFullAddress() {
      return this.address.zip;
    },
  };

  const client2: Client = {
    name: "Daniel2",
    age: 25,
    getFullAddress() {
      return "client";
    },
  };
})();
