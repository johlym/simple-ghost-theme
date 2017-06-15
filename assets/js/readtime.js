$(document).ready(function() {
    var txt = $('.post')[0].textContent,
    wordCount = txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;

    var readingTimeInMinutes = Math.floor(wordCount / 250) + 1;
    var readingTimeAsString = readingTimeInMinutes + " min";
    $('.reading-time').html(readingTimeAsString);
});