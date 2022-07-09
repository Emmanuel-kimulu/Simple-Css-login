setInterval(function time() {
  let d = new Date();
  let hours = 24 - d.getHours();
  let min = 60 - d.getMinutes();
  if ((min + "").length == 1) {
    min = "0" + min;
  }

  let sec = 60 - d.getSeconds();
  if ((sec + "").length == 1) {
    sec = "0" + sec;
  }

  jQuery("#timer p").html(hours + " : " + min + " : " + sec);
}, 1000);

//dispay the input form form
document.getElementById("here").onclick = function () {
  document.getElementById("submit-form-1").style.display = "none";
  document.getElementById("submit-form-1").style.visibility = "hidden";
  document.getElementById("submit-form").style.visibility = "visible";
  document.getElementById("submit-form").style.display = "block";
};

const image_Input = document.querySelector("#image-input");
var uploaded_image = "";
image_Input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(
      "#display-image"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });

  reader.readAsDataURL(this.files[0]);
});

document.getElementById("save").onclick = function () {
  document.getElementById("submit-form").style.visibility = "hidden";
  document.getElementById("submit-form").style.display = "none";
  document.getElementById("submit-form-1").style.display = "block";
  document.getElementById("submit-form-1").style.visibility = "visible";
};
