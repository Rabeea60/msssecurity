// HEADER
document.getElementById("header").innerHTML =
        "<div class='row justify-content-center top_header'>"
            +"<div class='col-auto d-none d-lg-block'>" 
                +"<a href='tel:08001577046' class='header_tel grey-text'> <i class='bi bi-telephone-fill pe-2 ms-xl-0 ms-lg-3'></i> 0800 1577 046 </a>"
            +"</div>"
            +"<div class='col-auto ms-3 dropdown d-none pt-1 d-lg-block'>"
                +"<a class='header_dropdown spacing_2 grey-text' href='about.html' id='navbarDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-expanded='false'>ABOUT"
                +"<i class='fa-solid fa-angle-down ms-2'></i>"
                +"</a>"
                +"<ul class='dropdown-menu border-0 rounded-0 p-0' aria-labelledby='navbarDropdownMenuLink'>"
                  +"<li><a class='dropdown-item px-4 py-3' href='about.html'>ABOUT US</a></li>"
                  +"<li><a class='dropdown-item px-4 py-3' href='#'>MEET THE TEAM</a></li>"
                  +"<li><a class='dropdown-item px-4 py-3' href='#'>CLIENTS</a></li>"
                  +"<li><a class='dropdown-item px-4 py-3' href='corporate-responsibility.html'>CORPORATE RESPONSIBILITY</a></li>"
                  +"<li><a class='dropdown-item px-4 py-3' href='recruitment.html'>RECRUITMENTS</a></li>"
                  +"<li><a class='dropdown-item px-4 py-3' href='testimonials.html'>TESTIMONIALS</a></li>"
                  +"<li><a class='dropdown-item px-4 py-3' href='news.html'>NEWS</a></li>"
                  +"</ul>"
                +"</div>"
            +"<div class='col-lg-6 pt-1 grey-text text-center spacing_2 d-none d-lg-block'>"
                +"<span>MANCHESTERS LEADING SECURITY PROVIDER</span>"
            +"</div>"
            +"<div class='col-lg-auto col-12 text-end quote_button p-0'>"
                +"<a class='btn text-white rounded-0 shadow-none py-lg-2 py-3 px-4 w-100 bg_navy' href='quote.html' role='button'>GET A QUOTE</a>"
            +"</div>"
            +"<div class='col-lg-12 col-8 my-2 my-lg-0 text-lg-center text-md-start'>"
                +"<h1><a class='navy-text fs-3 fw-bolder' href='home.html'>MSS SECURITY</a></h1>" 
            +"</div>"
            //   menu bar
            +"<div class='col-4 text-end d-lg-none d-md-block mt-4 my-lg-0'>"
              +"<button type='button' class='bg-white border-0' data-bs-toggle='modal' data-bs-target='#exampleModalFullscreen'>"
                +"<span class='fs-6'> MENU </span>"
                +"<i class='fa-solid fa-bars fs-6'></i>"
              +"</button>"
            +"</div>"
        +"</div>";

