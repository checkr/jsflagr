# Jsflagr.Flag

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**key** | **String** | unique key representation of the flag | [optional] 
**description** | **String** |  | 
**enabled** | **Boolean** |  | 
**tags** | [**[Tag]**](Tag.md) |  | [optional] 
**segments** | [**[Segment]**](Segment.md) |  | [optional] 
**variants** | [**[Variant]**](Variant.md) |  | [optional] 
**dataRecordsEnabled** | **Boolean** | enabled data records will get data logging in the metrics pipeline, for example, kafka. | 
**entityType** | **String** | it will override the entityType in the evaluation logs if it's not empty | [optional] 
**notes** | **String** | flag usage details in markdown format | [optional] 
**createdBy** | **String** |  | [optional] 
**updatedBy** | **String** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 


