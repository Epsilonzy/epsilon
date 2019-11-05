function zyNavbar() {
    function selectBlock() {
        if (window.innerWidth <= 900) {
            document.getElementsByClassName('menu')[0].style.display = 'none';
            document.getElementById('menuBtn').style.display = 'block';
        }
        if (window.innerWidth > 900) {
            document.getElementsByClassName('menu')[0].style.display = 'block';
            document.getElementById('menuBtn').style.display = 'none';
        }
    }
    selectBlock();
    menuBtn();

    function menuBtn() {
        let btn = document.getElementById('menuBtn');
        btn.addEventListener('click', function() {
            let menuHid = document.getElementById('menuHidden');
            if (menuHid.style.display == 'none') {
                menuHid.style.display = 'block';
            } else {
                menuHid.style.display = 'none';
            }
        })
    }
    window.addEventListener('resize', function() {
        selectBlock();
    })
}