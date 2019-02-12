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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Jsflagr) {
      root.Jsflagr = {};
    }
    root.Jsflagr.Distribution = factory(root.Jsflagr.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Distribution model module.
   * @module model/Distribution
   * @version 1.0.13
   */

  /**
   * Constructs a new <code>Distribution</code>.
   * @alias module:model/Distribution
   * @class
   * @param percent {Number} 
   * @param variantKey {String} 
   * @param variantID {Number} 
   */
  var exports = function(percent, variantKey, variantID) {
    var _this = this;


    _this['percent'] = percent;
    _this['variantKey'] = variantKey;
    _this['variantID'] = variantID;
  };

  /**
   * Constructs a <code>Distribution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Distribution} obj Optional instance to populate.
   * @return {module:model/Distribution} The populated <code>Distribution</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('percent')) {
        obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
      }
      if (data.hasOwnProperty('variantKey')) {
        obj['variantKey'] = ApiClient.convertToType(data['variantKey'], 'String');
      }
      if (data.hasOwnProperty('variantID')) {
        obj['variantID'] = ApiClient.convertToType(data['variantID'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} percent
   */
  exports.prototype['percent'] = undefined;
  /**
   * @member {String} variantKey
   */
  exports.prototype['variantKey'] = undefined;
  /**
   * @member {Number} variantID
   */
  exports.prototype['variantID'] = undefined;



  return exports;
}));


