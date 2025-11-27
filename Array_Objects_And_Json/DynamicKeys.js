function createUser(id, name, age) {
    const prefix = 'user_';
    return {
        [prefix + 'id']: id,
        [prefix + 'name']: name,
        [prefix + 'age']: age,
    };
}


console.log(createUser(1, 'Dibas', 16));
