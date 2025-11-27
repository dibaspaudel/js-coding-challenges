const original = {
    name: 'Dibas',
    age: 16,
    address: { city: 'Thamel', zip: 1234 },
    hobbies: ['reading', 'writing'],
};

// Shallow copy using spread
const shallow = { ...original };

// Deep copy using JSON methods
const deep = JSON.parse(JSON.stringify(original));

// Modify shallow copy
shallow.name = 'Sanny';                 
shallow.address.city = 'Teku'; 
shallow.hobbies.push('coding');       

// Modify deep copy
deep.name = 'Manisha';              
deep.address.city = 'UK';          
deep.hobbies.push('travel');         

console.log('Original:', original);
console.log('Shallow:', shallow);
console.log('Deep:', deep);

console.log('\nEffects on original:');
console.log('Shallow changed top-level "name" -> original.name ===', original.name);
console.log('Shallow changed nested "address.city" -> original.address.city ===', original.address.city);
console.log('Shallow pushed to "hobbies" -> original.hobbies ===', original.hobbies);

console.log('Deep changed nested "address.city" -> original.address.city ===', original.address.city === 'Paris' ? 'affected' : 'not affected');
console.log('Deep pushed to "hobbies" -> original.hobbies.includes("travel") ? ', original.hobbies.includes('travel'));