$(function () {
    var title = document.title,
        animation = ["|"],
        animindex = 0,
        titleindex = 0;
    function doInverseSpinZeroPitch() {
        var loadtitle = title.substring(0, titleindex);
        if (titleindex > title.length) {
            animindex = 0;
            titleindex = 0
        }
        if (animindex > 1) {
            titleindex++;
            animindex = 0
        }
        document.title = loadtitle + animation[0];
        animindex++
    }
    window.setInterval(doInverseSpinZeroPitch, 200);
});
