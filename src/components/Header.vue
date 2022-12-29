<template>
  <header>
    <!--Navigation-->
    <nav
      class="navbar navbar-top-default navbar-expand-lg navbar-simple nav-line"
    >
      <div class="container">
        <a href="#home" title="Logo" class="logo scroll">
          <!--Logo Default-->
          <img src="studio/img/logo.png" alt="logo" class="logo-dark" />
        </a>

        <!--Nav Links-->
        <div class="collapse navbar-collapse" id="megaone">
          <div class="navbar-nav ml-auto">
            <a class="nav-link active scroll" href="#home">Home</a>
            <a class="nav-link scroll" href="#about">Riot Games</a>
            <a class="nav-link scroll" href="#team">Lost Ark</a>
            <a class="nav-link scroll" href="#portfolio">Metin 2</a>
            <a class="nav-link scroll" href="#client">Social Media</a>
            <a class="nav-link scroll" href="#contact">Contact</a>
          </div>
        </div>

        <!--Side Menu Button-->
        <a href="javascript:void(0)" class="sidemenu_btn" id="sidemenu_toggle">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </nav>

    <!--Side Nav-->
    <div class="side-menu hidden">
      <div class="inner-wrapper">
        <span class="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
        <nav class="side-nav w-100">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link scroll" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link scroll" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link scroll" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link scroll" href="#portfolio">Work</a>
            </li>
            <li class="nav-item">
              <a class="nav-link scroll" href="#client">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link scroll" href="#blog">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link scroll" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div class="side-footer text-white w-100">
          <ul class="social-icons-simple">
            <li>
              <a class="facebook-text-hvr" href="javascript:void(0)"
                ><i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a class="instagram-text-hvr" href="javascript:void(0)"
                ><i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a class="twitter-text-hvr" href="javascript:void(0)"
                ><i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <p class="text-white">
            &copy; 2020 SagaStore. Made With Love by Themesindustry
          </p>
        </div>
      </div>
    </div>
    <a id="close_side_menu" href="javascript:void(0);"></a>
    <!-- End side menu -->
  </header>
</template>

<script>
export default {};
</script>

<style></style>
