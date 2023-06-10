{
    const canvas = document.getElementById("loading");
    const ctx = canvas.getContext("2d");

    theta = 0;
    circles = 9;
    xCenter = canvas.width/2;
    yCenter = canvas.height/2;
    colors = ["#bc231c", "#91910d", "#cc9317", "#4c7f82", "#a55d80", "#699763", "#c85801"];
    cOrder = Array.from(Array(circles), (_, __) => Math.floor(Math.random()*(colors.length))%circles);
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(var i = 0; i < circles; i++) {
            drawCircPath(ctx, xCenter, yCenter, 200, theta - 2*Math.PI/(circles) * i);
            ctx.fillStyle = colors[cOrder[i]];
            // ctx.fillStyle
        }
        theta+=0.01;
    }, 500/60);
}

function drawCircPath(ctx, x, y, radius, theta) {
    xPath = x + radius*Math.cos(theta);
    yPath = y + radius*Math.sin(theta);
    ctx.beginPath();
    ctx.arc(xPath, yPath, 35, 0, 2*Math.PI);
    ctx.fill();
}
