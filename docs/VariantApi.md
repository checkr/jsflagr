# Jsflagr.VariantApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVariant**](VariantApi.md#createVariant) | **POST** /flags/{flagID}/variants | 
[**deleteVariant**](VariantApi.md#deleteVariant) | **DELETE** /flags/{flagID}/variants/{variantID} | 
[**findVariants**](VariantApi.md#findVariants) | **GET** /flags/{flagID}/variants | 
[**putVariant**](VariantApi.md#putVariant) | **PUT** /flags/{flagID}/variants/{variantID} | 


<a name="createVariant"></a>
# **createVariant**
> Variant createVariant(flagID, body)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.VariantApi();

var flagID = 789; // Number | numeric ID of the flag

var body = new Jsflagr.CreateVariantRequest(); // CreateVariantRequest | create a variant


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createVariant(flagID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 
 **body** | [**CreateVariantRequest**](CreateVariantRequest.md)| create a variant | 

### Return type

[**Variant**](Variant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteVariant"></a>
# **deleteVariant**
> deleteVariant(flagID, variantID)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.VariantApi();

var flagID = 789; // Number | numeric ID of the flag

var variantID = 789; // Number | numeric ID of the variant


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteVariant(flagID, variantID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 
 **variantID** | **Number**| numeric ID of the variant | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findVariants"></a>
# **findVariants**
> [Variant] findVariants(flagID)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.VariantApi();

var flagID = 789; // Number | numeric ID of the flag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findVariants(flagID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 

### Return type

[**[Variant]**](Variant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putVariant"></a>
# **putVariant**
> Variant putVariant(flagID, variantID, body)



### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.VariantApi();

var flagID = 789; // Number | numeric ID of the flag

var variantID = 789; // Number | numeric ID of the variant

var body = new Jsflagr.PutVariantRequest(); // PutVariantRequest | update a variant


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putVariant(flagID, variantID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagID** | **Number**| numeric ID of the flag | 
 **variantID** | **Number**| numeric ID of the variant | 
 **body** | [**PutVariantRequest**](PutVariantRequest.md)| update a variant | 

### Return type

[**Variant**](Variant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

