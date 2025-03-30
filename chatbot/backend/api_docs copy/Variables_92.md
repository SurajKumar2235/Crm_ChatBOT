

# Create Variables

#### Purpose

To create a new variable in CRM.

#### Endpoints

[POST /settings/variables](https://www.zoho.com/crm/developer/docs/api/v7/create-variables.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/variables

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.variables.{operation\_type}

#### Possible operation types

ALL - Full access to variable data

CREATE - Create variable data

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/variables"
-X POST
-d @createvariables.json
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedvariable1 = Map();
variable1.put("name", "Variable99");
variable1.put("api_name", "Variable99");
variable1.put("variable_group", {"id":"692969000000981099"});
variable1.put("type", "integer");
variable1.put("value", "99");
variable1.put("description", "This denotes variable 9 description");

variable2 = Map();
variable2.put("name", "Variable22");
variable2.put("api_name", "Variable22");
variable2.put("variable_group", {"name":"Group2"});
variable2.put("type", "text");
variable2.put("value", "Hello");
variable2.put("description", "This denotes variable 2 description");

variables_list = List();
variables_list.add(variable1);
variables_list.add(variable2);
param = Map();
param.put("variables", variables_list);
	response = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/variables"\
	type: POST\
	parameters: param.toString()\
	connection:"crm_oauth_connection"\
];
info response;
```

Show full

Show less

In the request, "@createvariables.json" contains the sample input data.

#### Input JSON Keys

To create variables, send a POST request with request body containing the following attributes:

- namestring, mandatory



Specify the display name of the variable that you want to create. It is a **unique** field.

**Example:** VariableName3

- api\_namestring, mandatory



Specify the name with which the variable is to be referred in any API request. It is a **unique** field.

**Example:** MainVariable

- typestring, optional



Specify the data type of the variable.

**Possible values:** integer, text, percent, decimal, currency, date, datetime, email, phone, url, checkbox, textarea, long

- variable\_groupJSON object, mandatory



Specify the group to which the variable must belong to.

**Example:** {"id": 40000000047005} or {"name":"Group2"}

- valuedepends on type, optional



Specify the default value of the variable.

**Example:** 123

- descriptionstring, optional



Specify a short description of the variable.

**Example:** A short description of the variable.


#### Sample Input

``` json
Copied{
    "variables": [\
       {\
            "name": "Variable33",\
            "api_name": "Variable33",\
            "variable_group": {\
                "id": "40000000047005"\
            },\
            "type": "integer",\
            "value": 33,\
            "description": "This denotes variable 3 description"\
        },\
       {\
            "name": "Variable44",\
            "api_name": "Variable44",\
            "variable_group": {\
                "name": "Group2"\
            },\
            "type": "text",\
            "value": "Hello",\
            "description": "This denotes variable 4 description"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.variables.CREATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to create records

**Resolution:** The user does not have permission to create variables. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to add variables

**Resolution:** The user does not have the permission to add variables. Contact your system administrator.

- PATTERN\_NOT\_MATCHEDHTTP 400



Please check whether the input values are correct

**Resolution:** The value specified for "type" key is incorrect. Refer to Input JSON Keys and specify a valid input.

- INVALID\_DATAHTTP 400



invalid data

**Resolution:** The input specified is incorrect. Refer to Input JSON Keys section above and specify the valid input.

- DUPLICATE\_DATAHTTP 400



duplicate data

**Resolution:** You have specified a duplicate value for one or more unique fields. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the unique fields.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** You have not specified one or more mandatory fields in the input. Refer to Input JSON Keys section above and specify all the mandatory fields in the input.


#### Sample Response

``` json
Copied{
    "variables": [\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "40000000047009"\
            },\
            "message": "variable added",\
            "status": "success"\
        },\
       {\
            "code": "SUCCESS",\
            "details": {\
                "id": "40000000047010"\
            },\
            "message": "variable added",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-variables.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)