// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
    $(function () {


        $(".devour-class").on("submit", function (event) {
            event.preventDefault();

            var id = $(this).children(".burger_id").val();
            var newDevour = $(this).children(".devour_state").val();
            var newCustomer = $(this).children(".customer-input").val();

            var burgerInfo = {
                devoured: newDevour,
                customer: newCustomer,
                burger_id: id
            };

            console.log(burgerInfo);


            // Send the PUT request.
            $.ajax("/api/burgers/update", {
                type: "PUT",
                data: burgerInfo
            }).then(
                function () {
                    console.log("changed devour to", newDevour);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });

        $(".create-form").on("submit", function (event) {
            // preventDefault on a submit event.
            event.preventDefault();
            var burgerName = $("#newburger");
            //console.log("burgerName = *" + burgerName.val() + '*');

            if (!burgerName.val().length > 0) { //empty input value
                return;
            }

            var newBurger = {
                burger_name: burgerName.val().trim(),
                devoured: false
            };


            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });


        // Delete a burger
        $(".delete-burger").on("click", function (event) {
            event.preventDefault();

            var id = $(this).data("id");

            // Send the DELETE request.
            $.ajax("/api/burgers/" + id, {
                type: "DELETE"
            }).then(
                function () {
                    console.log("deleted burger ", id);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });
    });
});
