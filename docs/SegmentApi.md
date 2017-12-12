# Flagr.SegmentApi

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
import Flagr from 'flagr';

let apiInstance = new Flagr.SegmentApi();

let flagID = 789; // Number | numeric ID of the flag to get

let body = new Flagr.CreateSegmentRequest(); // CreateSegmentRequest | create a segment under a flag


apiInstance.createSegment(flagID, body, (error, data, response) => {
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
import Flagr from 'flagr';

let apiInstance = new Flagr.SegmentApi();

let flagID = 789; // Number | numeric ID of the flag

let segmentID = 789; // Number | numeric ID of the segment


apiInstance.deleteSegment(flagID, segmentID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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
import Flagr from 'flagr';

let apiInstance = new Flagr.SegmentApi();

let flagID = 789; // Number | numeric ID of the flag to get


apiInstance.findSegments(flagID, (error, data, response) => {
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
import Flagr from 'flagr';

let apiInstance = new Flagr.SegmentApi();

let flagID = 789; // Number | numeric ID of the flag

let segmentID = 789; // Number | numeric ID of the segment

let body = new Flagr.PutSegmentRequest(); // PutSegmentRequest | update a segment


apiInstance.putSegment(flagID, segmentID, body, (error, data, response) => {
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
import Flagr from 'flagr';

let apiInstance = new Flagr.SegmentApi();

let flagID = 789; // Number | numeric ID of the flag

let body = new Flagr.PutSegmentReorderRequest(); // PutSegmentReorderRequest | reorder segments


apiInstance.putSegmentsReorder(flagID, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

