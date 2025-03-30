
# Upload a Photo

#### Purpose

To attach a photo to a record. You must include the photo in the request with content type as multipart/form data.

#### Endpoints

[POST /{module\_api\_name}/{record\_id}/photo](https://www.zoho.com/crm/developer/docs/api/v7/upload-image.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/photo

#### Supported modules

Leads, Contacts, Accounts, Products, Deals, Vendors, and custom modules

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, contacts, accounts, products, deals, vendors and custom modules

#### Possible operation types

ALL - Full access to images

WRITE - Edit photo data

CREATE - Create photo data

#### Parameters

- restrict\_triggersstring, optional



Use this parameter to prevent the system from triggering associated workflows. Specify the value as "workflow".


#### Input

- filefile, mandatory



Choose the photo you want to upload. The allowed image formats are: PNG, JPEG, JPG, GIF, and BMP.


#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3000000038009/photo?restrict_triggers=workflow"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-F "file=@img1.png"
```

``` deluge
Copiedphoto = invokeUrl
[\
	url: "https://pbs.twimg.com/profile_images/1212572524128563200/w2ub-ATf_400x400.jpg"\
	type: GET\
];
photo.setParamName("file");
response = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/{module_api_name}/{record_id}/photo"\
	type: POST\
	files: photo\
	connection:"crm_oauth_connection"\
];
```

In the request, "file=@img1.png" contains the sample input image.

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

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.CREATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to upload photo

**Resolution:** The user does not have permission to upload photo. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to upload photo

**Resolution:** The user does not have the permission to upload photo. Contact your system administrator.

- INVALID\_DATAHTTP 400



the related id given seems to be invalid

**Resolution:** The related record ID specified in the URL is invalid. Refer to [Get Related Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-related-records.html) to get valid related record IDs.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.

- FILE\_SIZE\_MORE\_THAN\_ALLOWED\_SIZEHTTP 415



please check if the file size is in the correct range

**Resolution:** The photo you are trying to upload either exceeds the allowed size(10 MB) or the allowed resolution(10 MP). Ensure that the photo being uploaded is within the prescribed range.


#### Sample Response

``` json
Copied{
    "code": "SUCCESS",
    "details": {},
    "message": "photo uploaded successfully",
    "status": "success"
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/upload-image.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)