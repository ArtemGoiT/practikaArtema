// node --inspect-brk example-2

const month = ['August', 'September', 'October'];

for (let i = 0; i < month.length; i++) {
    const el = month[i];
    debugger;
    const str = el.toUpperCase();
    debugger;
}
