// ui.service.ts

import { Injectable } from '@angular/core';
import Swiper from 'swiper';
import "../../../node_modules/jarallax/dist/jarallax.min";
import "../../../node_modules/venobox/dist/venobox";
import "../../../node_modules/picturefill/dist/picturefill";
import "../../../node_modules/waypoints/lib/jquery.waypoints";
import "../../../node_modules/jquery.counterup/jquery.counterup.min";
import '../../../node_modules/jquery-stickit/build/jquery.stickit.min';
import '../../../node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id';

declare var $: any;

@Injectable({
  providedIn: 'root',
})
export class UiService {
  initializePlugins(): void {
    $(function () {
      /* Inserta y quita la clase ".icono-cerrar" al botón del menú */
      $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
      });

      /* Al hacer clic en un enlace del menú principal */
      $('#menu-navegacion .navbar-nav a').click(function () {
        /* Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');
        /* Contrae el menú */
        $('#menu-navegacion .navbar-collapse').collapse('hide');
      });

      /* Inicializando Swiper */
      const swiper = new Swiper('#animacion', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        speed: 500,
        effect: 'fade',
        grabCursor: true,
        loop: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      });

      /* Inicializando VenoBox */
      $('.venobox-video').venobox({
        autoplay: true,
        bgcolor: 'rgba(255, 255, 255, 0.4)',
        border: '5px',
        closeColor: '#fff',
        overlayColor: 'rgba(12, 60, 22, 0.83)',
        spinner: 'three-bounce',
      });

      /* Inicializando jquery.counterup */
      $('.counter').counterUp();

      /* Inicializando "stickit.js" */
      $('#menu-navegacion').stickit({
        className: 'menu-fijo',
      });

      /* Inicializando "page-scroll-to-id" */
      $('#menu-principal a').mPageScroll2id({
        offset: 50,
        highlightClass: 'active',
      });
    });
  }
}