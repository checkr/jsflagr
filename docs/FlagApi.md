# Jsflagr.FlagApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFlag**](FlagApi.md#createFlag) | **POST** /flags | 
[**deleteFlag**](FlagApi.md#deleteFlag) | **DELETE** /flags/{flagID} | 
[**findFlags**](FlagApi.md#findFlags) | **GET** /flags | 
[**getFlag**](FlagApi.md#getFlag) | **GET** /flags/{flagID} | 
[**getFlagEntityTypes**](FlagApi.md#getFlagEntityTypes) | **GET** /flags/entity_types | 
[**getFlagSnapshots**](FlagApi.md#getFlagSnapshots) | **GET** /flags/{flagID}/snapshots | 
[**putFlag**](FlagApi.md#putFlag) | **PUT** /flags/{flagID} | 
[**setFlagEnabled**](FlagApi.md#setFlagEnabled) | **PUT** /flags/{flagID}/enabled | 


<a name="createFlag"></a>
# **createFlag**
> Flag createFlag(body)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.FlagApi();

var body = new Jsflagr.CreateFlagRequest(); // CreateFlagRequest | create a flag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFlag(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateFlagRequest**](CreateFlagRequest.md)| create a flag | 

### Return type

[**Flag**](Flag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFlag"></a>
# **deleteFlag**
> deleteFlag(flagID)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.FlagApi();

var flagID = 789; // Number | numeric ID of the flag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFlag(flagID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findFlags"></a>
# **findFlags**
> [Flag] findFlags(opts)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.FlagApi();

var opts = { 
  'limit': 789, // Number | the numbers of flags to return
  'enabled': true, // Boolean | return flags having given enabled status
  'description': "description_example", // String | return flags exactly matching given description
  'descriptionLike': "descriptionLike_example", // String | return flags partially matching given description
  'key': "key_example", // String | return flags matching given key
  'offset': 789, // Number | return flags given the offset, it should usually set together with limit
  'preload': true // Boolean | return flags with preloaded segments and variants
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findFlags(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| the numbers of flags to return | [optional] 
 **enabled** | **Boolean**| return flags having given enabled status | [optional] 
 **description** | **String**| return flags exactly matching given description | [optional] 
 **descriptionLike** | **String**| return flags partially matching given description | [optional] 
 **key** | **String**| return flags matching given key | [optional] 
 **offset** | **Number**| return flags given the offset, it should usually set together with limit | [optional] 
 **preload** | **Boolean**| return flags with preloaded segments and variants | [optional] 

### Return type

[**[Flag]**](Flag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFlag"></a>
# **getFlag**
> Flag getFlag(flagID)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.FlagApi();

var flagID = 789; // Number | numeric ID of the flag to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFlag(flagID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag to get | 

### Return type

[**Flag**](Flag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFlagEntityTypes"></a>
# **getFlagEntityTypes**
> [&#39;String&#39;] getFlagEntityTypes()



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.FlagApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFlagEntityTypes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFlagSnapshots"></a>
# **getFlagSnapshots**
> [FlagSnapshot] getFlagSnapshots(flagID)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.FlagApi();

var flagID = 789; // Number | numeric ID of the flag to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFlagSnapshots(flagID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag to get | 

### Return type

[**[FlagSnapshot]**](FlagSnapshot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFlag"></a>
# **putFlag**
> Flag putFlag(flagID, body)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.FlagApi();

var flagID = 789; // Number | numeric ID of the flag to get

var body = new Jsflagr.PutFlagRequest(); // PutFlagRequest | update a flag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putFlag(flagID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag to get | 
 **body** | [**PutFlagRequest**](PutFlagRequest.md)| update a flag | 

### Return type

[**Flag**](Flag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setFlagEnabled"></a>
# **setFlagEnabled**
> Flag setFlagEnabled(flagID, body)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.FlagApi();

var flagID = 789; // Number | numeric ID of the flag to get

var body = new Jsflagr.SetFlagEnabledRequest(); // SetFlagEnabledRequest | set flag enabled state


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setFlagEnabled(flagID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag to get | 
 **body** | [**SetFlagEnabledRequest**](SetFlagEnabledRequest.md)| set flag enabled state | 

### Return type

[**Flag**](Flag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

