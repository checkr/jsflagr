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
    define(['ApiClient', 'model/CreateFlagRequest', 'model/Error', 'model/Flag', 'model/FlagSnapshot', 'model/PutFlagRequest', 'model/SetFlagEnabledRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateFlagRequest'), require('../model/Error'), require('../model/Flag'), require('../model/FlagSnapshot'), require('../model/PutFlagRequest'), require('../model/SetFlagEnabledRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Jsflagr) {
      root.Jsflagr = {};
    }
    root.Jsflagr.FlagApi = factory(root.Jsflagr.ApiClient, root.Jsflagr.CreateFlagRequest, root.Jsflagr.Error, root.Jsflagr.Flag, root.Jsflagr.FlagSnapshot, root.Jsflagr.PutFlagRequest, root.Jsflagr.SetFlagEnabledRequest);
  }
}(this, function(ApiClient, CreateFlagRequest, Error, Flag, FlagSnapshot, PutFlagRequest, SetFlagEnabledRequest) {
  'use strict';

  /**
   * Flag service.
   * @module api/FlagApi
   * @version 1.1.10
   */

  /**
   * Constructs a new FlagApi. 
   * @alias module:api/FlagApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createFlag operation.
     * @callback module:api/FlagApi~createFlagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Flag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CreateFlagRequest} body create a flag
     * @param {module:api/FlagApi~createFlagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Flag}
     */
    this.createFlag = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createFlag");
      }


      var pathParams = {
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
      var returnType = Flag;

      return this.apiClient.callApi(
        '/flags', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFlag operation.
     * @callback module:api/FlagApi~deleteFlagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {module:api/FlagApi~deleteFlagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFlag = function(flagID, callback) {
      var postBody = null;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling deleteFlag");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/flags/{flagID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findFlags operation.
     * @callback module:api/FlagApi~findFlagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Flag>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit the numbers of flags to return
     * @param {Boolean} opts.enabled return flags having given enabled status
     * @param {String} opts.description return flags exactly matching given description
     * @param {String} opts.tags return flags with the given tags (comma separated)
     * @param {String} opts.descriptionLike return flags partially matching given description
     * @param {String} opts.key return flags matching given key
     * @param {Number} opts.offset return flags given the offset, it should usually set together with limit
     * @param {Boolean} opts.preload return flags with preloaded segments and variants
     * @param {module:api/FlagApi~findFlagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Flag>}
     */
    this.findFlags = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'enabled': opts['enabled'],
        'description': opts['description'],
        'tags': opts['tags'],
        'description_like': opts['descriptionLike'],
        'key': opts['key'],
        'offset': opts['offset'],
        'preload': opts['preload'],
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
      var returnType = [Flag];

      return this.apiClient.callApi(
        '/flags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFlag operation.
     * @callback module:api/FlagApi~getFlagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Flag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag to get
     * @param {module:api/FlagApi~getFlagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Flag}
     */
    this.getFlag = function(flagID, callback) {
      var postBody = null;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling getFlag");
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
      var returnType = Flag;

      return this.apiClient.callApi(
        '/flags/{flagID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFlagEntityTypes operation.
     * @callback module:api/FlagApi~getFlagEntityTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/FlagApi~getFlagEntityTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getFlagEntityTypes = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/flags/entity_types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFlagSnapshots operation.
     * @callback module:api/FlagApi~getFlagSnapshotsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FlagSnapshot>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag to get
     * @param {module:api/FlagApi~getFlagSnapshotsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FlagSnapshot>}
     */
    this.getFlagSnapshots = function(flagID, callback) {
      var postBody = null;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling getFlagSnapshots");
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
      var returnType = [FlagSnapshot];

      return this.apiClient.callApi(
        '/flags/{flagID}/snapshots', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putFlag operation.
     * @callback module:api/FlagApi~putFlagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Flag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag to get
     * @param {module:model/PutFlagRequest} body update a flag
     * @param {module:api/FlagApi~putFlagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Flag}
     */
    this.putFlag = function(flagID, body, callback) {
      var postBody = body;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling putFlag");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putFlag");
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
      var returnType = Flag;

      return this.apiClient.callApi(
        '/flags/{flagID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setFlagEnabled operation.
     * @callback module:api/FlagApi~setFlagEnabledCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Flag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag to get
     * @param {module:model/SetFlagEnabledRequest} body set flag enabled state
     * @param {module:api/FlagApi~setFlagEnabledCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Flag}
     */
    this.setFlagEnabled = function(flagID, body, callback) {
      var postBody = body;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling setFlagEnabled");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setFlagEnabled");
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
      var returnType = Flag;

      return this.apiClient.callApi(
        '/flags/{flagID}/enabled', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