// menu list for tab view and mobile view
document.getElementById("exampleModalFullscreen").innerHTML =
    "<div class='modal-dialog modal-fullscreen'>"
      +"<div class='modal-content overflow-auto bg_navy'>"
        +"<div class='modal-header align-items-baseline border-0'>"
          +"<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'><i class='fa-solid fa-xmark text-white fs-4'></i></button>"
        +"</div>"
        +"<div class='modal-body py-0'>"
          +"<ul class='menu_list list-unstyled text-center'>"
              +"<li class='py-2'><img src='images/Logo-Eagle.png' alt='logo' height='170' width='170'></li>"
              +"<li class='py-2'> <a class='text-white fw-bold fs-5 spacing_2' href='home.html'> HOME </a></li>"
              +"<li class='py-2'>" 
            //   about menu list
              +"<div class='dropdown'>"
                +"<button class='btn text-white p-0 shadow-none fw-bold fs-5 spacing_2' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>ABOUT"
                +"</button>"
                +"<ul class='dropdown-menu position-relative text-center border-0 shadow-none bg_navy tab_menu' aria-labelledby='dropdownMenuButton1'>"
                  +"<li><a class='dropdown-item fs-6 fw-normal text-white' href='about.html'>ABOUT US</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='#'>MEET THE CLIENT</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='#'>CLIENTS</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='corporate-responsibility.html'>CORPORATE RESPONSIBILITY</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='#'>SIA APPROVED CONTRACTOR</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='testimonials.html'>TESTIMONIALS</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='#'>AFFLIATES</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='recruitment.html'>RECRUITMENTS</a></li>"
                +"</ul>"
              +"</div>"
            +"</li>"
            +"<li class='py-2'>" 
            //   <services menu list
            +"<div class='dropdown'>"
              +"<button class='btn text-white p-0 shadow-none fw-bold fs-5 spacing_2' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>SERVICES"
              +"</button>"
                +"<ul class='dropdown-menu position-relative text-center border-0 shadow-none bg_navy tab_menu' aria-labelledby='dropdownMenuButton1'>"
                  +"<li><a class='dropdown-item fs-6 fw-normal text-white' href='door-supervision.html'>DOOR SUPERVISION</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='security-guarding.html'>SECURITY GUARDING</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='event-security.html'>EVENT SECURITY</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='close-protection.html'>CLOSE PROTECTION</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='mobile-patrols.html'>MOBILE PATROLS</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='parking.html'>CAR PARK MANAGEMENT</a></li>"
                  +"<li><a class='dropdown-item fw-normal fs-6 text-white' href='facilities-management.html'>FACILITIES MANAGEMENT</a></li>"
              +"</ul>"
            +"</div>"
          +"</li>"
          +"<li class='py-2'> <a class='text-white fw-bold fs-5 spacing_2' href='news.html'> NEWS </a></li>"
          +"<li class='py-2'> <a class='text-white fw-bold fs-5 spacing_2' href='quote.html'> GET A QUOTE </a></li>"
          +"<li class='py-2'> <a class='text-white fw-bold fs-5 spacing_2' href='contact.html'> CONTACT US </a></li>"
          +"<li class='py-4'>"
            +"<a href='#'><i class='fa-brands fa-facebook-f fs-3 px-3'></i></a>"
            +"<a href='#'><i class='fa-brands fa-twitter fs-3 px-3'></i></a>"
            +"<a href='#'><i class='fa-brands fa-instagram fs-3 px-3'></i></a>"
            +"<a href='#'><i class='fa-brands fa-linkedin fs-3 px-3'></i></a>"
          +"</li>"
          +"<li class='site-map py-2 fs-6'> <a class='text-white' href='#'> SITE MAP </a></li>"
        +"</ul>"
      +"</div>"
    +"</div>"
  +"</div>";

// NAVIGATION BAR
document.getElementById("navbar").innerHTML =
    "<div class='container-fluid'>"
        //   +"<button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>"
        //     +"<span class='navbar-toggler-icon'></span>"
        //   +"</button>"
          +"<div class='collapse navbar-collapse justify-content-center' id='navbarNavDropdown'>"
            +"<ul class='navbar-nav spacing_2'>"
              +"<li class='nav-item p-2'>"
                +"<a class='nav-link active pb-1 grey-text' aria-current='page' href='door-supervision.html'>DOOR SUPERVISION</a>"
              +"</li>"
              +"<li class='nav-item p-2'>"
                +"<a class='nav-link pb-1 grey-text' href='security-guarding.html'>SECURITY GUARDING</a>"
              +"</li>"
              +"<li class='nav-item p-2'>"
                +"<a class='nav-link pb-1 grey-text' href='event-security.html'>EVENT SECURITY</a>"
              +"</li>"
              +"<li class='nav-item dropdown p-2'>"
                +"<a class='nav-link pb-1 grey-text' href='#' id='navbarDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-expanded='false'> ADDITIONAL SERVICES"
                 +"<i class='fa-solid fa-angle-down ms-2'></i>"
                +"</a>"
                +"<ul class='dropdown-menu border-0 rounded-0 p-0 navy-text start-0' aria-labelledby='navbarDropdownMenuLink'>"
                  +"<li><a class='dropdown-item px-4 py-3' href='close-protection.html'>CLOSE PROTECTION</a></li>"
                  +"<li><a class='dropdown-item px-4 py-3' href='key-holding.html'>KEY HOLDING</a></li>"
                  +"<li><a class='dropdown-item px-4 py-3' href='mobile-patrols.html'>MOBILE PATROLS</a></li>"
                  +"<li><a class='dropdown-item px-4 py-3' href='parking.html'>CAR PARK MANAGEMENT</a></li>"
                  +"<li><a class='dropdown-item px-4 py-3' href='facilities-management.html'>FACILITIES MANAGEMENT</a></li>"
                +"</ul>"
              +"</li>"
            +"</ul>"
          +"</div>"
        +"</div>";

