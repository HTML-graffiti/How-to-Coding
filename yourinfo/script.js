'use strict'

const storage = localStorage

const bgcolorForm = document.querySelector('#bgcolor')
const colorForm = document.querySelector('#color')

if(!storage.getItem('bgcolor')) {
  setBGcolor()
  setCcolor()
} else {
  setStyles()
}

function setBGcolor() {
  storage.setItem('bgcolor', bgcolorForm.value)
  setStyles()
}

function setCcolor() {
  storage.setItem('color', colorForm.value)
  setStyles()
}

function setStyles() {
  const bgcolorAll = document.querySelectorAll('html, .bgcolor')
  const colorAll = document.querySelectorAll('html, .color')

  const currentBG = storage.getItem('bgcolor')
  const currentColor = storage.getItem('color')

  bgcolorForm.value = currentBG
  colorForm.value = currentColor

  for (const bgcolor of bgcolorAll) {
    bgcolor.style.backgroundColor = currentBG
  }
  for (const color of colorAll) {
    color.style.color = currentColor
  }

  console.info("Background Color:", currentBG, ". Color:", currentColor)
}

bgcolorForm.onchange = setBGcolor
colorForm.onchange = setCcolor
