$(function () {
    const $infinityBtn = $("#loader");
    const $timelineCard = $(".timeline-card");

    $infinityBtn.click(function() {
        $timelineCard.fadeOut(2000).hide();
        $timelineCard.toggleClass("hidden");
        $timelineCard.not(".hidden").fadeIn(2000);
    });
})

