
# List of Available APIs

#### Purpose

To retrieve the list of supported APIs in the current API version, with the option to filter the APIs based on their request methods, OAuth scopes and credit limits.

#### Endpoints

[GET /\_\_apis](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html)

[GET /\_\_apis?filters={value}](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/\_\_apis

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.apis.READ

#### Parameter

- filtersstring, optional



The parameter allows you to filter the supported APIs for the version specified in the URL. You can filter based on three criteria: **Module**, **OAuth scope**, and **Method**. By default, all supported APIs are displayed for the specified API version.



The “ **filters**” parameter structure should be:

**{**

**"field": {**

**"api\_name": "{{value}}"**

**},**

**"comparator": "equals",**

**"value": "{{value}}"**

**}**

**Note:** Encode the value of the **filters** parameter before sending a request.



**Example :**_{"field": {"api\_name": "operation\_types.method"},"comparator": "equals","value": "POST"}_

**Explanation :**

It filters only the POST request method APIs, i.e., the value "POST" in the "value" key depends on the value given in the "api\_name" key in the field JSON object.  It filters only the POST request method APIs, i.e., the value "POST" in the "value" key depends on the value given in the "api\_name" key in the field JSON object.

- fieldsJSON object, mandatory



Represents the attribute to filter with.



**Supported attributes  :** Module, OAuth scope, and Request Method.



  - api\_namestring, mandatory



    Represents the API name of the filter to query. Supported filters include:



- [operation\_types.oauth\_scope](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html#oauth) \- to filter OAuth scope-specific available APIs.
- [operation\_types.method](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html#method)\- to filter method-specific supported APIs.
- [module](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html#module)(including [custom module](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html#custom)) \- to filter module-specific supported APIs.

**Note:** Each filter criterion is explained below with a sample request and response.
- comparatorstring, mandatory



Represents the comparison operator used for filtering. Supported value: **equals**.

- valuestring, mandatory



Contains the value to be compared with the corresponding attribute of the " **api\_name**" key in the **field JSON object**.


**Notes**

- Encode the value of the **filters** parameter before sending a request.
- The " **filters"** parameter supports :
  - A **single** criteria.
  - The **"equals"** comparator.
- The API will be supported from version **2**.
- The credit limit for this API is **1**.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/__apis"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "__apis": [\
        {\
            "path": "/crm/v7/Quotes/{{id}}/actions/send_mail",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.send_mail.quotes.CREATE",\
                    "max_credits": 20,\
                    "min_credits": 20\
                },\
                {\
                    "method": "PUT",\
                    "oauth_scope": "ZohoCRM.send_mail.quotes.CREATE",\
                    "max_credits": 20,\
                    "min_credits": 20\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/Accounts/{{id}}/photo",\
            "operation_types": [\
                {\
                    "method": "GET",\
                    "oauth_scope": "ZohoCRM.modules.accounts.READ",\
                    "max_credits": 1,\
                    "min_credits": 1\
                },\
                {\
                    "method": "DELETE",\
                    "oauth_scope": "ZohoCRM.modules.accounts.DELETE",\
                    "max_credits": 1,\
                    "min_credits": 1\
                },\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.modules.accounts.CREATE",\
                    "max_credits": 1,\
                    "min_credits": 1\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/Deals/{{id}}/Attachments",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.modules.deals.CREATE",\
                    "max_credits": 1,\
                    "min_credits": 1\
                },\
                {\
                    "method": "GET",\
                    "oauth_scope": "ZohoCRM.modules.deals.READ",\
                    "max_credits": 1,\
                    "min_credits": 1\
                },\
                {\
                    "method": "PUT",\
                    "oauth_scope": "ZohoCRM.modules.deals.UPDATE",\
                    "max_credits": 1,\
                    "min_credits": 1\
                },\
                {\
                    "method": "DELETE",\
                    "oauth_scope": "ZohoCRM.modules.deals.DELETE",\
                    "max_credits": 1,\
                    "min_credits": 1\
                }\
            ]\
        },\
\
       .\
       .\
       .\
\
    ]
}
```

Show full

Show less

#### The "filters" parameter with "OAuth Scope" value

- _**"api\_name": "operation\_types.oauth\_scope"**_



To filter OAuth scope-specific available APIs.



The “ **filters**” parameter structure should be:



filters : {"field": {"api\_name": "operation\_types.oauth\_scope"}, "comparator": "equals" "value": "{{scope\_name}}"}



The supported **scope name values** are settings, modules, users, templates, org, mass\_convert, features, mass\_delete, mass\_update, share, change\_owner, send\_mail, bulk, composite\_requests, notifications, and coql.



To know the **individual module-specific supported APIs**, you can give the value such as "modules.leads", "modules.contacts", and so on.



To know the **individual metadata-specific supported APIs**, you should specify the value as "settings.territories", "settings.custom\_views", "settings.fields", and so on.


#### Sample request using the "filters" parameter to fetch "OAuth scope" related APIs

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/__apis?filters=%7B%22field%22%3A%20%7B%22api_name%22%3A%20%22operation_types.oauth_scope%22%7D%2C%22comparator%22%3A%20%22equals%22%2C%22value%22%3A%20%22send_mail%22%7D"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "__apis": [\
        {\
            "path": "/crm/v7/Quotes/{{id}}/actions/send_mail",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.send_mail.quotes.CREATE",\
                    "max_credits": 20,\
                    "min_credits": 20\
                },\
                {\
                    "method": "PUT",\
                    "oauth_scope": "ZohoCRM.send_mail.quotes.CREATE",\
                    "max_credits": 20,\
                    "min_credits": 20\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/Invoices/{{id}}/actions/send_mail",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.send_mail.invoices.CREATE",\
                    "max_credits": 20,\
                    "min_credits": 20\
                },\
                {\
                    "method": "PUT",\
                    "oauth_scope": "ZohoCRM.send_mail.invoices.CREATE",\
                    "max_credits": 20,\
                    "min_credits": 20\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/Sales_Orders/{{id}}/actions/send_mail",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.send_mail.salesorders.CREATE",\
                    "max_credits": 20,\
                    "min_credits": 20\
                },\
                {\
                    "method": "PUT",\
                    "oauth_scope": "ZohoCRM.send_mail.salesorders.CREATE",\
                    "max_credits": 20,\
                    "min_credits": 20\
                }\
            ]\
        },\
        .\
        .\
        .\
    ]
}
```

