# Flagr.DistributionApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findDistributions**](DistributionApi.md#findDistributions) | **GET** /flags/{flagID}/segments/{segmentID}/distributions | 
[**putDistributions**](DistributionApi.md#putDistributions) | **PUT** /flags/{flagID}/segments/{segmentID}/distributions | 


<a name="findDistributions"></a>
# **findDistributions**
> [Distribution] findDistributions(flagID, segmentID)



### Example
```javascript
var Flagr = require('flagr');

var apiInstance = new Flagr.DistributionApi();

var flagID = 789; // Number | numeric ID of the flag

var segmentID = 789; // Number | numeric ID of the segment


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findDistributions(flagID, segmentID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 
 **segmentID** | **Number**| numeric ID of the segment | 

### Return type

[**[Distribution]**](Distribution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putDistributions"></a>
# **putDistributions**
> [Distribution] putDistributions(flagID, segmentID, body)



replace the distribution with the new setting

### Example
```javascript
var Flagr = require('flagr');

var apiInstance = new Flagr.DistributionApi();

var flagID = 789; // Number | numeric ID of the flag

var segmentID = 789; // Number | numeric ID of the segment

var body = new Flagr.PutDistributionsRequest(); // PutDistributionsRequest | array of distributions


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putDistributions(flagID, segmentID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 
 **segmentID** | **Number**| numeric ID of the segment | 
 **body** | [**PutDistributionsRequest**](PutDistributionsRequest.md)| array of distributions | 

### Return type

[**[Distribution]**](Distribution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

