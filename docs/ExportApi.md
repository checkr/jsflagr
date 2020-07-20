# Jsflagr.ExportApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExportEvalCacheJSON**](ExportApi.md#getExportEvalCacheJSON) | **GET** /export/eval_cache/json | 
[**getExportSqlite**](ExportApi.md#getExportSqlite) | **GET** /export/sqlite | 


<a name="getExportEvalCacheJSON"></a>
# **getExportEvalCacheJSON**
> Object getExportEvalCacheJSON()



Export JSON format of the eval cache dump

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
apiInstance.getExportEvalCacheJSON(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExportSqlite"></a>
# **getExportSqlite**
> File getExportSqlite(opts)



Export sqlite3 format of the db dump, which is converted from the main database.

### Example
```javascript
var Jsflagr = require('jsflagr');

var apiInstance = new Jsflagr.ExportApi();

var opts = { 
  'excludeSnapshots': true // Boolean | export without snapshots data - useful for smaller db without snapshots 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getExportSqlite(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **excludeSnapshots** | **Boolean**| export without snapshots data - useful for smaller db without snapshots  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

