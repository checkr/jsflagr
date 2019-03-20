/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice. The base path for all the APIs is \"/api/v1\". 
 *
 * OpenAPI spec version: 1.1.0
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
    define(['ApiClient', 'model/CreateVariantRequest', 'model/Error', 'model/PutVariantRequest', 'model/Variant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateVariantRequest'), require('../model/Error'), require('../model/PutVariantRequest'), require('../model/Variant'));
  } else {
    // Browser globals (root is window)
    if (!root.Jsflagr) {
      root.Jsflagr = {};
    }
    root.Jsflagr.VariantApi = factory(root.Jsflagr.ApiClient, root.Jsflagr.CreateVariantRequest, root.Jsflagr.Error, root.Jsflagr.PutVariantRequest, root.Jsflagr.Variant);
  }
}(this, function(ApiClient, CreateVariantRequest, Error, PutVariantRequest, Variant) {
  'use strict';

  /**
   * Variant service.
   * @module api/VariantApi
   * @version 1.1.0
   */

  /**
   * Constructs a new VariantApi. 
   * @alias module:api/VariantApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createVariant operation.
     * @callback module:api/VariantApi~createVariantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Variant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {module:model/CreateVariantRequest} body create a variant
     * @param {module:api/VariantApi~createVariantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Variant}
     */
    this.createVariant = function(flagID, body, callback) {
      var postBody = body;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling createVariant");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createVariant");
      }


      var pathParams = {
        'flagID': flagID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Variant;

      return this.apiClient.callApi(
        '/flags/{flagID}/variants', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVariant operation.
     * @callback module:api/VariantApi~deleteVariantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {Number} variantID numeric ID of the variant
     * @param {module:api/VariantApi~deleteVariantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteVariant = function(flagID, variantID, callback) {
      var postBody = null;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling deleteVariant");
      }

      // verify the required parameter 'variantID' is set
      if (variantID === undefined || variantID === null) {
        throw new Error("Missing the required parameter 'variantID' when calling deleteVariant");
      }


      var pathParams = {
        'flagID': flagID,
        'variantID': variantID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/flags/{flagID}/variants/{variantID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findVariants operation.
     * @callback module:api/VariantApi~findVariantsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Variant>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {module:api/VariantApi~findVariantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Variant>}
     */
    this.findVariants = function(flagID, callback) {
      var postBody = null;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling findVariants");
      }


      var pathParams = {
        'flagID': flagID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Variant];

      return this.apiClient.callApi(
        '/flags/{flagID}/variants', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putVariant operation.
     * @callback module:api/VariantApi~putVariantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Variant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {Number} variantID numeric ID of the variant
     * @param {module:model/PutVariantRequest} body update a variant
     * @param {module:api/VariantApi~putVariantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Variant}
     */
    this.putVariant = function(flagID, variantID, body, callback) {
      var postBody = body;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling putVariant");
      }

      // verify the required parameter 'variantID' is set
      if (variantID === undefined || variantID === null) {
        throw new Error("Missing the required parameter 'variantID' when calling putVariant");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putVariant");
      }


      var pathParams = {
        'flagID': flagID,
        'variantID': variantID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Variant;

      return this.apiClient.callApi(
        '/flags/{flagID}/variants/{variantID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
