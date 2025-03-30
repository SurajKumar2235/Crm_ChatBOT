
# Delete Variables

#### Purpose

To delete details of CRM variables.

#### Endpoints

[DELETE /settings/variables?ids={variable\_id1, variable\_id2, variable\_id3}](https://www.zoho.com/crm/developer/docs/api/v7/delete-variable.html)

[DELETE /settings/variables/{variable\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-variable.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/variables?ids={variable\_id1, variable\_id2, variable\_id3}

**To delete a specific variable:**

{api-domain}/crm/{version}/settings/variables/{variable\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.variables.{operation\_type}

#### Possible operation types

ALL - Full access to variable data

DELETE - Delete variable data

#### Parameters

- idsstring, mandatory when deleting multiple variables



Specify comma separated variable IDs.


#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/variables?ids=40000000047007,40000000047009,40000000047010"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/variables?ids=40000000047007,40000000047009,40000000047010"\
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

**Resolution:** Client does not have ZohoCRM.settings.variables.DELETE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to delete records

**Resolution:** The user does not have permission to delete variables. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- NOT\_ALLOWEDHTTP 400



The variable you want to delete is associated with other features

**Resolution:** You cannot delete a variable that is used in other features such as email or inventory templates, webhooks, functions etc. The "details" key in the response contains the places where the variables are used. Remove the variables from these places and then delete them.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to delete variables

**Resolution:** The user does not have the permission to delete variables. Contact your system administrator.

- INVALID\_DATAHTTP 400



variable not deleted

**Resolution:** The specified ID of the variable is incorrect. Refer to [Get Variables API](https://www.zoho.com/crm/developer/docs/api/v7/get-variables.html) to get unique variable ID.

- UNABLE\_TO\_PARSE\_DATA\_TYPEHTTP 400



either the request body or parameters is in wrong format

**Resolution:** The parameter values are in the wrong format. Specify valid record IDs in the correct format. Refer to endpoints section above.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** 'ids' parameter is missing in the request. Please specify the valid IDs of the variables to be deleted. Refer to [Get Variable Data API](https://www.zoho.com/crm/developer/docs/api/v7/get-variables.html) to get valid record IDs.


#### Sample Response

``` json
Copied{
    "variables": [\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "40000000047007"\
            },\
            "message": "variable deleted",\
            "status": "success"\
        },\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "40000000047009"\
            },\
            "message": "variable deleted",\
            "status": "success"\
        },\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "40000000047010"\
            },\
            "message": "variable deleted",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-variable.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)