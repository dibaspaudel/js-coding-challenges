export function safeParse(jsonStr) {
    try {
        return JSON.parse(jsonStr);
    } catch (e) {
        return "Invalid JSON";
    }
}

const examples = [
    '{"name":"Dibas","age":16}',
    '["red","green","blue"]',
    '"Doing my Assignment"',
    '100',
    'true',
    '{missing: "quotes"}',
    '{"trailing": "comma",}',
    ''
];

examples.forEach(input => {
    console.log('input:', input, '=>', safeParse(input));
});