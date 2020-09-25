document.getElementById('checkbox').onclick = function() {
    toggleSub(this, 'ul');
};

function toggleSub(box, id) {
    let el = document.getElementById(id);
    
    if ( box.checked ) {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}