Show full

Show less

#### The "filters" parameter with "Method" value

- _**"api\_name": "operation\_types.method"**_



To filter method-specific available APIs.



The “ **filters**” parameter structure should be:



filters - {"field": {"api\_name": "operation\_types.method"},"comparator": "equals","value": "{{request\_method\_as\_value}}"}



**Supported values:** GET, POST, PUT, PATCH, and DELETE.


**Notes**

- The supported methods are **case-sensitive**.

#### Sample request using the "filters" parameter to fetch "method" specific APIs

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/__apis?filters=%7B%22field%22%3A%20%7B%22api_name%22%3A%20%22operation_types.method%22%7D%2C%22comparator%22%3A%20%22equals%22%2C%22value%22%3A%20%22POST%22%7D"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "__apis": [\
        {\
            "path": "/crm/v7/Quotes/{{id}}/actions/send_mail",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.send_mail.quotes.CREATE",\
                    "max_credits": 20,\
                    "min_credits": 20\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/Accounts/{{id}}/photo",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.modules.accounts.CREATE",\
                    "max_credits": 1,\
                    "min_credits": 1\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/Deals/upsert",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.modules.deals.CREATE",\
                    "max_credits": 10,\
                    "min_credits": 1\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/Deals/{{id}}/Attachments",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.modules.deals.CREATE",\
                    "max_credits": 1,\
                    "min_credits": 1\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/Events",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.modules.events.CREATE",\
                    "max_credits": 10,\
                    "min_credits": 1\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/Deals/{{id}}/actions/assign_territories",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.modules.deals.UPDATE",\
                    "max_credits": 1,\
                    "min_credits": 1\
                }\
            ]\
        },\
        .\
        .\
        .\
    ]
}
```

Show full

Show less

#### The "filters" parameter with "Module" value

- _**"api\_name": "module"**_



To filter module-specific supported APIs.



The “ **filters**” parameter structure should be:



filters : {"field": {"api\_name": "module"},"comparator": "equals","value": "{{module\_api\_name}}"}



Supported modules are system-defined modules such as **Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Meetings, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Appointments, Appointments Rescheduled History,** and **Services.**


#### The "filters" parameter with "Custom Module" value

- _**"api\_name": "module"**_



To filter available custom module-specific APIs.



The “ **filters**” parameter structure should be:



{"field": {"api\_name": "module"},"comparator": "equals","value": "custom"}



**Supported value:** custom


**Module-specific notes**

- You can specify only the **system-defined** modules.

**Custom module-specific notes**

- The system does not allow directly specifying actual custom module names in the " **value**" key. Instead, use the value **"custom"**. The system will list the available APIs related to custom modules.

The response for a custom module API endpoint looks like : **/crm/{{version}}/{{module}}/actions/add\_tags**. For more samples, refer to the [sample response](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html#method:~:text=Contact%20support%20team.-,Sample%20Response,-%7B%0A%20%20%20%20%22__apis%22) of the custom module.

#### Sample request using the "filters" parameter to fetch "module" specific APIs

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/__apis?filters=%7B%22field%22%3A%20%7B%22api_name%22%3A%20%22operation_types.method%22%7D%2C%22comparator%22%3A%20%22equals%22%2C%22value%22%3A%20%22POST%22%7D"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "__apis": [\
        {\
            "path": "/crm/v7/Leads/{{id}}/actions/merge",\
            "operation_types": [\
                {\
                    "method": "GET",\
                    "oauth_scope": "ZohoCRM.modules.leads.READ",\
                    "max_credits": 1,\
                    "min_credits": 1\
                },\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.modules.leads.CREATE",\
                    "max_credits": 50,\
                    "min_credits": 50\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/Leads/{{id}}/actions/download_fields_attachment",\
            "operation_types": [\
                {\
                    "method": "GET",\
                    "oauth_scope": "ZohoCRM.modules.leads.READ",\
                    "max_credits": 1,\
                    "min_credits": 1\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/Leads/{{id}}/__emails_sharing_details",\
            "operation_types": [\
                {\
                    "method": "GET",\
                    "oauth_scope": "ZohoCRM.modules.leads.READ",\
                    "max_credits": 1,\
                    "min_credits": 1\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/Leads/actions/add_tags",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.modules.leads.UPDATE",\
                    "max_credits": 50,\
                    "min_credits": 1\
                }\
            ]\
        },\
        .\
        .\
        .\
\
    ]
}
```

