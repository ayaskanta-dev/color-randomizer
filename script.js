function generateNew() {
    const color = '#' + (Math.floor(Math.random() * 16777215).toString(16));
    document.getElementById('color').style.backgroundColor = color;
    document.getElementById('detail').innerHTML = color;
}