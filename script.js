function showIceCream() {
    document.getElementById('Creambun').classList.remove('hidden');
}

function showPizza() {
    document.getElementById('shawarma').classList.remove('hidden');
}

function showHeart(food) {
    document.getElementById('heart').classList.remove('hidden');
    document.getElementById('heartText').innerText = `Deal! I'll buy you ${food}.`;
}

function showOptions() {
    document.getElementById('thenWhat').classList.remove('hidden');
}

function showThenWhat() {
    document.getElementById('thenWhat').classList.remove('hidden');
}

function goAway() {
    alert("Okay, I'll leave you alone.");
}
