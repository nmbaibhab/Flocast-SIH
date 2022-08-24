/* eslint-disable no-undef */
if ("serviceWorker" in navigator) {
  // we are checking here to see if the browser supports the service worker api
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        // Registration was successful
        console.log(
          "Service Worker registration was successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );

    navigator.serviceWorker.ready
      .then(function (registration) {
        console.log("Service Worker Ready");
        return registration.sync.register("sendFormData");
      })
      .then(function () {
        console.log("sync event registered");
      })
      .catch(function () {
        // system was unable to register for a sync,
        // this could be an OS-level restriction
        console.log("sync registration failed");
      });
  });
}

function submitFunction(event) {
  event.preventDefault();
  console.log("submitted", event);
  let name = $("#name").val();
  let image = $("#image").val();
  let level = $("#level").val();
  console.log("values,", name, image, level);
  $("#my_form").hide();
  // send  to server
  var data = {
    name,
    image,
    level,
  };
  // send message to service worker via postMessage
  var msg = {
    form_data: data,
  };
  navigator.serviceWorker.controller.postMessage(msg); // <--- This line right here sends our data to sw.js

  $.ajax({
    type: "POST",
    url: "/submit",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function () {
      console.log("data sent to server successfully");
    },
    dataType: "json",
  });

  message = "Your data has been sent to the server";
  $("#message").append(message);

  return false;
}
