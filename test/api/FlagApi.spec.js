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
    instance = new Jsflagr.FlagApi();
  });

  describe('(package)', function() {
    describe('FlagApi', function() {
      describe('createFlag', function() {
        it('should call createFlag successfully', function(done) {
          // TODO: uncomment, update parameter values for createFlag call and complete the assertions
          /*
          var body = new Jsflagr.CreateFlagRequest();
          body.description = "";
          body.key = "";
          body.template = "";

          instance.createFlag(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Jsflagr.Flag);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.enabled).to.be.a('boolean');
            expect(data.enabled).to.be(false);
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Jsflagr.Tag);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.value).to.be.a('string');
                expect(data.value).to.be("");

                      }
            }
            {
              let dataCtr = data.segments;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Jsflagr.Segment);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                {
                  let dataCtr = data.constraints;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Jsflagr.Constraint);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.property).to.be.a('string');
                    expect(data.property).to.be("");
                    expect(data.operator).to.be.a('string');
                    expect(data.operator).to.be("EQ");
                    expect(data.value).to.be.a('string');
                    expect(data.value).to.be("");
    
                          }
                }
                {
                  let dataCtr = data.distributions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Jsflagr.Distribution);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.percent).to.be.a('number');
                    expect(data.percent).to.be("0");
                    expect(data.variantKey).to.be.a('string');
                    expect(data.variantKey).to.be("");
                    expect(data.variantID).to.be.a('number');
                    expect(data.variantID).to.be("0");
    
                          }
                }
                expect(data.rank).to.be.a('number');
                expect(data.rank).to.be("0");
                expect(data.rolloutPercent).to.be.a('number');
                expect(data.rolloutPercent).to.be("0");

                      }
            }
            {
              let dataCtr = data.variants;
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
            }
            expect(data.dataRecordsEnabled).to.be.a('boolean');
            expect(data.dataRecordsEnabled).to.be(false);
            expect(data.entityType).to.be.a('string');
            expect(data.entityType).to.be("");
            expect(data.notes).to.be.a('string');
            expect(data.notes).to.be("");
            expect(data.createdBy).to.be.a('string');
            expect(data.createdBy).to.be("");
            expect(data.updatedBy).to.be.a('string');
            expect(data.updatedBy).to.be("");
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteFlag', function() {
        it('should call deleteFlag successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteFlag call
          /*
          var flagID = 789;

          instance.deleteFlag(flagID, function(error, data, response) {
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
      describe('findFlags', function() {
        it('should call findFlags successfully', function(done) {
          // TODO: uncomment, update parameter values for findFlags call and complete the assertions
          /*
          var opts = {};
          opts.limit = 789;
          opts.enabled = true;
          opts.description = "description_example";
          opts.tags = "tags_example";
          opts.descriptionLike = "descriptionLike_example";
          opts.key = "key_example";
          opts.offset = 789;
          opts.preload = true;

          instance.findFlags(opts, function(error, data, response) {
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
              expect(data).to.be.a(Jsflagr.Flag);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.key).to.be.a('string');
              expect(data.key).to.be("");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.enabled).to.be.a('boolean');
              expect(data.enabled).to.be(false);
              {
                let dataCtr = data.tags;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Jsflagr.Tag);
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be("0");
                  expect(data.value).to.be.a('string');
                  expect(data.value).to.be("");
  
                        }
              }
              {
                let dataCtr = data.segments;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Jsflagr.Segment);
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be("0");
                  expect(data.description).to.be.a('string');
                  expect(data.description).to.be("");
                  {
                    let dataCtr = data.constraints;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Jsflagr.Constraint);
                      expect(data.id).to.be.a('number');
                      expect(data.id).to.be("0");
                      expect(data.property).to.be.a('string');
                      expect(data.property).to.be("");
                      expect(data.operator).to.be.a('string');
                      expect(data.operator).to.be("EQ");
                      expect(data.value).to.be.a('string');
                      expect(data.value).to.be("");
      
                            }
                  }
                  {
                    let dataCtr = data.distributions;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Jsflagr.Distribution);
                      expect(data.id).to.be.a('number');
                      expect(data.id).to.be("0");
                      expect(data.percent).to.be.a('number');
                      expect(data.percent).to.be("0");
                      expect(data.variantKey).to.be.a('string');
                      expect(data.variantKey).to.be("");
                      expect(data.variantID).to.be.a('number');
                      expect(data.variantID).to.be("0");
      
                            }
                  }
                  expect(data.rank).to.be.a('number');
                  expect(data.rank).to.be("0");
                  expect(data.rolloutPercent).to.be.a('number');
                  expect(data.rolloutPercent).to.be("0");
  
                        }
              }
              {
                let dataCtr = data.variants;
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
              }
              expect(data.dataRecordsEnabled).to.be.a('boolean');
              expect(data.dataRecordsEnabled).to.be(false);
              expect(data.entityType).to.be.a('string');
              expect(data.entityType).to.be("");
              expect(data.notes).to.be.a('string');
              expect(data.notes).to.be("");
              expect(data.createdBy).to.be.a('string');
              expect(data.createdBy).to.be("");
              expect(data.updatedBy).to.be.a('string');
              expect(data.updatedBy).to.be("");
              expect(data.updatedAt).to.be.a(Date);
              expect(data.updatedAt).to.be(new Date());
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFlag', function() {
        it('should call getFlag successfully', function(done) {
          // TODO: uncomment, update parameter values for getFlag call and complete the assertions
          /*
          var flagID = 789;

          instance.getFlag(flagID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Jsflagr.Flag);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.enabled).to.be.a('boolean');
            expect(data.enabled).to.be(false);
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Jsflagr.Tag);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.value).to.be.a('string');
                expect(data.value).to.be("");

                      }
            }
            {
              let dataCtr = data.segments;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Jsflagr.Segment);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                {
                  let dataCtr = data.constraints;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Jsflagr.Constraint);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.property).to.be.a('string');
                    expect(data.property).to.be("");
                    expect(data.operator).to.be.a('string');
                    expect(data.operator).to.be("EQ");
                    expect(data.value).to.be.a('string');
                    expect(data.value).to.be("");
    
                          }
                }
                {
                  let dataCtr = data.distributions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Jsflagr.Distribution);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.percent).to.be.a('number');
                    expect(data.percent).to.be("0");
                    expect(data.variantKey).to.be.a('string');
                    expect(data.variantKey).to.be("");
                    expect(data.variantID).to.be.a('number');
                    expect(data.variantID).to.be("0");
    
                          }
                }
                expect(data.rank).to.be.a('number');
                expect(data.rank).to.be("0");
                expect(data.rolloutPercent).to.be.a('number');
                expect(data.rolloutPercent).to.be("0");

                      }
            }
            {
              let dataCtr = data.variants;
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
            }
            expect(data.dataRecordsEnabled).to.be.a('boolean');
            expect(data.dataRecordsEnabled).to.be(false);
            expect(data.entityType).to.be.a('string');
            expect(data.entityType).to.be("");
            expect(data.notes).to.be.a('string');
            expect(data.notes).to.be("");
            expect(data.createdBy).to.be.a('string');
            expect(data.createdBy).to.be("");
            expect(data.updatedBy).to.be.a('string');
            expect(data.updatedBy).to.be("");
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFlagEntityTypes', function() {
        it('should call getFlagEntityTypes successfully', function(done) {
          // TODO: uncomment getFlagEntityTypes call and complete the assertions
          /*

          instance.getFlagEntityTypes(function(error, data, response) {
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
              expect(data).to.be.a('string');
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFlagSnapshots', function() {
        it('should call getFlagSnapshots successfully', function(done) {
          // TODO: uncomment, update parameter values for getFlagSnapshots call and complete the assertions
          /*
          var flagID = 789;

          instance.getFlagSnapshots(flagID, function(error, data, response) {
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
              expect(data).to.be.a(Jsflagr.FlagSnapshot);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.updatedBy).to.be.a('string');
              expect(data.updatedBy).to.be("");
              expect(data.flag).to.be.a(Jsflagr.Flag);
                    expect(data.flag.id).to.be.a('number');
                expect(data.flag.id).to.be("0");
                expect(data.flag.key).to.be.a('string');
                expect(data.flag.key).to.be("");
                expect(data.flag.description).to.be.a('string');
                expect(data.flag.description).to.be("");
                expect(data.flag.enabled).to.be.a('boolean');
                expect(data.flag.enabled).to.be(false);
                {
                  let dataCtr = data.flag.tags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Jsflagr.Tag);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.value).to.be.a('string');
                    expect(data.value).to.be("");
    
                          }
                }
                {
                  let dataCtr = data.flag.segments;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Jsflagr.Segment);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    {
                      let dataCtr = data.constraints;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Jsflagr.Constraint);
                        expect(data.id).to.be.a('number');
                        expect(data.id).to.be("0");
                        expect(data.property).to.be.a('string');
                        expect(data.property).to.be("");
                        expect(data.operator).to.be.a('string');
                        expect(data.operator).to.be("EQ");
                        expect(data.value).to.be.a('string');
                        expect(data.value).to.be("");
        
                              }
                    }
                    {
                      let dataCtr = data.distributions;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Jsflagr.Distribution);
                        expect(data.id).to.be.a('number');
                        expect(data.id).to.be("0");
                        expect(data.percent).to.be.a('number');
                        expect(data.percent).to.be("0");
                        expect(data.variantKey).to.be.a('string');
                        expect(data.variantKey).to.be("");
                        expect(data.variantID).to.be.a('number');
                        expect(data.variantID).to.be("0");
        
                              }
                    }
                    expect(data.rank).to.be.a('number');
                    expect(data.rank).to.be("0");
                    expect(data.rolloutPercent).to.be.a('number');
                    expect(data.rolloutPercent).to.be("0");
    
                          }
                }
                {
                  let dataCtr = data.flag.variants;
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
                }
                expect(data.flag.dataRecordsEnabled).to.be.a('boolean');
                expect(data.flag.dataRecordsEnabled).to.be(false);
                expect(data.flag.entityType).to.be.a('string');
                expect(data.flag.entityType).to.be("");
                expect(data.flag.notes).to.be.a('string');
                expect(data.flag.notes).to.be("");
                expect(data.flag.createdBy).to.be.a('string');
                expect(data.flag.createdBy).to.be("");
                expect(data.flag.updatedBy).to.be.a('string');
                expect(data.flag.updatedBy).to.be("");
                expect(data.flag.updatedAt).to.be.a(Date);
                expect(data.flag.updatedAt).to.be(new Date());
              expect(data.updatedAt).to.be.a('string');
              expect(data.updatedAt).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putFlag', function() {
        it('should call putFlag successfully', function(done) {
          // TODO: uncomment, update parameter values for putFlag call and complete the assertions
          /*
          var flagID = 789;
          var body = new Jsflagr.PutFlagRequest();
          body.description = "";
          body.dataRecordsEnabled = false;
          body.entityType = "";
          body.enabled = false;
          body.key = "";
          body.notes = "";

          instance.putFlag(flagID, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Jsflagr.Flag);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.enabled).to.be.a('boolean');
            expect(data.enabled).to.be(false);
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Jsflagr.Tag);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.value).to.be.a('string');
                expect(data.value).to.be("");

                      }
            }
            {
              let dataCtr = data.segments;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Jsflagr.Segment);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                {
                  let dataCtr = data.constraints;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Jsflagr.Constraint);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.property).to.be.a('string');
                    expect(data.property).to.be("");
                    expect(data.operator).to.be.a('string');
                    expect(data.operator).to.be("EQ");
                    expect(data.value).to.be.a('string');
                    expect(data.value).to.be("");
    
                          }
                }
                {
                  let dataCtr = data.distributions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Jsflagr.Distribution);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.percent).to.be.a('number');
                    expect(data.percent).to.be("0");
                    expect(data.variantKey).to.be.a('string');
                    expect(data.variantKey).to.be("");
                    expect(data.variantID).to.be.a('number');
                    expect(data.variantID).to.be("0");
    
                          }
                }
                expect(data.rank).to.be.a('number');
                expect(data.rank).to.be("0");
                expect(data.rolloutPercent).to.be.a('number');
                expect(data.rolloutPercent).to.be("0");

                      }
            }
            {
              let dataCtr = data.variants;
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
            }
            expect(data.dataRecordsEnabled).to.be.a('boolean');
            expect(data.dataRecordsEnabled).to.be(false);
            expect(data.entityType).to.be.a('string');
            expect(data.entityType).to.be("");
            expect(data.notes).to.be.a('string');
            expect(data.notes).to.be("");
            expect(data.createdBy).to.be.a('string');
            expect(data.createdBy).to.be("");
            expect(data.updatedBy).to.be.a('string');
            expect(data.updatedBy).to.be("");
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('setFlagEnabled', function() {
        it('should call setFlagEnabled successfully', function(done) {
          // TODO: uncomment, update parameter values for setFlagEnabled call and complete the assertions
          /*
          var flagID = 789;
          var body = new Jsflagr.SetFlagEnabledRequest();
          body.enabled = false;

          instance.setFlagEnabled(flagID, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Jsflagr.Flag);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.enabled).to.be.a('boolean');
            expect(data.enabled).to.be(false);
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Jsflagr.Tag);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.value).to.be.a('string');
                expect(data.value).to.be("");

                      }
            }
            {
              let dataCtr = data.segments;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Jsflagr.Segment);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                {
                  let dataCtr = data.constraints;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Jsflagr.Constraint);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.property).to.be.a('string');
                    expect(data.property).to.be("");
                    expect(data.operator).to.be.a('string');
                    expect(data.operator).to.be("EQ");
                    expect(data.value).to.be.a('string');
                    expect(data.value).to.be("");
    
                          }
                }
                {
                  let dataCtr = data.distributions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Jsflagr.Distribution);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.percent).to.be.a('number');
                    expect(data.percent).to.be("0");
                    expect(data.variantKey).to.be.a('string');
                    expect(data.variantKey).to.be("");
                    expect(data.variantID).to.be.a('number');
                    expect(data.variantID).to.be("0");
    
                          }
                }
                expect(data.rank).to.be.a('number');
                expect(data.rank).to.be("0");
                expect(data.rolloutPercent).to.be.a('number');
                expect(data.rolloutPercent).to.be("0");

                      }
            }
            {
              let dataCtr = data.variants;
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
            }
            expect(data.dataRecordsEnabled).to.be.a('boolean');
            expect(data.dataRecordsEnabled).to.be(false);
            expect(data.entityType).to.be.a('string');
            expect(data.entityType).to.be("");
            expect(data.notes).to.be.a('string');
            expect(data.notes).to.be("");
            expect(data.createdBy).to.be.a('string');
            expect(data.createdBy).to.be("");
            expect(data.updatedBy).to.be.a('string');
            expect(data.updatedBy).to.be("");
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(new Date());

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
