
# Upload File

#### Purpose

To upload a CSV file in ZIP format for bulk write API. The response contains the **file\_id**. Use this ID while making the bulk write request.

#### Endpoints

[POST /upload](https://www.zoho.com/crm/developer/docs/api/v7/bulk-write/upload-file.html)

### Request Details

#### Request URL

https://content.zohoapis.com/crm/v7/upload

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

feature: bulk-write - To indicate this is a bulk write job

X-CRM-ORG: **zgid** \- The unique ID (zgid) of your organization obtained through the [Organization API](https://www.zoho.com/crm/developer/docs/api/v7/get-org-data.html)

#### Scope

scope=ZohoFiles.files.ALL

#### Input form-data

- filefile, mandatory



Choose the zip file you want to upload.


#### Sample Request

``` curl
Copiedcurl "https://content.zohoapis.com/crm/v7/upload"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-CRM-ORG: 56xxxx47"
-H "feature: bulk-write"
-F "file=@file.csv.zip"
```

#### Possible Errors

- INVALID\_FILE\_FORMATHTTP 400



The file you uploaded is not in the zip format.

**Resolution: Upload the file only in the zip format.**

- FILE\_TOO\_LARGEHTTP 413



The file size is too large to process.

**Resolution:** The maximum file size is 25MB.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoFiles.files.ALL. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to create

**Resolution:** The user does not have permission to upload files. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to create.

**Resolution:** The user does not have the permission to upload file. Contact your system administrator.


**Note**

Refer to the [Limitations](https://www.zoho.com/crm/developer/docs/api/v7/bulk-write/limitations.html) to know the CSV file limits.

#### Sample Response

``` json
Copied{
    "status": "success",
    "code": "FILE_UPLOAD_SUCCESS",
    "message": "file uploaded.",
    "details": {
        "file_id": "111111000001492610",
        "created_time": "2018-12-31T12:00:00-12:00"
    }
    }
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/bulk-write/upload-file.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)