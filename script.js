function generateGrids(size)
{
    const container = document.querySelector("#board");
    for(let i = 0; i < size; i++)
    {
        const grid = document.createElement("div");
        container.appendChild(grid);
        grid.style.display = "inline-flex";
        grid.style.gap = "0";
        grid.style.justifyContent = "space-between";
        grid.style.alignContent = "stretch";
        grid.style.flexGrow = "1";
        grid.setAttribute("class", "rowGrid");
        for(let j = 0; j < size; j++)
        {
            const subGrid = document.createElement("div");
            grid.appendChild(subGrid);
            subGrid.style.display = "inline-block";
            subGrid.style.flexGrow = "1";
            subGrid.style.backgroundColor = "white";
            subGrid.setAttribute("class", "griddy");
        }
    }
    const grids = document.querySelectorAll(".griddy");
    grids.forEach((grid) => {
        grid.addEventListener("mousemove", function (e){
            if (e.buttons === 1) 
            {
                e.target.style.backgroundColor = color;
            }
        })
        grid.addEventListener("click", function (e){
            e.target.style.backgroundColor = color;
        });
    });
}

let size = 50;
generateGrids(size);
var color = "black";

function erase()
{
    color = "white";
}

function clear()
{
    const grids = document.querySelectorAll(".griddy");
    grids.forEach((grid) => {
        grid.style.backgroundColor = "white";
    });
}

function draw()
{
    color = "black";
}

function remove()
{
    const grids = document.querySelectorAll(".rowGrid");
    const container = document.querySelector("#board");
    console.log("test2");
    grids.forEach((grid) =>
    {
        container.removeChild(grid);
        console.log("test");
    });
}

function resize()
{
    do {
        size = prompt("What do you want the length of a side to be in pixels? (100 max)");
    } while(size > 100 || size < 1);
    remove();
    generateGrids(size);
}


const erasorButton = document.querySelector("#erasor");
erasorButton.addEventListener("click", erase);

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clear);

const drawButton = document.querySelector("#draw");
drawButton.addEventListener("click", draw);

const sizeButton = document.querySelector("#size");
sizeButton.addEventListener("click", resize);

