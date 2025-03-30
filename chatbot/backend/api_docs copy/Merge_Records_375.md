
# Merge Records API

This API merges up to three duplicate records into a single one, deleting the duplicates. You can specify one as the master record which is to be retained post-merge, and the other two as child records which are to be deleted. You can specify fields from the child records whose values are to be used for the merged record, and retain the master record values for the remaining fields.

To explore more on the Find and Merge feature, please refer to this [link](https://help.zoho.com/portal/en/kb/crm/manage-crm-data/duplication-management/articles/merge-duplicate-record#Find__Merge_Duplicate_Records).

#### Purpose

To merge upto three duplicate records into a single record and delete the duplicates.

#### Endpoints

[POST /{module\_api\_name}/{master-record\_id}/actions/merge](https://www.zoho.com/crm/developer/docs/api/v7/merge-records.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{master-record\_id}/actions/merge

#### Supported Modules

Leads, Contacts, Accounts, Potentials, Vendors and Custom.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible Module Names

leads, contacts, potentials, accounts, vendors, and custom.

#### Possible Operation Types

WRITE - Edit records in a module.

ALL - Full access to the record.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/2423488000000500064/actions/merge"
-X POST
-d @input.json
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

#### Input JSON Keys

- master\_record\_fieldsJSON array, optional



Specify the API name of the file upload and image upload fields to retain them in the merged record.



  - api\_namestring, mandatory



    Represents the API name of the file upload or image upload field.

  - \_dataJSON array, optional



    It represents the unique ID of a file or attachment. This field is specifically used for File Upload and Image Upload fields in a record. Use [GET Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to retrieve the unique IDs of the files or attachments.



    - idstring, mandatory



      Represent the unique ID of the attachment.
- dataJSON array, mandatory



Specify the details of the child records and the fields whose value you want to use in the merged record.



idstring, mandatory



Represents the ID of the child record.



  - \_fieldsJSON array, mandatory



    Specify the API names of the fields whose values you wish to merge into the master record.



    - api\_namestring, mandatory



      Represents the API name of the fields in the child record.

**Notes**

- If an image upload or file upload is not specified, all the images/files in the master record will be retained.
- If **'\_data': null** is provided, all the images/files for that specific field will be deleted.
- If a child record has more than **1000 records** in any of its related lists, then the merge action will be **scheduled**. This meas that it performs an asynchronous action, and the response to your request will not be available immediately. Instead, you will receive a unique **job\_id** in the response. You can use this job\_id to retrieve the status of your merge action. For details, please refer to the [Get Records Merge Status API](https://www.zoho.com/crm/developer/docs/api/v7/get-merge-status.html).

#### Sample Input

``` json
Copied{
    "merge": [\
        {\
            "master_record_fields": [\
                {\
                    "api_name": "Company"\
                },\
                {\
                    "api_name": "File_Upload",\
                    "_data": [\
                        {\
                            "id": "2423488000000538058"\
                        }\
                    ]\
                }\
            ],\
            "data": [\
                {\
                    "id": "2423488000000495876",\
                    "_fields": [\
                        {\
                            "api_name": "Annual_Revenue"\
                        },\
                        {\
                            "api_name": "Last_Name"\
                        }\
                    ]\
                }\
            ]\
        }\
    ]
}
```

#### Possible Errors

- **INVALID\_DATA**HTTP 400



- Master record id is not available
- The merge JSON array has reached its limit
- The data JSON object has reached its limit
- Atleast one child record id is required to be merged
- Reporting\_To and Account\_Name should belong to the same record

**Resolutions:**

- Specify a valid record ID.
- The merge JSON array can have only one JSON object.
- The data JSON array can have a maximum of two values, corresponding to the two child records.
- The data JSON array cannot be empty. Please specify valid data.
- The **Reporting\_To** and **Account\_Name** should be used from the same record.

- **MANDATORY\_NOT\_FOUND**HTTP 400



- The API names in the field JSON array cannot be empty
- The API names in the merge JSON array cannot be empty
- The ID of the child record is empty

**Resolutions:**
- Specify the valid API names in the merge JSON array.
- Specify the valid API names in the fields JSON array.
- Specify the ID of the child record.

- **INVALID\_MODULE**HTTP 400



The module name given seems to be invalid

**Resolution:** Please specify the a module name in the URL. Refer to the request URL section above.

- **NOT\_ALLOWED**HTTP 400



- This record id is not allowed to be merged
- Record is not allowed for merging
- Closing date will be automatically populated based on master record
- Stage field will be automatically populated based on chosen Pipeline
- Only Open Deals can be merged
- Probability and Expected Revenue fields will be automatically populated based on chosen Stage

**Resolutions:**

- The record you are trying to merge has already been scheduled for merging. Please specify another valid record ID.
- The record is **currently locked** or in **Approval / Review Process**. Please **unlock the record** and merge, or contact the admin.
- Do not specify the **closing date** field. The closing date will be fetched automatically from the master record.
- Do not specify the stage field. The stage value will be automatically fetched from the chosen pipeline. If you specify the pipeline of the child record, then the stage value will be fetched from the respective pipeline.
- Do not use the closed deals. The merge action will take place only with the open deals.
- Do not specify the **Expected Revenue** and **Probability** fields. The values of these fields will be automatically fetched based on the stage.

- **DUPLICATE\_DATA**HTTP 400



- Similar ID is already given for merging
- Field has already been mentioned for other record in merge

**Resolutions:**

- You have specified the same record ID for master and/or child records. Please specify different record IDs for merging.
- You have already specified this field. Please specify each field only once, either in the **master\_record\_fields** array, or one of the **data** arrays.

- **DEPENDENT\_FIELD\_MISSING**HTTP 400



- The \_data array is not specified for the master record
- The \_data array is not mentioned for the child record

**Resolutions:**

- Specify the unique ID of a file or image from the \_data JSON array. The dependent "id" field is missing for the File\_Upload or Image\_Upload field in the master record.
- Specify the unique ID of a file or image in the \_data JSON array. The dependent "id" field is missing for the File\_Upload or Image\_Upload field in the child record.

- **LIMIT\_EXCEEDED**HTTP 400



The total number of given files cannot be more than the maximum limit.



**Resolution:** Please check the maximum limits in the response, for example, if "maximum\_length": 1, it means the maximum allowed length for attaching an image or file is 1.

- **INVALID\_REQUEST\_METHOD**HTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- **INVALID\_MODULE**HTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name.

Specify a valid module name.

- **OAUTH\_SCOPE\_MISMATCH**HTTP 401



Unauthorized

**Resolution:** Client does not have **ZohoCRM.modules.{module\_name}.WRITE** scope.

Create a new token with valid scope. Refer to scope section above.

- **AUTHENTICATION\_FAILURE**HTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- **INVALID\_URL\_PATTERN**HTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- **INTERNAL\_ERROR**HTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "merge": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2423488000000500064"\
            },\
            "message": "The records have been merged successfully",\
            "status": "success"\
        }\
    ]
}
```

#### Sample Response for scheduled merge call

``` json
Copied{
    "merge": [\
        {\
            "code": "SCHEDULED",\
            "details": {\
                "job_id": "2423488000000513988"\
            },\
            "message": "The records have been scheduled for merge",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/merge-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)