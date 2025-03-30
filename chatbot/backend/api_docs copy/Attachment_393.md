
# Upload an Attachment

#### Purpose

To attach a file to a record. You must include the attachment in the request with content type as multipart/form data.

#### Endpoints

[POST /{module\_api\_name}/{record\_id}/Attachments](https://www.zoho.com/crm/developer/docs/api/v7/upload-attachment.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/Attachments

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, Appointments, Services and Notes

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

**(and)**

scope=ZohoCRM.modules.attachments.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, appointments, services and notes

#### Possible operation types

ALL - Full access to attachments

WRITE - Edit attachment data

CREATE - Create attachment data

#### Input form-data

- filefile, mandatory



Choose the attachment you want to upload.


#### Parameters

- titlestring, optional



The title of the attachment link.


#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/1000000231009/Attachments"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-F "file=@attachment1.txt" (to upload file)
(or)
-F "attachmentUrl=https://www.zohocorp.com" (to upload link)
```

``` deluge
Copiedphoto = invokeUrl
[\
	url: "https://pbs.twimg.com/text.txt"\
	type: GET\
];
photo.setParamName("file");
response = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Leads/1000000231009/Attachments"\
	type: POST\
	files: text file\
	connection:"crm_oauth_connection"\
];
```

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.attachments.CREATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to upload attachment

**Resolution:** The user does not have permission to upload attachments. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to upload attachments

**Resolution:** The user does not have the permission to upload attachments. Contact your system administrator.

- INVALID\_DATAHTTP 400



the related id given seems to be invalid

**Resolution:** The related record ID specified in the URL is invalid. Refer to [Get Related Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-related-records.html) to get valid related record IDs.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Modified_Time": "2021-05-03T18:03:00+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "4150868000000225013"\
                },\
                "Created_Time": "2021-05-03T18:03:00+05:30",\
                "id": "4150868000005277036",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "4150868000000225013"\
                }\
            },\
            "message": "attachment uploaded successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/upload-attachment.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)