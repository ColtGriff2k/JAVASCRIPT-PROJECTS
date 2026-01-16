function textChange() {
    var swapText = new XMLHttpRequest();
    swapText.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("changed").innerHTML = this.responseText;
        }
    };
    swapText.open('GET', 'ajax_chllng_1-response.html', true);
    swapText.send();
}