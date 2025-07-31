class Player {
    constructor(id, startingLife = 0) {
        this.id = id;
        this.LifeTotal = startingLife;
    }

    setLifeTotal(newTotal) {
        this.LifeTotal = newTotal;
    }

    incrementLife() {
        const btn = document.getElementById(`increment${this.id}`);
        btn.classList.add('button-an');

        this.LifeTotal++;

        const el = document.getElementById(`p${this.id}Life-el`);
        if (el) el.textContent = this.LifeTotal;

        btn.addEventListener('animationend', () => {
            btn.classList.remove('button-an');
        }, { once: true });
    }

    decrementLife() {
        const btn = document.getElementById(`decrement${this.id}`);
        btn.classList.add('button-an');

        this.LifeTotal--;

        const el = document.getElementById(`p${this.id}Life-el`);
        if (el) el.textContent = this.LifeTotal;

        btn.addEventListener('animationend', () => {
            btn.classList.remove('button-an');
        }, { once: true });
    }

    getLifeTotal() {
        return this.LifeTotal;
    }
}

const player = new Player();