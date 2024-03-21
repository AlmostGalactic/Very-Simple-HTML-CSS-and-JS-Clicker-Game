const clickCount = document.getElementById("clickCount");

const upgrades = {
    "Mini Upgrade: 5":5,
    "Normal Upgrade: 20":20,
    "Alright Upgrade: 100": 100,
    "Good Upgrade: 250": 250,
    "Awesome Upgrade: 500": 500,
    "Great Upgrade: 1000": 1000,
    "Ultra Upgrade: 10000": 10000,
    "Ultra Max Upgrade: 200000": 200000,
}


const clicker = {
    clickBtn: document.getElementById("clickBtn"),
    bonus: 0,
    clicks: 0,
    increment: ()=>{
        clicker.add(1+Math.floor(clicker.bonus));
        updateCount();
    },
    add: (amount)=>{
        clicker.clicks += amount;
        updateCount();
    },
    decrease: (amount)=>{
        clicker.clicks -= amount;
        updateCount();
    }
}

function updateCount(){
    clickCount.textContent = `Clicks: ${clicker.clicks}`
}

updateCount();

clicker.clickBtn.addEventListener("click", ()=>{
    clicker.increment();
});

document.querySelectorAll(".upgrades").forEach((element)=>{
    element.addEventListener("click", ()=>{
        const name = element.textContent;
        const price = upgrades[name];

        if (clicker.clicks >= price) {
            clicker.bonus += price-price/2;
            clicker.decrease(price);
        }
    });
});