# Jsflagr.ExportApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExportSQLite**](ExportApi.md#getExportSQLite) | **GET** /export/sqlite | 


<a name="getExportSQLite"></a>
# **getExportSQLite**
> File getExportSQLite()



Export sqlite3 format of the db dump, which is converted from the main database.

### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.ExportApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getExportSQLite(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

