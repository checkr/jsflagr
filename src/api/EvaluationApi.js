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
    define(['ApiClient', 'model/Error', 'model/EvalContext', 'model/EvalResult', 'model/EvaluationBatchRequest', 'model/EvaluationBatchResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/EvalContext'), require('../model/EvalResult'), require('../model/EvaluationBatchRequest'), require('../model/EvaluationBatchResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Jsflagr) {
      root.Jsflagr = {};
    }
    root.Jsflagr.EvaluationApi = factory(root.Jsflagr.ApiClient, root.Jsflagr.Error, root.Jsflagr.EvalContext, root.Jsflagr.EvalResult, root.Jsflagr.EvaluationBatchRequest, root.Jsflagr.EvaluationBatchResponse);
  }
}(this, function(ApiClient, Error, EvalContext, EvalResult, EvaluationBatchRequest, EvaluationBatchResponse) {
  'use strict';

  /**
   * Evaluation service.
   * @module api/EvaluationApi
   * @version 1.1.0
   */

  /**
   * Constructs a new EvaluationApi. 
   * @alias module:api/EvaluationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the postEvaluation operation.
     * @callback module:api/EvaluationApi~postEvaluationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EvalResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/EvalContext} body evalution context
     * @param {module:api/EvaluationApi~postEvaluationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EvalResult}
     */
    this.postEvaluation = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postEvaluation");
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
      var returnType = EvalResult;

      return this.apiClient.callApi(
        '/evaluation', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postEvaluationBatch operation.
     * @callback module:api/EvaluationApi~postEvaluationBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EvaluationBatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/EvaluationBatchRequest} body evalution batch request
     * @param {module:api/EvaluationApi~postEvaluationBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EvaluationBatchResponse}
     */
    this.postEvaluationBatch = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postEvaluationBatch");
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
      var returnType = EvaluationBatchResponse;

      return this.apiClient.callApi(
        '/evaluation/batch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
