document.getElementById("boxx").addEventListener("click", function() {
   var boxx = document.getElementById("boxx");
   var currentLeft = parseInt(boxx.style.left) || 0;
   var currentTop = parseInt(boxx.style.top) || 0;
   var newLeft = currentLeft + 50; // Example change in position
   var newTop = currentTop + 50; // Example change in position
   boxx.style.left = newLeft + "px";
   boxx.style.top = newTop + "px";
});
