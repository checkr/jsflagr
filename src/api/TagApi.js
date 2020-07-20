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
    define(['ApiClient', 'model/CreateTagRequest', 'model/Error', 'model/Tag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateTagRequest'), require('../model/Error'), require('../model/Tag'));
  } else {
    // Browser globals (root is window)
    if (!root.Jsflagr) {
      root.Jsflagr = {};
    }
    root.Jsflagr.TagApi = factory(root.Jsflagr.ApiClient, root.Jsflagr.CreateTagRequest, root.Jsflagr.Error, root.Jsflagr.Tag);
  }
}(this, function(ApiClient, CreateTagRequest, Error, Tag) {
  'use strict';

  /**
   * Tag service.
   * @module api/TagApi
   * @version 1.1.10
   */

  /**
   * Constructs a new TagApi. 
   * @alias module:api/TagApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createTag operation.
     * @callback module:api/TagApi~createTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {module:model/CreateTagRequest} body create a tag
     * @param {module:api/TagApi~createTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */
    this.createTag = function(flagID, body, callback) {
      var postBody = body;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling createTag");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTag");
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
      var returnType = Tag;

      return this.apiClient.callApi(
        '/flags/{flagID}/tags', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTag operation.
     * @callback module:api/TagApi~deleteTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {Number} tagID numeric ID of the tag
     * @param {module:api/TagApi~deleteTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTag = function(flagID, tagID, callback) {
      var postBody = null;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling deleteTag");
      }

      // verify the required parameter 'tagID' is set
      if (tagID === undefined || tagID === null) {
        throw new Error("Missing the required parameter 'tagID' when calling deleteTag");
      }


      var pathParams = {
        'flagID': flagID,
        'tagID': tagID
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
        '/flags/{flagID}/tags/{tagID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllTags operation.
     * @callback module:api/TagApi~findAllTagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Tag>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit the numbers of tags to return
     * @param {Number} opts.offset return tags given the offset, it should usually set together with limit
     * @param {String} opts.valueLike return tags partially matching given value
     * @param {module:api/TagApi~findAllTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Tag>}
     */
    this.findAllTags = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'value_like': opts['valueLike'],
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
      var returnType = [Tag];

      return this.apiClient.callApi(
        '/tags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findTags operation.
     * @callback module:api/TagApi~findTagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Tag>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {module:api/TagApi~findTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Tag>}
     */
    this.findTags = function(flagID, callback) {
      var postBody = null;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling findTags");
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
      var returnType = [Tag];

      return this.apiClient.callApi(
        '/flags/{flagID}/tags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));