// FOOTER
    // footer links
    document.getElementById("footer_links").innerHTML =
        "<div class='row justify-content-lg-center my-3 footer_links text-white'>"
          +"<div class='col-lg-4 col-md-6 pt-3 pb-4'>"
              +"<h4 class='fw-bold'>MSS SECURITY</h4>"
              +"<p>Rollins Capital Ventures LTD T/A MSS Security – Door Supervision, Security Guarding & Keyholding.</p>"
          +"</div>"
          +"<div class='col-md-6 d-lg-none d-sm-block'></div>"
          +"<div class='col-lg-2 col-md-4 col-sm-6 pt-3'>"
            +"<h4 class='fw-bold'>NAVIGATE</h4>"
            +"<ul class='p-0 list-unstyled'>"
                +"<li class='pt-2'><a class='text-white' href='about.html'>About Us</a></li>"
                +"<li class='pt-2'><a class='text-white' href='#'>Affliates</a></li"
                +"<li class='pt-2'><a class='text-white' href='contact.html'>Contact</a></li>"
                +"<li class='pt-2'><a class='text-white' href='recruitment.html'>Recruitment</a></li>"
                +"<li class='pt-2'><a class='text-white' href='#'>Complaints</a></li>"
            +"</ul>"
          +"</div>"
          +"<div class='col-lg-2 col-md-4 col-sm-6 pt-3'>"
            +"<h4 class='fw-bold'>SERVICES</h4>"
            +"<ul class='p-0 list-unstyled'>"
                +"<li class='pt-2'><a class='text-white' href='door-supervision.html'>Door Supervision</a></li>"
                +"<li class='pt-2'><a class='text-white' href='security-guarding.html'>Security Guarding</a></li>"
                +"<li class='pt-2'><a class='text-white' href='event-security.html'>Event Security</a></li>"
                +"<li class='pt-2'><a class='text-white' href='close-protection.html'>Close Protection</a></li>"
                +"<li class='pt-2'><a class='text-white' href='#'>All Services</a></li>"
            +"</ul>"
          +"</div>"
          +"<div class='col-lg-2 col-md-4 col-sm-6 pt-3'>"
            +"<h4 class='fw-bold'>CONTACT US</h4>"
            +"<ul class='p-0 list-unstyled'>"
                +"<li class='pt-2'><a class='text-white' href='tel:08001577046'>0800 1577 046</a></li>"
                +"<li class='pt-2'><a class='text-white' href='#'> enquiries@mcrsecurity.co.uk</a></li>"
                +"<li class='pt-2'><a class='text-white' href='#'>MSS House, 50 Old Church St,Manchester, M40 2JF</a></li>"
            +"</ul>"
          +"</div>"
        +"</div>";

    // copyrite
    document.getElementById("copyrite").innerHTML =
        "<div class='row justify-content-center p-3 footer_copyrite'>"
            +"<div class='col-lg-8 col-12 grey-text  text-lg-start text-center'>"
                +"<span>© 2022. All rights reserved. Rollins Capital Ventures Ltd T/A MSS Security. Company Reg. No. 06499740</span>"
            +"</div>"
            +"<div class='col-lg-auto col-3  text-lg-end'>"
                +"<a class='grey-text' href='#'>Sitemap</a>"
            +"</div>"
            +"<div class='col-lg-auto col-3  text-end'>"
                +"<a class='grey-text' href='#'>Privacy</a>"
            +"</div>"
            +"<div class='col-lg-auto col-6  text-end'>"
                +"<a class='grey-text' href='#'>Web Design by MRO</a>"
            +"</div>"
        +"</div>";

    // back to top button
    let mybutton = document.getElementById("btn-back-to-top");
    window.onscroll = function () {
    scrollFunction();
    };

    function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
