/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice
 *
 * OpenAPI spec version: 1.0.8
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EvalResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EvalResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Flagr) {
      root.Flagr = {};
    }
    root.Flagr.EvaluationBatchResponse = factory(root.Flagr.ApiClient, root.Flagr.EvalResult);
  }
}(this, function(ApiClient, EvalResult) {
  'use strict';




  /**
   * The EvaluationBatchResponse model module.
   * @module model/EvaluationBatchResponse
   * @version 1.0.8
   */

  /**
   * Constructs a new <code>EvaluationBatchResponse</code>.
   * @alias module:model/EvaluationBatchResponse
   * @class
   * @param evaluationResults {Array.<module:model/EvalResult>} 
   */
  var exports = function(evaluationResults) {
    var _this = this;

    _this['evaluationResults'] = evaluationResults;
  };

  /**
   * Constructs a <code>EvaluationBatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EvaluationBatchResponse} obj Optional instance to populate.
   * @return {module:model/EvaluationBatchResponse} The populated <code>EvaluationBatchResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('evaluationResults')) {
        obj['evaluationResults'] = ApiClient.convertToType(data['evaluationResults'], [EvalResult]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/EvalResult>} evaluationResults
   */
  exports.prototype['evaluationResults'] = undefined;



  return exports;
}));


