
# Child Territories of a Territory

#### Purpose

To retrieve the details of child territories of your territory.

#### Endpoints

[GET /settings/territories/{territoryid}/\_\_child\_territories](https://www.zoho.com/crm/developer/docs/api/v7/get-child-territories.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/territories/{territoryid}/\_\_child\_territories

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.territories.{operation\_type}

#### Possible operation types

ALL - Full access to territories data

READ - Read territories data

#### Parameters

- **filters**

Filters parameter can be used to retrieve the details of the child territory that you are searching for.

eg:?filters={"field": {"api\_name" : "manager.id"},"value":"431581000000278001" ,"comparator": "equal"}

This can be used to find the territories whose manager is J Smith (whose user id is 431581000000278001 )

**Keys and comparators**



- **Keys** reporting\_to.id, manager.id, id, permission\_type, created\_by, modified\_by

**Comparators** equal, not\_equal
- **Key** name

**Comparators** equal, not\_equal, ends\_with, starts\_with, contains, not\_contains
- **Keys** created\_time, modified\_time

**Comparators** less\_equal, between, greater\_than, less\_than, equal

- **page**integer, optional



To get the list of records from the respective pages. Default value for page is **1**.

**Possible values:** Positive Integer values only.

- **per\_page**integer, optional



To get the list of records available per page. The default and the maximum possible value is **200**.

**Possible values:** Positive Integer values only.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/territories/431581000000744159/__child_territories"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- created\_timestring



Represents the date and time at which the current territory was created.

- managerJSON object



Represents the name and ID of the current territory's manager.

- account\_rule\_criteria JSON Object



Represents the criteria for account module territory rules(comparator,field and value)

- descriptionstring



Represents the description of the territory, if any.

- lead\_rule\_criteria JSON Object



Represents the criteria for lead module territory rules(comparator,field and value)

- reporting\_tostring



Represents the unique ID of the parent territory.

- deal\_rule\_criteria JSON Object



Represents the criteria for deal module territory rules(comparator,field and value)

- permission\_type string



Represents the type of permission for the territory. Possible values are read\_only and read\_write\_delete.

- modified\_timestring



Represents the date and time at which the current territory was last modified.

- namestring



Represents the name of the territory.

- modified\_byJSON object



Represents the name and ID of the user who last modified the current territory.

- idstring



Represents the unique ID of the territory.


#### Possible Errors

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read territories

**Resolution:** The user does not have the permission to retrieve territories data. Contact your system administrator.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.territories.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read territories data. Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.


#### Sample Response

``` json
Copied       {
    "territories": [\
        {\
            "created_time": "2023-06-10T12:28:06+05:30",\
            "manager": {\
                "name": "Patricia Boyle",\
                "id": "431581000000258001"\
            },\
            "account_rule_criteria": {\
                "comparator": "equal",\
                "field": {\
                    "api_name": "Industry",\
                    "id": "431581000000000621"\
                },\
                "value": "Consulting"\
            },\
            "description": null,\
            "lead_rule_criteria": null,\
            "reporting_to": {\
                "name": "Parent",\
                "id": "431581000000744159"\
            },\
            "deal_rule_criteria": null,\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "431581000000258001"\
            },\
            "permission_type": "read_only",\
            "modified_time": "2023-06-10T12:28:31+05:30",\
            "name": "Child",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "431581000000258001"\
            },\
            "id": "431581000000744169"\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 1,
        "page": 1,
        "more_records": false
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-child-territories.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)