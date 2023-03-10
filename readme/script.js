"use strict"

const anchorLinks = document.querySelectorAll('a[href^="#"]');
const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

anchorLinks.forEach(link => {
  link.addEventListener('click', event => {
      event.preventDefault();

    const readmeSectionAll = document.querySelectorAll(".readme section");
    for (const readmeSection of readmeSectionAll) {
      readmeSection.classList.remove("active");
      readmeSection.classList.add("is-hide");
    }

    const targetId = link.hash;
    const targetElement = document.querySelector(targetId);
    targetElement.classList.replace("is-hide", "active");
  });
});
