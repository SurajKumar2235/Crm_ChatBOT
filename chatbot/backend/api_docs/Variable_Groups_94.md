# Get Variable Groups

#### Purpose

To get the details of variable groups. Specify the unique ID or the API name of the variable group in your API request to get the data for that particular variable group.

#### Endpoints

[GET /settings/variable\_groups](https://www.zoho.com/crm/developer/docs/api/v7/get-variable-group.html)

[GET /settings/variable\_groups/{variable\_group\_id (or) variable\_group\_API\_name}](https://www.zoho.com/crm/developer/docs/api/v7/get-variable-group.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/variable\_groups

**To fetch a specific variable group:**

{api-domain}/crm/{version}/settings/variable\_groups/{variable\_group\_id (or) variable\_group\_API\_name}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.variable\_groups.{operation\_type}

#### Possible operation types

ALL - Full access to variable data

READ - Get variable group data

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/variable_groups"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/variable_groups/40000000047003"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON keys

- display\_labelstring



Represents the display name of the CRM variable group.

- api\_namestring



Represents the API name of the CRM variable group.

- namestring



Represents the name of the CRM variable group.

- descriptionstring



Represents the description of the CRM variable group, if any.

- idstring



Represents the unique ID of the CRM variable group.


#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.variable\_groups.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read records

**Resolution:** The user does not have permission to read variable group data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read variable group data

**Resolution:** The user does not have the permission to read variable group data. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "variable_groups": [\
       {\
            "display_label": "General",\
            "api_name": "General",\
            "name": "General",\
            "description": null,\
            "id": "40000000039001"\
        },\
       {\
            "display_label": "Group1",\
            "api_name": "Group1",\
            "name": "Group1",\
            "description": null,\
            "id": "40000000047001"\
        },\
       {\
            "display_label": "Group2",\
            "api_name": "Group2",\
            "name": "Group2",\
            "description": null,\
            "id": "40000000047005"\
        },\
       {\
            "display_label": "Group3",\
            "api_name": "Group3",\
            "name": "Group3",\
            "description": "This describes variable 3",\
            "id": "40000000042001"\
        },\
       {\
            "display_label": "Group4",\
            "api_name": "Group4",\
            "name": "Group4",\
            "description": null,\
            "id": "40000000042002"\
        },\
       {\
            "display_label": "MyCustsdomGroup",\
            "api_name": "MyCustsdomGroup",\
            "name": "MyCustsdomGroup",\
            "description": null,\
            "id": "40000000044003"\
        },\
       {\
            "display_label": "Variable6",\
            "api_name": "VariableSix",\
            "name": "Variable6",\
            "description": "On the sea shore",\
            "id": "40000000044001"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-variable-group.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)