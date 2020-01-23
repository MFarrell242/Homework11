$(function() {

    $(".munch").on("click", event=>{
        var id = $(this).data("id");
        $.ajax("/api/burgs/" + id, {
            type: "PUT",
            data: {eaten: true}
        }).then(function(){
            console.log("burger eaten");
            location.reload();
        });
    });

    $(".create-form").on("submit", event=>{
        event.preventDefault();
        var newBurg = {
            burger_name: $("#ca").val().trim()
        };
        $.ajax("api/burgs", {
            type: "POST",
            data: newBurg
        }).then(function(){
            console.log("order in");
            location.reload();
        });
    });

    $(".yeet").on("click", event=>{
        var id = $(this).data("id");

        $.ajax("/api/burgs/" + id, {
            type: "DELETE"
        }).then(function(){
            console.log("in the garbage with you!");
            location.reload();
        });
    });

});