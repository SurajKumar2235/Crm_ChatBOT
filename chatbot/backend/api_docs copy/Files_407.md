

# Get Files

#### Purpose

To fetch a file using its encrypted ID.

#### Endpoints

[GET /files](https://www.zoho.com/crm/developer/docs/api/v7/get-files.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/files

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.Files.{operation\_type}

#### Possible operation types

READ - To retrieve files from ZFS

#### Parameters

- idstring, mandatory



The encrypted ID of the file you received in the response while [uploading files to ZFS](https://www.zoho.com/crm/developer/docs/api/v7/upload-files-to-zfs.html).


#### Possible Errors

- NO\_CONTENTHTTP 204



No content found

**Resolution:** Specify a valid value to the "id" parameter.

- REQUIRED\_PARAM\_MISSINGHTTP 400



The expected parameter is missing

**Resolution:** Specify the required "id" parameter.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read.

**Resolution:** The user does not have the permission to read files. Contact your system administrator.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.Files.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read files. Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.


#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/files?id=2cceafa194dxxxxxxxx4a20ed2"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/files?id=2cceafa194dxxxxxxxx4a20ed2"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-files.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)