import React from 'react';

export function loadRemoteComponent(url) {
  return fetch(url)
    .then(response => response.text())
    .then(text => {
      // Define exports and require method for eval(text)
      const exports = {};
      function require(name) {
        if (name === 'react') {
          return React;
        }
        throw new Error('Does not support modules other than "react" in remote component');
      }
      eval(text);
      return exports.__esModule ? exports.default : exports;
    });
}
