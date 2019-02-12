/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice. The base path for all the APIs is \"/api/v1\". 
 *
 * OpenAPI spec version: 1.0.13
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Jsflagr);
  }
}(this, function(expect, Jsflagr) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Jsflagr.Constraint();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Constraint', function() {
    it('should create an instance of Constraint', function() {
      // uncomment below and update the code to test Constraint
      //var instance = new Jsflagr.Constraint();
      //expect(instance).to.be.a(Jsflagr.Constraint);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Jsflagr.Constraint();
      //expect(instance).to.be();
    });

    it('should have the property property (base name: "property")', function() {
      // uncomment below and update the code to test the property property
      //var instance = new Jsflagr.Constraint();
      //expect(instance).to.be();
    });

    it('should have the property operator (base name: "operator")', function() {
      // uncomment below and update the code to test the property operator
      //var instance = new Jsflagr.Constraint();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new Jsflagr.Constraint();
      //expect(instance).to.be();
    });

  });

}));
