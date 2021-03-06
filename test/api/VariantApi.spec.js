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

  beforeEach(function() {
    instance = new Jsflagr.VariantApi();
  });

  describe('(package)', function() {
    describe('VariantApi', function() {
      describe('createVariant', function() {
        it('should call createVariant successfully', function(done) {
          // TODO: uncomment, update parameter values for createVariant call and complete the assertions
          /*
          var flagID = 789;
          var body = new Jsflagr.CreateVariantRequest();
          body.key = "";
          body.attachment = ;

          instance.createVariant(flagID, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Jsflagr.Variant);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("");
            expect(data.attachment).to.be.a(Object);
            expect(data.attachment).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteVariant', function() {
        it('should call deleteVariant successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteVariant call
          /*
          var flagID = 789;
          var variantID = 789;

          instance.deleteVariant(flagID, variantID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('findVariants', function() {
        it('should call findVariants successfully', function(done) {
          // TODO: uncomment, update parameter values for findVariants call and complete the assertions
          /*
          var flagID = 789;

          instance.findVariants(flagID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Jsflagr.Variant);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.key).to.be.a('string');
              expect(data.key).to.be("");
              expect(data.attachment).to.be.a(Object);
              expect(data.attachment).to.be();
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putVariant', function() {
        it('should call putVariant successfully', function(done) {
          // TODO: uncomment, update parameter values for putVariant call and complete the assertions
          /*
          var flagID = 789;
          var variantID = 789;
          var body = new Jsflagr.PutVariantRequest();
          body.key = "";
          body.attachment = ;

          instance.putVariant(flagID, variantID, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Jsflagr.Variant);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("");
            expect(data.attachment).to.be.a(Object);
            expect(data.attachment).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
