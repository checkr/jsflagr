# Jsflagr.EvalContext

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityID** | **String** | entityID is used to deterministically at random to evaluate the flag result. If it's empty, flagr will randomly generate one. | [optional] 
**entityType** | **String** |  | [optional] 
**entityContext** | **Object** |  | [optional] 
**enableDebug** | **Boolean** |  | [optional] 
**flagID** | **Number** | flagID | [optional] 
**flagKey** | **String** | flagKey. flagID or flagKey will resolve to the same flag. Either works. | [optional] 
**flagTags** | **[String]** | flagTags. flagTags looks up flags by tag. Either works. | [optional] 


