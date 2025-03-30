

# Update Variables

#### Purpose

To update details of variables in CRM.

#### Endpoints

[PUT /settings/variables](https://www.zoho.com/crm/developer/docs/api/v7/update-variables.html)

[PUT /settings/variables/{variable\_id (or) variable\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/update-variables.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/variables

**To update a specific variable:**

{api-domain}/crm/{version}/settings/variables/{variable\_id (or) variable\_api\_name}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.variables.{operation\_type}

#### Possible operation types

ALL - Full access to variable data

UPDATE - Update variable data

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/variables/40000000047010"
(or)
curl "https://www.zohoapis.com/crm/v7/settings/variables/Variable444"
-X PUT
-d @updatevariables.json
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedvariable1 = Map();
variable1.put("id", "692969000000981112");
variable1.put("value", "9");

variable2 = Map();
variable2.put("id", "692969000000983066");
variable2.put("description", "This is a new description");

variable3 = Map();
variable3.put("id", "692969000000981114");
variable3.put("api_name", "NewAPI");

variables_list = List();
variables_list.add(variable1);
variables_list.add(variable2);
variables_list.add(variable3);

param = Map();
param.put("variables", variables_list);
	response = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/variables"\
	type: PUT\
	parameters: param.toString()\
	connection:"crm_oauth_connection"\
];
info response;
```

Show full

Show less

In the request, "@updatevariables.json" contains the sample input data.

#### Input JSON Keys

- idstring, mandatory



Specify the unique ID of the variable that you want to update. Refer to [Get Variables API](https://www.zoho.com/crm/developer/docs/api/v7/get-variables.html) to get unique variable ID.


For other input keys, refer to [Create Variables API](https://www.zoho.com/crm/developer/docs/api/v7/create-variables.html). You cannot update the type or variable group of the variable.

#### Sample Input

``` json
Copied{
    "variables": [\
       {\
            "id": "40000000047003",\
            "value": "This is a new value"\
        },\
       {\
            "id": "40000000047007",\
            "description": "This is a new description"\
        },\
       {\
            "id": "40000000047009",\
            "api_name": "NewAPI"\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.variables.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update records

**Resolution:** The user does not have permission to update variables. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update variables

**Resolution:** The user does not have the permission to update variables. Contact your system administrator.

- INVALID\_DATAHTTP 400



invalid data

**Resolution:** The specified ID of the variable is incorrect. Refer to [Get Variables API](https://www.zoho.com/crm/developer/docs/api/v7/get-variables.html) to get unique variable ID.

- DUPLICATE\_DATAHTTP 400



duplicate data

**Resolution:** You have specified a duplicate value for one or more unique fields. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the unique fields.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** You have not specified one or more mandatory fields in the input. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the mandatory fields.


#### Sample Response

``` json
Copied{
    "variables": [\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "40000000047003"\
            },\
            "message": "variable updated",\
            "status": "success"\
        },\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "40000000047007"\
            },\
            "message": "variable updated",\
            "status": "success"\
        },\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "40000000047009"\
            },\
            "message": "variable updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-variables.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)