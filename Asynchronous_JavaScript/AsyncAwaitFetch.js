export default async function getUser(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!res.ok) return "Error";
        return await res.json();
    } catch (err) {
        return "Error";
    }
}
getUser(1).then(user => console.log(user));