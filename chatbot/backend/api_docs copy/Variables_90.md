

# Variables API

A CRM Variable can have unique set of values and can be widely used as merge fields in Email templates, Mail merge templates, and Inventory templates. You can also use them as reusable authentication parameters in APIs.

### Get Variables Data

#### Purpose

To retrieve all the available variables through an API request.

#### Endpoints

[GET /settings/variables](https://www.zoho.com/crm/developer/docs/api/v7/get-variables.html)

[GET /settings/variables/{variable\_id}?group={variable\_group\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-variables.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/variables

**To get specific variable:**

{api-domain}/crm/{version}/settings/variables/{variable\_id}?group={variable\_group\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.variables.{operation\_type}

#### Possible operation types

ALL - Full access to variable data

READ - Get variable data

#### Parameters

- groupstring, mandatory



Specify the unique ID/API name of the group to which the variable belongs.


**Note**

- Group ID/group API name is mandatory in case of fetching specific variable data. The system throws an error, otherwise.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/variables"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/variables"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON keys

- api\_namestring



Represents the API name of the CRM variable.

- namestring



Represents the display name of the variable.

- descriptionstring



Represents the description of the variable, if any.

- idstring



Represents the unique ID of the variable.

- typestring



Represents the type of the variable. It can be: text, integer, percent, decimal, currency, date, datetime, email, phone, url, textarea, checkbox, long.

- variable\_groupJSON object



Represents the API name and ID of the variable group to which the current variable belongs to.

- valuestring



Represents the value of the variable, if any.


#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.variables.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read variables data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read variables data

**Resolution:** The user does not have the permission to retrieve variables data. Contact your system administrator.


#### Sample Response

``` json
Copied{
  "variables": [\
    {\
      "api_name": "sample1",\
      "name": "SV1",\
      "description": "This is a sample variable.",\
      "id": "4150868000002146001",\
      "type": "text",\
      "variable_group": {\
        "api_name": "General",\
        "id": "4150868000000597005"\
      },\
      "value": ""\
    },\
    {\
      "api_name": "sample2",\
      "name": "SV2",\
      "description": null,\
      "id": "4150868000002517007",\
      "type": "long",\
      "variable_group": {\
        "api_name": "General",\
        "id": "4150868000000597005"\
      },\
      "value": ""\
    },\
    {\
      "api_name": "sample3",\
      "name": "SV3",\
      "description": null,\
      "id": "4150868000002517005",\
      "type": "textarea",\
      "variable_group": {\
        "api_name": "General",\
        "id": "4150868000000597005"\
      },\
      "value": ""\
    },\
    {\
      "api_name": "Sample4",\
      "name": "SV4",\
      "description": null,\
      "id": "4150868000002517003",\
      "type": "datetime",\
      "variable_group": {\
        "api_name": "General",\
        "id": "4150868000000597005"\
      },\
      "value": ""\
    }\
  ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-variables.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)