function changeColor(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    document.body.style.backgroundColor = "#" + randomColor;
    
    const colorDiv = document.getElementById("color");
    const textDiv = document.getElementById("text");

    if (randomColor === '000000') {
        colorDiv.style.display = 'none';
    } else {
        colorDiv.style.display = 'inline-block';
        colorDiv.textContent = "#" + randomColor;
       
    }
}
