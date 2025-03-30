
# Delete Tags

#### Purpose

To delete a tag from a module.

#### Endpoints

[DELETE /settings/tags/{tag\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-tag.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/tags/{tag\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.ALL

(or)

scope=ZohoCRM.settings.tags.{operation\_type}

#### Possible operation types

ALL - Full data access

WRITE - Edit tag data

DELETE - Delete tag data

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/tags/2000000035058"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/tags/2000000035058"\
	type: DELETE\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.tags.DELETE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to delete tags

**Resolution:** The user does not have permission to delete tags. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to delete tags

**Resolution:** The user does not have the permission to delete tags. Contact your system administrator.

- INVALID\_DATAHTTP 400



tags not found

**Resolution:** The tag ID specified in the URL is invalid. Refer to [Get Tags API](https://www.zoho.com/crm/developer/docs/api/v7/get-tag-list.html) to get valid tag IDs.


#### Sample Response

``` json
Copied{
    "tags": {
        "code": "SUCCESS",
        "details": {
            "id": "2000000035058"
        },
        "message": "tags deleted successfully",
        "status": "success"
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-tag.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)