Show full

Show less

#### Sample request using the "filters" parameter to fetch "Custom Module" related APIs

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/__apis?filters=%7B%22field%22%3A%20%7B%22api_name%22%3A%20%22operation_types.method%22%7D%2C%22comparator%22%3A%20%22equals%22%2C%22value%22%3A%20%22POST%22%7D"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- \_\_apisJSON array



Contains the details of supported APIs for each endpoint up to the specified API version in the request URL.



  - pathstring



    Represents the API endpoint for the specified API version in the request URL.

  - operation\_typesstring



    Represents the allowed operations on a specific path.



    - methodstring



      Represents the request method.

    - oauth\_scopestring



      Represents the OAuth scope required to perform this operation.

    - max\_creditsinteger



      Represents the maximum credits that the API consumes.

    - min\_creditsinteger



      Represents the minimum credits that the API consumes.

#### Possible Errors

- INVALID\_DATAHTTP 400



- Invalid JSON passed as parameter

**Resolution:** Specify a valid JSON to the filters parameter. Refer to the [Parameter sections](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html#parameter1) above.
- The given api\_name seems to be invalid

**Resolution:** Specify a valid input. Possible values are operation\_types.oauth\_scope, operation\_types.method, and module.
- The given value is invalid given in the "value" key

**Resolutions:** Specify a valid value.
  - For the _**"api\_name" : "operation\_types.oauth\_scope"**_, the values can be **modules, settings, share, change\_owner, mass\_update, mass\_delete, mass\_convert, and so on.**
  - For the _**"api\_name" : "operation\_types.method"**_, the values can be **GET, POST, PUT, PATCH,** and **DELETE**.
  - For the _**"api\_name" : "module"**_, the values should be the system-defined modules such as **Leads, Contacts, Accounts, and so on.** Refer to the [Parameter sections](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html#parameter1) above.
  - For **custom module**, the value should be **custom**.
- The given comparator is not supported

**Resolution:** Supported comparator is **equals.**
- The given method value is not supported

**Resolution:** The given method value is **case-sensitive**. Supported methods are **GET, POST, PUT, PATCH,** and **DELETE**.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



Dependent Field missing

**Resolution:** Specify the dependent fields for the filter parameter. Refer to the [Parameter sections](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html#parameter1) above.

- MANDATORY\_NOT\_FOUNDHTTP 400



One ore more mandatory keys are missing in the parameter value

**Resolution:** Specify all mandatory fields. Refer to the [Parameter sections](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html#parameter1) above.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to retrieve supported APIs. Create a new token with valid scope. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "__apis": [\
        {\
            "path": "/crm/v7/{{module}}/actions/add_tags",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.modules.custom.UPDATE",\
                    "max_credits": 50,\
                    "min_credits": 1\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/{{module}}/{{id}}/Locking_Information__s/{{id}}",\
            "operation_types": [\
                {\
                    "method": "GET",\
                    "oauth_scope": "ZohoCRM.modules.custom.READ",\
                    "max_credits": 1,\
                    "min_credits": 1\
                },\
                {\
                    "method": "PUT",\
                    "oauth_scope": "ZohoCRM.modules.custom.UPDATE",\
                    "max_credits": 1,\
                    "min_credits": 1\
                },\
                {\
                    "method": "DELETE",\
                    "oauth_scope": "ZohoCRM.modules.custom.DELETE",\
                    "max_credits": 1,\
                    "min_credits": 1\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/{{module}}/{{id}}/actions/remove_territories",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.modules.custom.UPDATE",\
                    "max_credits": 1,\
                    "min_credits": 1\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/{{module}}/upsert",\
            "operation_types": [\
                {\
                    "method": "POST",\
                    "oauth_scope": "ZohoCRM.modules.custom.CREATE",\
                    "max_credits": 10,\
                    "min_credits": 1\
                }\
            ]\
        },\
        {\
            "path": "/crm/v7/{{module}}/deleted",\
            "operation_types": [\
                {\
                    "method": "GET",\
                    "oauth_scope": "ZohoCRM.modules.custom.READ",\
                    "max_credits": 2,\
                    "min_credits": 2\
                }\
            ]\
        },\
        .\
        .\
        .\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)