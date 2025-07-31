class Grids {
    constructor() {
        this.twoGridWrapper = document.getElementById('twoGridWrapper-el');
        this.threeGridWrapper = document.getElementById('threeGridWrapper-el');
        this.fourGridWrapper = document.getElementById('fourGridWrapper-el');
        this.startingLife = 0;

        this.allPlayers = [];
        for (let i = 1; i <= 4; i++) {
            this.allPlayers.push(new Player(i, this.startingLife));
        }
    }

    setStartingLife(life) {
        this.startingLife = life;
        this.allPlayers.forEach(player => player.setLifeTotal(this.startingLife));
    }

    addPlayers(gridContainer, count) {
        for (let i = 1; i <= count; i++) {
            const player = this.allPlayers[i - 1];

            const item = document.createElement('div');
            item.classList.add('twoPlayerContainer');

            const life = document.createElement('div');
            life.classList.add('lifeText');
            life.textContent = player.getLifeTotal();
            life.id = `p${i}Life-el`;
            item.appendChild(life);

            const pName = document.createElement('div');
            pName.classList.add('playerText');
            pName.textContent = `Player ${i}`;
            item.appendChild(pName);

            const op = document.createElement('div');
            op.classList.add('operationContainer');

            const plus = document.createElement('button');
            plus.id = `increment${i}`;
            plus.textContent = '+';
            plus.onclick = () => player.incrementLife();
            op.appendChild(plus);

            const minus = document.createElement('button');
            minus.id = `decrement${i}`;
            minus.textContent = '-';
            minus.onclick = () => player.decrementLife();
            op.appendChild(minus);

            item.appendChild(op);
            gridContainer.appendChild(item);
        }
    }

    clearAllGrids() {
        this.twoGridWrapper.innerHTML = '';
        this.threeGridWrapper.innerHTML = '';
        this.fourGridWrapper.innerHTML = '';
    }

    twoGrid() {
        const btn = document.getElementById("twoPlayers-btn");
        btn.classList.add('button-an');

        this.clearAllGrids();

        const gridContainer = document.createElement('div');
        gridContainer.classList.add('twoPlayerContainer');
        gridContainer.id = 'twoGridContainer-el';

        this.addPlayers(gridContainer, 2);
        this.twoGridWrapper.appendChild(gridContainer);

        btn.addEventListener('animationend', () => {
            btn.classList.remove('button-an');
        }, { once: true });
    }

    threeGrid() {
        const btn = document.getElementById("threePlayers-btn");
        btn.classList.add('button-an');

        this.clearAllGrids();

        const gridContainer = document.createElement('div');
        gridContainer.classList.add('defPlayerContainer');
        gridContainer.id = 'threeGridContainer-el';

        this.addPlayers(gridContainer, 3);
        this.threeGridWrapper.appendChild(gridContainer);

        btn.addEventListener('animationend', () => {
            btn.classList.remove('button-an');
        }, { once: true });
    }

    fourGrid() {
        const btn = document.getElementById("fourPlayers-btn");
        btn.classList.add('button-an');

        this.clearAllGrids();

        const gridContainer = document.createElement('div');
        gridContainer.classList.add('defPlayerContainer');
        gridContainer.id = 'fourGridContainer-el';

        this.addPlayers(gridContainer, 4);
        this.fourGridWrapper.appendChild(gridContainer);

        btn.addEventListener('animationend', () => {
            btn.classList.remove('button-an');
        }, { once: true });
    }
}

const grids = new Grids();