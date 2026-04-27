function opsop(){
    const shopMenu = document.getElementById("shopMenu");
    shopMenu.classList.remove("hidden");
}

function closop(){
    const shopMenu = document.getElementById("shopMenu");
    shopMenu.classList.add("hidden");
}

let selectedItem = null;
document.addEventListener("DOMContentLoaded", () => {


    document.querySelectorAll(".item").forEach(item => {
        item.addEventListener("click", () => {
            const name = item.dataset.name;
            const price = item.dataset.price;
            const desc = item.dataset.desc;
            const img = item.src; // ✅ THIS LINE

            selectedItem = { name, price };

            document.getElementById("itemName").innerText = name;
            document.getElementById("itemDesc").innerText = desc;
            document.getElementById("itemPrice").innerText = price + " Gold";
            document.getElementById("itemImg").src = img; // ✅ SET IMAGE

            document.getElementById("itemDetail").classList.remove("hidden");
        });
    });
});

function closeItem() {
    document.getElementById("itemDetail").classList.add("hidden");
}

function buyItem() {
    alert("Bought " + selectedItem.name);
}
function opmith() {
    document.getElementById("smithMenu").classList.remove("hidden");
}

function clomith() {
    document.getElementById("smithMenu").classList.add("hidden");
}

function opild() {
    document.getElementById("guildMenu").classList.remove("hidden");
}

function cloild() {
    document.getElementById("guildMenu").classList.add("hidden");
}