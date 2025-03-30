
# Get Assignment Rules

#### Purpose

To fetch the assignment rules in your org.

#### Endpoints

[GET /settings/automation/assignment\_rules](https://www.zoho.com/crm/developer/docs/api/v7/get-assignment-rules.html)

[GET /settings/automation/assignment\_rules/{rule\_id}?module={module\_API\_name}](https://www.zoho.com/crm/developer/docs/api/v7/get-assignment-rules.html)

### Request Details

#### Request URL

**All** \- {api-domain}/crm/{version}/settings/automation/assignment\_rules

**Specific** \- {api-domain}/crm/{version}/settings/automation/assignment\_rules/{rule\_id}

##### Supported modules

Leads, Accounts, Contacts, Deals, and Custom

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

scope=ZohoCRM.settings.assignment\_rules.{{operation-type}}

#### Possible operation types

ALL - Full access to data

READ - Get data from the module

##### Parameters

- modulestring



The API name of the module you want to fetch the assignment rule from. Supported modules are Leads, Contacts, Accounts, Deals, and Custom. This parameter is mandatory when you fetch a specific assignment rule.


#### Possible Errors

- INVALID\_REQUEST\_METHODHTTP 400



The request method specified is invalid.

**Resolution:** Specify the request method as GET.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** Include the **module** parameter in the request when you fetch a specific assignment rule.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



The token does not have the scope ZohoCRM.settings.ALL.

**Resolution:** Create a token with the scope ZohoCRM.settings.ALL.

- NO\_PERMISSIONHTTP 403



You do not have the permission to read the assignment rules.

**Resolution:** Contact your administrator.

- INVALID\_URL\_PATTERNHTTP 404



The request URL has syntactical errors.

**Resolution:** Correct the syntactical errors in the request URL.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/automation/assignment_rules"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "assignment_rules": [\
        {\
            "created_time": "2020-04-12T00:00:00+05:30",\
            "modified_time": "2021-02-26T12:45:14+05:30",\
            "default_assignee": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "module": {\
                "api_name": "Leads",\
                "id": "3652397000000002175"\
            },\
            "name": "Lead Assignment Rule",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "description": "Assign the Leads to the Owners based on these criteria.",\
            "id": "3652397000002045001",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            }\
        }\
    ]
}

```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-assignment-rules.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)