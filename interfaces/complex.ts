(() => {
  interface Client {
    name: string;
    age?: number; //optional
    address?: Address;
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
  };

  const client2: Client = {
    name: "Daniel2",
    age: 25,
  };
})();
