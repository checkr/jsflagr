/*
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice. The base path for all the APIs is \"/api/v1\". 
 *
 * OpenAPI spec version: 1.1.10
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
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

  describe('(package)', function() {
    describe('CreateFlagRequest', function() {
      beforeEach(function() {
        instance = new Jsflagr.CreateFlagRequest();
      });

      it('should create an instance of CreateFlagRequest', function() {
        // TODO: update the code to test CreateFlagRequest
        expect(instance).to.be.a(Jsflagr.CreateFlagRequest);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property key (base name: "key")', function() {
        // TODO: update the code to test the property key
        expect(instance).to.have.property('key');
        // expect(instance.key).to.be(expectedValueLiteral);
      });

      it('should have the property template (base name: "template")', function() {
        // TODO: update the code to test the property template
        expect(instance).to.have.property('template');
        // expect(instance.template).to.be(expectedValueLiteral);
      });

    });
  });

}));
