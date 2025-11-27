
function variableScopeDemo() {
    var functionVar = 'function var (initial)';
    let functionLet = 'function let (initial)';
    const functionConst = 'function const (initial)';

    console.log('Inside function, before block:');
    console.log('  functionVar:', functionVar);
    console.log('  functionLet:', functionLet);
    console.log('  functionConst:', functionConst);

    if (true) {
        var functionVar = 'function var (reassigned in block)';
        let functionLet = 'block let (block-scoped)';
        const functionConst = 'block const (block-scoped)';

        console.log('Inside block:');
        console.log('  functionVar:', functionVar);
        console.log('  functionLet:', functionLet);
        console.log('  functionConst:', functionConst);
    }

    console.log('Inside function, after block:');
    console.log('  functionVar:', functionVar);
    console.log('  functionLet:', functionLet);
    console.log('  functionConst:', functionConst);
}

variableScopeDemo();

console.log('Outside function:');
['functionVar', 'functionLet', 'functionConst'].forEach(name => {
    try {
        console.log(`  ${name}:`, eval(name));
    } catch (err) {
        console.log(`  ${name}: not accessible (ReferenceError)`);
    }
});