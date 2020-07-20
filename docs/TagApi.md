# Jsflagr.TagApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagApi.md#createTag) | **POST** /flags/{flagID}/tags | 
[**deleteTag**](TagApi.md#deleteTag) | **DELETE** /flags/{flagID}/tags/{tagID} | 
[**findAllTags**](TagApi.md#findAllTags) | **GET** /tags | 
[**findTags**](TagApi.md#findTags) | **GET** /flags/{flagID}/tags | 


<a name="createTag"></a>
# **createTag**
> Tag createTag(flagID, body)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.TagApi();

var flagID = 789; // Number | numeric ID of the flag

var body = new Jsflagr.CreateTagRequest(); // CreateTagRequest | create a tag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTag(flagID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 
 **body** | [**CreateTagRequest**](CreateTagRequest.md)| create a tag | 

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTag"></a>
# **deleteTag**
> deleteTag(flagID, tagID)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.TagApi();

var flagID = 789; // Number | numeric ID of the flag

var tagID = 789; // Number | numeric ID of the tag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTag(flagID, tagID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 
 **tagID** | **Number**| numeric ID of the tag | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findAllTags"></a>
# **findAllTags**
> [Tag] findAllTags(opts)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.TagApi();

var opts = { 
  'limit': 789, // Number | the numbers of tags to return
  'offset': 789, // Number | return tags given the offset, it should usually set together with limit
  'valueLike': "valueLike_example" // String | return tags partially matching given value
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findAllTags(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| the numbers of tags to return | [optional] 
 **offset** | **Number**| return tags given the offset, it should usually set together with limit | [optional] 
 **valueLike** | **String**| return tags partially matching given value | [optional] 

### Return type

[**[Tag]**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findTags"></a>
# **findTags**
> [Tag] findTags(flagID)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.TagApi();

var flagID = 789; // Number | numeric ID of the flag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findTags(flagID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 

### Return type

[**[Tag]**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

