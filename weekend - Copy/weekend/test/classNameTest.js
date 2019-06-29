var chai = require('chai');
addClass = require('./className.js');

describe('addClass', function() {
    it('should add class to element', function() {
      var element = { className: '' };
  
      addClass(element, 'test-class');
  
      chai.assert.equal(element.className, 'test-class');
    });
  
    it('should not add a class which already exists', function() {
        var element = { className: 'exists' };
      
        addClass(element, 'exists');
      
        var numClasses = element.className.split(' ').length;
        chai.assert.equal(numClasses, 1);
      });
      it('should append new class after existing one', function() {
        var element = { className: 'exists' };
      
        addClass(element, 'new-class');
      
        var classes = element.className.split(' ');
        chai.assert.equal(classes[1], 'new-class');
      });
  });