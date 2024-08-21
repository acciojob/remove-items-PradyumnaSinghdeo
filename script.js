//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click', function() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedOption = colorSelect.selectedIndex;

    if (selectedOption !== -1) {
        colorSelect.remove(selectedOption);
    }
});
