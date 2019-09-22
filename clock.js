const clock = document.querySelector('.clock');




const calc = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const clk = `
        <span class="border border-success">${h}</span> :
        <span class="border border-warning">${m}</span> :
        <span class="border border-warning">${s}</span>
    `
    clock.innerHTML = clk;
}

setInterval(calc, 1000);

