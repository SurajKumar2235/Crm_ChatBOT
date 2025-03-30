
# Download a Photo

#### Purpose

To download a photo associated with a module.

#### Endpoints

[GET /{module\_api\_name}/{record\_id}/photo](https://www.zoho.com/crm/developer/docs/api/v7/download-image.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/photo

#### Supported modules

Leads, Contacts, Accounts, Products, Vendors, and custom modules

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, contacts, accounts, products, vendors and custom modules

#### Possible operation types

ALL - Full access to images

READ - Get photo data

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name. Specify a valid module API name. Refer to the possible module names section above.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name. Refer to the possible module names section above.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to download images

**Resolution:** The user does not have permission to download images. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to download images

**Resolution:** The user does not have the permission to download images. Contact your system administrator.

- RECORD\_LOCKEDHTTP 400



cannot get the record image that is not approved yet

**Resolution:** Please wait until the Zia image or the merge duplicates process is complete and try again.

- NOT\_APPROVEDHTTP 400



cannot get the record image that is not approved yet

**Resolution:**



- **Case 1:** If the record is in the rejected state due to Zia image validation, either upload a new image (or) delete the failed image and, resubmit the record to Zia image validation.
- **Case 2:** If the record is in Zia record approval, the system will not allow you to update the images of the record until the reviewer approves or rejects the record.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3000000038009/photo"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Leads/3000000038009/photo"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

The required photo from the Leads record with id 3000000038009 will be downloaded.

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/download-image.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)