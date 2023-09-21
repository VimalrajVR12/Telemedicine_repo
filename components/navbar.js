
function navbar(){
    return `
    <div class="navbar" id="navbar_normal">
            <div class="navbar_left">
                <div class="logo"><a id="gradient-text" href="./index.html">TELE MEDICINE</a></div>
                <ul class="links">
                    <div class="left">
                        <li>
                            <a class="subMenuHead" href="productpage.html">Medicines</a>
                            <ul class="subMenu hide" id="Medicines">
                                <li><a href="">Beauty Care</a></li>
                                <li><a href="">Health & Care</a></li>
                            </ul>
                        </li>
                        <li>
                            <a class="subMenuHead" href="">Doctors</a>
                            <ul class="subMenu hide" id="Doctors">
                                <li><a href="">Physiotherapist</a></li>
                                <li><a href="">Health Specialist</a></li>
                            </ul>
                        </li>
                        <li>
                            <a class="subMenuHead" href="">Pharmacy</a>
                            <ul class="subMenu hide" id="Pharmacy">
                                <li><a href="">Hospital</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </li>
                        <li>
                            <a class="subMenuHead" href="">Other Services</a>
                            <ul class="subMenu hide" id="Other Services">
                                <li><a href="">Hospital</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </li>
                    </div>
                    <div class="right">
                        <li>
                            <a class="subMenuHead" href="login.html">Signin</a>
                            <ul class="subMenu hide" id="Signin">
                                <li><a href="">User Name</a></li>
                                <li><a href="">Log out</a></li>
                            </ul>
                        </li>
                        <div><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></div>
                    </div>
                </ul>
            </div>
            <!-- <div class="navbar_right">
                <ul class="user">
                    <li><a href="./login.html">Signin</a></li>
                </ul>
                <div><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></div>
            </div> -->
        </div>
        <nav class="navbar navbar-expand-lg bg-light" id="navbar_mobile">
            <div class="container-fluid">
                <div class="container_left">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="index.html" id="gradient-text">TELE MEDICINE</a>
                </div>
                <div class="container_right">
                    <ul class="user">
                        <li><a href="./login.html">Signin</a></li>
                    </ul>
                    <div><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></div>
                </div>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 collapse-horizontal">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Medicine
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Beauty Care</a></li>
                                <li><a class="dropdown-item" href="#">Health & Care</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Doctors
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Physiotherapists</a></li>
                                <li><a class="dropdown-item" href="#">Specialists</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pharmacy
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Beauty Care</a></li>
                                <li><a class="dropdown-item" href="#">Health & Care</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Other Services
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Hospitals</a></li>
                                <li><a class="dropdown-item" href="#">Contact Us</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    </form>
                </div>
            </div>
          </nav>
    `
}

export default navbar;

