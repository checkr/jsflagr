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
import Flagr from 'flagr';

let apiInstance = new Flagr.DistributionApi();

let flagID = 789; // Number | numeric ID of the flag

let segmentID = 789; // Number | numeric ID of the segment


apiInstance.findDistributions(flagID, segmentID, (error, data, response) => {
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
import Flagr from 'flagr';

let apiInstance = new Flagr.DistributionApi();

let flagID = 789; // Number | numeric ID of the flag

let segmentID = 789; // Number | numeric ID of the segment

let body = new Flagr.PutDistributionsRequest(); // PutDistributionsRequest | array of distributions


apiInstance.putDistributions(flagID, segmentID, body, (error, data, response) => {
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

