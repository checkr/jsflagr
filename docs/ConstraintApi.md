# Flagr.ConstraintApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConstraint**](ConstraintApi.md#createConstraint) | **POST** /flags/{flagID}/segments/{segmentID}/constraints | 
[**deleteConstraint**](ConstraintApi.md#deleteConstraint) | **DELETE** /flags/{flagID}/segments/{segmentID}/constraints/{constraintID} | 
[**findConstraints**](ConstraintApi.md#findConstraints) | **GET** /flags/{flagID}/segments/{segmentID}/constraints | 
[**putConstraint**](ConstraintApi.md#putConstraint) | **PUT** /flags/{flagID}/segments/{segmentID}/constraints/{constraintID} | 


<a name="createConstraint"></a>
# **createConstraint**
> Constraint createConstraint(flagID, segmentID, body)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.ConstraintApi();

let flagID = 789; // Number | numeric ID of the flag

let segmentID = 789; // Number | numeric ID of the segment

let body = new Flagr.CreateConstraintRequest(); // CreateConstraintRequest | create a constraint


apiInstance.createConstraint(flagID, segmentID, body, (error, data, response) => {
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
 **body** | [**CreateConstraintRequest**](CreateConstraintRequest.md)| create a constraint | 

### Return type

[**Constraint**](Constraint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteConstraint"></a>
# **deleteConstraint**
> deleteConstraint(flagID, segmentID, constraintID)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.ConstraintApi();

let flagID = 789; // Number | numeric ID of the flag

let segmentID = 789; // Number | numeric ID of the segment

let constraintID = 789; // Number | numeric ID of the constraint


apiInstance.deleteConstraint(flagID, segmentID, constraintID, (error, data, response) => {
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
 **constraintID** | **Number**| numeric ID of the constraint | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findConstraints"></a>
# **findConstraints**
> [Constraint] findConstraints(flagID, segmentID)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.ConstraintApi();

let flagID = 789; // Number | numeric ID of the flag

let segmentID = 789; // Number | numeric ID of the segment


apiInstance.findConstraints(flagID, segmentID, (error, data, response) => {
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

[**[Constraint]**](Constraint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putConstraint"></a>
# **putConstraint**
> Constraint putConstraint(flagID, segmentID, constraintID, body)



### Example
```javascript
import Flagr from 'flagr';

let apiInstance = new Flagr.ConstraintApi();

let flagID = 789; // Number | numeric ID of the flag

let segmentID = 789; // Number | numeric ID of the segment

let constraintID = 789; // Number | numeric ID of the constraint

let body = new Flagr.CreateConstraintRequest(); // CreateConstraintRequest | create a constraint


apiInstance.putConstraint(flagID, segmentID, constraintID, body, (error, data, response) => {
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
 **constraintID** | **Number**| numeric ID of the constraint | 
 **body** | [**CreateConstraintRequest**](CreateConstraintRequest.md)| create a constraint | 

### Return type

[**Constraint**](Constraint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

