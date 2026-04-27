document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        const name = item.dataset.name;
        const price = item.dataset.price;
        const img = item.src;

        const desc = item.dataset.desc;

        const damage = item.dataset.damage;
        const speed = item.dataset.speed;
        const durability = item.dataset.durability;
        const type = item.dataset.type;

        document.getElementById("itemName").innerText = name;
        document.getElementById("itemImg").src = img;
        document.getElementById("itemPrice").innerText = price + " Gold";

        //potion
        if (desc) {
            document.getElementById("itemDesc").innerText = desc;
        } 
        //weapon
        else {
            document.getElementById("itemDesc").innerText =
                "DMG: " + damage +
                " | SPD: " + speed +
                " | DUR: " + durability +
                " | TYP: " + type;
        }

        document.getElementById("itemDetail").classList.remove("hidden");
    });
});
function opsop(){
    closeAllMenus();
    document.getElementById("shopMenu").classList.remove("hidden");
}

function opmith() {
    closeAllMenus();
    document.getElementById("smithMenu").classList.remove("hidden");
}

function opild() {
    closeAllMenus();
    document.getElementById("guildMenu").classList.remove("hidden");
}

function closop(){
    const shopMenu = document.getElementById("shopMenu");
    shopMenu.classList.add("hidden");
}

function clomith() {
    document.getElementById("smithMenu").classList.add("hidden");
}

function cloild() {
    document.getElementById("guildMenu").classList.add("hidden");
}

function closeItem() {
    document.getElementById("itemDetail").classList.add("hidden");
}

function closeAllMenus() {
    document.getElementById("shopMenu").classList.add("hidden");
    document.getElementById("smithMenu").classList.add("hidden");
    document.getElementById("guildMenu").classList.add("hidden");
}