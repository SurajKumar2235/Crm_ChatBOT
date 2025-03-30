

# Upload Files to Zoho File System (ZFS)

#### Purpose

ZFS is the central storage system to all your files and attachments. Use this API to upload fields to ZFS. This API returns an encrypted file ID and the file name. You can use this encrypted ID to attach this file to a file/image upload field or a record in Zoho CRM. You must upload the file with content type as multipart/form data.

#### Endpoints

[POST /files](https://www.zoho.com/crm/developer/docs/api/v7/upload-files-to-zfs.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/files

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.Files.{operation\_type}

#### Possible operation types

CREATE - To add files to ZFS

#### Parameters

- typestring, optional



To upload inline images.

**Resolution:** The value is **inline**.


#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/files"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-F "file=@connections.txt"
-F "file=@enable-signals.png"
```

``` deluge
CopiedfileVariable = invokeurl
[\
	url: "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf"\
	type: GET\
];
fileVariable.setParamName("file");
response = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/files"\
	type :POST\
	files: fileVariable\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Possible Errors

- failure\_in\_attachment\_handling HTTP 400



invalid oauth scope to access this URL

**Resolution:** Problem in uploading attachment. kindly upload the file properly

- VIRUS\_DETECTEDHTTP 400



Unable to process your request. Virus has been detected.

**Resolution:** A virus is found in the file that you uploaded. Upload a file without any viruses.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.Files.CREATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to create

**Resolution:** The user does not have permission to upload files to ZFS. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to create.

**Resolution:** The user does not have the permission to add files to ZFS. Contact your system administrator.


**Note**

- The maximum size of each attachment is 20MB.

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "name": "connections.txt",\
                "id": "2cceafaxxxxxxxc065186"\
            },\
            "message": "connections.txt uploaded Succeessfully",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "name": "enable-signals.png",\
                "id": "2ccxxxxxxxxxxxb89e051a"\
            },\
            "message": "enable-signals.png uploaded Succeessfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/upload-files-to-zfs.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)