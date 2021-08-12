'use strict';
const $ = require('jquery');
test('On button click the result is cached', () => {

  // given

  document.body.innerHTML =
    '  <button cache />' +
    '  <div running-operation class="running-operation"/>';
  require('./mycalc3');

  // when

  document.querySelector('[cache]').click();

  // then
  expect($('[running-operation]').text()).toEqual("");
});