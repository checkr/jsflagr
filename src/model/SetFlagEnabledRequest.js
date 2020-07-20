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
    root.Jsflagr.SetFlagEnabledRequest = factory(root.Jsflagr.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SetFlagEnabledRequest model module.
   * @module model/SetFlagEnabledRequest
   * @version 1.1.10
   */

  /**
   * Constructs a new <code>SetFlagEnabledRequest</code>.
   * @alias module:model/SetFlagEnabledRequest
   * @class
   * @param enabled {Boolean} 
   */
  var exports = function(enabled) {
    this.enabled = enabled;
  };

  /**
   * Constructs a <code>SetFlagEnabledRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetFlagEnabledRequest} obj Optional instance to populate.
   * @return {module:model/SetFlagEnabledRequest} The populated <code>SetFlagEnabledRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  return exports;

}));
