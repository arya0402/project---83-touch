canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var last_position_of_x, last_position_of_y;
var width = screen.width;
var height = screen.height;
new_width = screen.width - 70;
new_height = screen.height - 300;
var mouseEvent = "empty";

color = "black";
width_of_line = 1;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("colorInput").value;
    width_of_line = document.getElementById("widthInput").value
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";

}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    color = document.getElementById("colorInput").value;
    width_of_line = document.getElementById("widthInput").value
    console.log("my_touchstart");
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("last position of x = " + last_position_of_touch_x + " last position of y = " + last_position_of_touch_y);
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);

    console.log("current position of x = " + current_position_of_touch_x + " current position of y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    console.log(mouseEvent);
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        console.log("Current poisition of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x = " + last_position_of_x + " last position of y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x = " + current_position_of_mouse_x + " current position of y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clearArea(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
