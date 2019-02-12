# Jsflagr.HealthApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHealth**](HealthApi.md#getHealth) | **GET** /health | 


<a name="getHealth"></a>
# **getHealth**
> getHealth()



Check if Flagr is healthy

### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.HealthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getHealth(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

