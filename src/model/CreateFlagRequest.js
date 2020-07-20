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
    root.Jsflagr.CreateFlagRequest = factory(root.Jsflagr.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateFlagRequest model module.
   * @module model/CreateFlagRequest
   * @version 1.1.10
   */

  /**
   * Constructs a new <code>CreateFlagRequest</code>.
   * @alias module:model/CreateFlagRequest
   * @class
   * @param description {String} 
   */
  var exports = function(description) {
    this.description = description;
  };

  /**
   * Constructs a <code>CreateFlagRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFlagRequest} obj Optional instance to populate.
   * @return {module:model/CreateFlagRequest} The populated <code>CreateFlagRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('template'))
        obj.template = ApiClient.convertToType(data['template'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * unique key representation of the flag
   * @member {String} key
   */
  exports.prototype.key = undefined;

  /**
   * template for flag creation
   * @member {String} template
   */
  exports.prototype.template = undefined;

  return exports;

}));
