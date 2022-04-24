const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = innerWidth;
const height = canvas.height = innerHeight;
const str = "012 345 678 9aA αΔb BcC dDe EfF gGh HiI δζj JkK lLm MnN oOp PqQ rRs StT uUΞ μvV wWx XyY zZ⨕ ⨚⨔⨐ ξπς ⨏⨒⨛ ⨜⨎⨊ ⨋⨍^";
const matrix = str.split('');
const font = 20;
const widthFont = width / font;
const arr = [];

for(let i = 0; i < widthFont; i++){
    arr[i] = 1;
}
console.log(arr);
console.log(matrix);

setInterval(() => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#00ff00';
    ctx.font = `${font}px system-ui`;

    for(let i = 0; i < arr.length; i++){
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font)

        if(arr[i] * font > height && Math.random() > .975){
            arr[i] = 0;
        }
        arr[i]++;
    }
}, 30)

window.addEventListener('resize', () => location.reload());