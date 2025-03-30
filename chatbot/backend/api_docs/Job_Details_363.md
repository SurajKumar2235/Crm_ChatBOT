

# Bulk Write Job Details

#### Purpose

To get the details of a bulk write job performed previously.

#### Endpoints

[GET /write/{job\_id}](https://www.zoho.com/crm/developer/docs/api/v7/bulk-write/job-details.html)

### Request Details

#### Request URL

{api-domain}/crm/bulk/{version}/write/{job\_id}

where job\_id is the unique ID of the bulk write job.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.bulk.CREATE

(or)

scope=ZohoCRM.bulk.ALL

#### Sample request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/bulk/v7/write/111111000000541958"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response Structure

- statusstring



Specifies the current status of the bulk write job. Example: "status": "ADDED" or "IN PROGRESS" or "COMPLETED".

- character\_encodingstring



Specifies the character encoding for the bulk write job. The system detects the character encoding automatically. However, if you specify, it will take precedence.

- idstring



Specifies the unique identifier of the bulk write job.

- resultJSON object



download\_url: Represents the download URL from which you can download the result (CSV file) of the bulk write job after its successful completion.

- created\_byJSON Object



Specifies the ID and Name of the user who initiated the bulk read job.

- operationstring



Specifies the type of bulk write operation performed. Sample: "operation": "insert".

- created\_timeISO8601



Specifies the date and time at which the bulk write job was initialized.

- resourceJSON Object



Contains the details about the module selected, the field mappings, and the ID of the file used for this job.



- **status**, string - The status of the bulk write job for that module. Example: "status": "ADDED", "IN PROGRESS", "COMPLETED", "SKIPPED", or "FAILED".
- **type**, string - The type of module that you have imported. The value is **data**.
- **module** string - The API name of the module that you have imported the records from.
- **field\_mappings**, JSON object - Contains the following keys:
  - **api\_name**, string - The API name of the field present in the Zoho module object that you want to import into.
  - **find\_by**, string - The API name of the unique field or primary field(record ID) in the module. The system uses this API name to find the existing records in CRM.
  - **index**, integer - The column index of the field you want to map to the CRM field.
  - **default\_value** JSON object - The default value with which the system replaces any partial or empty file column in the CSV file.

- fileJSON Object



Contains the following details about the import:



- **status**, string - The status of the bulk write job for that module. Example: "status": "ADDED", "IN PROGRESS", "COMPLETED", "SKIPPED", or "FAILED".
- **name**, string - The name of the CSV file which will get downloaded.
- **module**, string - The API name of the module that you have imported the records from.
- **added\_count**, integer - The number of records added or imported.
- **skipped\_count**, integer - The number of records skipped due to some issues. The **Error** column in the CSV file will have details about why the record was skipped during import.
- **updated\_count**, integer - The number of records updated during bulk update.
- **total\_count**, integer - The total number of records inserted, updated, or skipped during bulk import.

**Note**

To know about the Bulk Write API limits, [go here](https://www.zoho.com/crm/developer/docs/api/v7/bulk-write/limitations.html).

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.bulk.CREATE. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to get the details of a bulk write job. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read.

**Resolution:** The user does not have the permission to get the details of a bulk write job. Contact your system administrator.

- RESOURCE\_NOT\_FOUNDHTTP 404



The requested resource doesn't exist.

**Resolution:** The job ID specified is invalid. Specify a valid job ID.


#### Sample response for job "Added"

``` json
Copied{
  "status": "ADDED",
  "resource": [\
    {\
      "status": "INPROGRESS",\
      "code":"ADDED"\
      "type": "data",\
      "module": { "api_name": "Deals", "id": "3652397000000002181" }\
      "field_mappings": [\
        {\
          "api_name": "Deal_Name",\
          "index": 1,\
          "format": null,\
          "find_by": null,\
          "default_value": null\
        },\
        {\
          "api_name": "Stage",\
          "index": 132,\
          "format": null,\
          "find_by": null,\
          "default_value": null\
        }\
      ],\
      "file": {\
        "status": "INPROGRESS"\
      }\
    }\
  ],
  "id": "111111000000541958",
  "created_by": {
    "id": "111111000000035795",
    "name": "Patricia Boyle"
  },
  "operation": "insert",
  "created_time": "2019-01-30T02:21:32-12:00"
}
```

Show full

Show less

#### Sample response for job "In Progress"

``` json
Copied{
  "status": "INPROGRESS",
  "character_encoding": "UTF-8",
  "resource": [\
    {\
      "status": "INPROGRESS",\
      "code":"ADDED",\
      "type": "data",\
      "module": { "api_name": "Deals", "id": "3652397000000002181" }\
      "field_mappings": [\
        {\
          "api_name": "Deal_Name",\
          "index": 1,\
          "format": null,\
          "find_by": null,\
          "default_value": null\
        },\
        {\
          "api_name": "Stage",\
          "index": 2,\
          "format": null,\
          "find_by": null,\
          "default_value": null\
        }\
      ],\
      "file": {\
        "status": "INPROGRESS",\
        "name": "Deals.csv",\
        "added_count": 0,\
        "skipped_count": 100,\
        "updated_count": 0,\
        "total_count": 100\
      }\
    }\
  ],
  "id": "111111000000541958",
  "created_by": {
    "id": "111111000000035795",
    "name": "Patricia Boyle"
  },
  "operation": "insert",
  "created_time": "2019-01-30T02:18:15-12:00"
}
```

Show full

Show less

#### Sample response for job "Completed"

``` json
Copied{
  "status": "COMPLETED",
  "character_encoding": "UTF-8",
  "resource": [\
    {\
      "status": "COMPLETED",\
      "type": "data",\
      "code":"SUCCESS",\
       "module": { "api_name": "Deals", "id": "3652397000000002181" }\
      "field_mappings": [\
        {\
          "api_name": "Deal_Name",\
          "index": 1,\
          "format": null,\
          "find_by": null,\
          "default_value": null\
        },\
        {\
          "api_name": "Stage",\
          "index": 2,\
          "format": null,\
          "find_by": null,\
          "default_value": null\
        }\
      ],\
      "file": {\
        "status": "COMPLETED",\
        "name": "Deals.csv",\
        "added_count": 0,\
        "skipped_count": 100,\
        "updated_count": 0,\
        "total_count": 100\
      }\
    }\
  ],
  "id": "111111000000541958",
  "result": {
    "download_url": "/v7/crm/org6196138/bulk-write/111111000000541958/111111000000541958.zip"
  },
  "created_by": {
    "id": "111111000000035795",
    "name": "Patricia Boyle"
  },
  "operation": "insert",
  "created_time": "2019-01-30T02:18:15-12:00"
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/bulk-write/job-details.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)