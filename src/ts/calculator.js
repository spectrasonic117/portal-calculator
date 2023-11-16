function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
document.getElementById("x-coord-nether").onkeypress = isNumberKey;
document.getElementById("z-coord-nether").onkeypress = isNumberKey;
document.getElementById("x-coord-overworld").onkeypress = isNumberKey;
document.getElementById("z-coord-overworld").onkeypress = isNumberKey;
document
    .getElementById("x-coord-nether")
    .addEventListener("input", function (event) {
    var xCoordNether = event.target.value;
    var result_x = Math.floor(xCoordNether * 8);
    document.getElementById("x-coord-overworld").value = result_x;
});
document
    .getElementById("z-coord-nether")
    .addEventListener("input", function (event) {
    var zCoordNether = event.target.value;
    var result_z = Math.floor(zCoordNether * 8);
    document.getElementById("z-coord-overworld").value = result_z;
});
document
    .getElementById("x-coord-overworld")
    .addEventListener("input", function (event) {
    var xCoordOverworld = event.target.value;
    var result_x = Math.floor(xCoordOverworld / 8);
    document.getElementById("x-coord-nether").value = result_x;
});
document
    .getElementById("z-coord-overworld")
    .addEventListener("input", function (event) {
    var zCoordOverworld = event.target.value;
    var result_z = Math.floor(zCoordOverworld / 8);
    document.getElementById("z-coord-nether").value = result_z;
});
//  Copy Coords to Clipboard
// document
// 	.getElementById("submit_nether")
// 	.addEventListener("click", function (event) {
// 		var coords = `Place the portal in: ${result_x}, ${result_z} in the Overworld`;
// 		navigator.clipboard.writeText(coords).then(
// 			function () {
// 				console.log("Async: Copying to clipboard was successful!");
// 				alert(
// 					"Copied Coordinates to Clipboard: " +
// 						`${result_x}, ${result_z}`
// 				);
// 			},
// 			function (err) {
// 				alert("Error in copying text: " + err);
// 			}
// 		);
// 	});
// document
// 	.getElementById("submit_nether")
// 	.addEventListener("click", function (event) {
// 		var coords = `Place your portal in: ${result_x}, ${result_z} in the Nether`;
// 		navigator.clipboard.writeText(coords).then(
// 			function () {
// 				console.log("Async: Copying to clipboard was successful!");
// 				alert(
// 					"Copied Coordinates to Clipboard: " +
// 						`${result_x}, ${result_z}`
// 				);
// 			},
// 			function (err) {
// 				alert("Error in copying text: " + err);
// 			}
// 		);
// 	});
