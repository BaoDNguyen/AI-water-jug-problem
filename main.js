function showResult() {
    let result = BlindSearch.BFS(initial,goal);
    let line = result.length;
    d3.select('#myDiv').append('canvas')
        .attr('id','myCanvas')
        .attr('width',1000)
        .attr('height',100*line+200);
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    if (line > 0) {
        ctx.beginPath();
        ctx.font = '30px Arial';
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillText('From initial state: ('+initial[0].toString()+','+initial[1].toString()+')',100,100);
        ctx.fill();
        ctx.closePath();
        for (let i = 0; i < line; i++) {
            let state = result[line-1-i].state;
            let action = result[line-1-i].action;
            ctx.beginPath();
            ctx.font = '30px Arial';
            ctx.fillStyle = 'rgb(0,0,0)';
            ctx.fillText(action + ' to get the state: (' + state[0].toString() + ',' + state[1].toString() + ')',100,200 + 100 * i);
            ctx.fill();
            ctx.closePath();
        }
    } else {
        ctx.beginPath();
        ctx.font = '30px Arial';
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillText('Breadth first search fails',100,100);
        ctx.fill();
    }
}

showResult();
