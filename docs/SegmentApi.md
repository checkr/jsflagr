# Jsflagr.SegmentApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSegment**](SegmentApi.md#createSegment) | **POST** /flags/{flagID}/segments | 
[**deleteSegment**](SegmentApi.md#deleteSegment) | **DELETE** /flags/{flagID}/segments/{segmentID} | 
[**findSegments**](SegmentApi.md#findSegments) | **GET** /flags/{flagID}/segments | 
[**putSegment**](SegmentApi.md#putSegment) | **PUT** /flags/{flagID}/segments/{segmentID} | 
[**putSegmentsReorder**](SegmentApi.md#putSegmentsReorder) | **PUT** /flags/{flagID}/segments/reorder | 


<a name="createSegment"></a>
# **createSegment**
> Segment createSegment(flagID, body)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.SegmentApi();

var flagID = 789; // Number | numeric ID of the flag to get

var body = new Jsflagr.CreateSegmentRequest(); // CreateSegmentRequest | create a segment under a flag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSegment(flagID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag to get | 
 **body** | [**CreateSegmentRequest**](CreateSegmentRequest.md)| create a segment under a flag | 

### Return type

[**Segment**](Segment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSegment"></a>
# **deleteSegment**
> deleteSegment(flagID, segmentID)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.SegmentApi();

var flagID = 789; // Number | numeric ID of the flag

var segmentID = 789; // Number | numeric ID of the segment


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSegment(flagID, segmentID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 
 **segmentID** | **Number**| numeric ID of the segment | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findSegments"></a>
# **findSegments**
> [Segment] findSegments(flagID)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.SegmentApi();

var flagID = 789; // Number | numeric ID of the flag to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findSegments(flagID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag to get | 

### Return type

[**[Segment]**](Segment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSegment"></a>
# **putSegment**
> Segment putSegment(flagID, segmentID, body)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.SegmentApi();

var flagID = 789; // Number | numeric ID of the flag

var segmentID = 789; // Number | numeric ID of the segment

var body = new Jsflagr.PutSegmentRequest(); // PutSegmentRequest | update a segment


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putSegment(flagID, segmentID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 
 **segmentID** | **Number**| numeric ID of the segment | 
 **body** | [**PutSegmentRequest**](PutSegmentRequest.md)| update a segment | 

### Return type

[**Segment**](Segment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSegmentsReorder"></a>
# **putSegmentsReorder**
> putSegmentsReorder(flagID, body)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.SegmentApi();

var flagID = 789; // Number | numeric ID of the flag

var body = new Jsflagr.PutSegmentReorderRequest(); // PutSegmentReorderRequest | reorder segments


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putSegmentsReorder(flagID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 
 **body** | [**PutSegmentReorderRequest**](PutSegmentReorderRequest.md)| reorder segments | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

