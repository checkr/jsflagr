# Flagr.EvaluationApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postEvaluation**](EvaluationApi.md#postEvaluation) | **POST** /evaluation | 
[**postEvaluationBatch**](EvaluationApi.md#postEvaluationBatch) | **POST** /evaluation/batch | 


<a name="postEvaluation"></a>
# **postEvaluation**
> EvalResult postEvaluation(body)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.EvaluationApi();

let body = new Flagr.EvalContext(); // EvalContext | evalution context


apiInstance.postEvaluation(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EvalContext**](EvalContext.md)| evalution context | 

### Return type

[**EvalResult**](EvalResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postEvaluationBatch"></a>
# **postEvaluationBatch**
> EvaluationBatchResponse postEvaluationBatch(body)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.EvaluationApi();

let body = new Flagr.EvaluationBatchRequest(); // EvaluationBatchRequest | evalution batch request


apiInstance.postEvaluationBatch(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EvaluationBatchRequest**](EvaluationBatchRequest.md)| evalution batch request | 

### Return type

[**EvaluationBatchResponse**](EvaluationBatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

