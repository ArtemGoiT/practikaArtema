// node --inspect-brk example-3

for (let i = 0; i < 4; i++) {
    if (i === 3) {
        throw new Error('booom!');
    }
}
