function getCity(user) {
    return user?.address?.current?.city ?? "Unknown";
}

const user1 = { name: "Dibas", address: { current: { city: "Thamel" } } };
const user2 = { name: "Paudel", address: { current: {} } };
const user3 = { name: "Thamel", address: null };
const user4 = { name: "Area" };
const user5 = null;

console.log(getCity(user1)); // "Thamel"
console.log(getCity(user2)); // "Unknown"
console.log(getCity(user3)); // "Unknown"
console.log(getCity(user4)); // "Unknown"
console.log(getCity(user5)); // "Unknown"