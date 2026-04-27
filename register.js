function selectClass(selected) {
    document.querySelectorAll(".class-card").forEach(card => {
        card.classList.remove("selected");
    });

    selected.classList.add("selected");
}

function selectGender(selected) {
    document.querySelectorAll(".gender-card").forEach(card => {
        card.classList.remove("selected");
    });

    selected.classList.add("selected");

    document.getElementById("genderInput").value = selected.dataset.value;
}

function goBack() {
    window.history.back();
}