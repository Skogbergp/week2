'use strict';
const targetDiv = document.getElementById('target');

const browser = document.createElement('p');
browser.textContent =
  'User Agent: ' +
  window.navigator.userAgentData.brands[0].brand +
  ' ' +
  window.navigator.userAgentData.brands[0].version;

const platform = document.createElement('p');
platform.textContent = 'Platform: ' + window.navigator.platform;

const screenWidth = document.createElement('p');
screenWidth.textContent = 'Screen Width: ' + window.screen.width;
const screenHeight = document.createElement('p');
screenHeight.textContent = 'Screen Height: ' + window.screen.height;

const availableWidth = document.createElement('p');
availableWidth.textContent = 'Available Width: ' + window.screen.availWidth;
const availableHeight = document.createElement('p');
availableHeight.textContent = 'Available Height: ' + window.screen.availHeight;

const date = document.createElement('p');
date.textContent = 'Date: ' + new Date().toLocaleDateString('fi');

targetDiv.appendChild(browser);
targetDiv.appendChild(platform);
targetDiv.appendChild(screenWidth);
targetDiv.appendChild(screenHeight);
targetDiv.appendChild(availableWidth);
targetDiv.appendChild(availableHeight);
targetDiv.appendChild(date);
