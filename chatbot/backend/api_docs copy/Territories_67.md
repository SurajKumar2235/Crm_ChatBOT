
# Territories API

Territory management helps you segregate CRM records based on customer attributes such as geography, company size, or industry. This makes it easy to share the relevant records with the right members of your sales team. Territory management allows you to automatically associate Accounts, Contacts, and Deals with territories to maximize revenue.

**Note**

Users with Administrator profile can enable this feature in CRM UI.

#### Key Benefits

- **Avoid complex data-sharing structure** \- Organizations with complex sales structures can use territories to easily share records with users in different teams. It is also convenient to group records based on the account's characteristics rather than the individual ownership of the records.

- **Provide a focused work environment** \- Distribution of customer accounts by using territories help in creating focused work environments that ensures better sales force engagement. It also increases the sales teams' efficiency by reducing the travel time and increasing the industry expertise.

- **Get an accurate evaluation of the sales team's performance** \- Generate sales reports based on territories to evaluate and measure the efficiency of sales teams by territory. Also, get a better insight into the sales contribution of each territory.

- **Forecast sales for each territory and set clear goals** \- Create separate forecast targets for each territory a user belongs to. This will give a clear picture of the goals set for the different territories for users to stay focused.


Refer to [Use Territories](https://help.zoho.com/portal/en/kb/crm/users-and-control/territory-management/articles/use-territories) to learn more about territory management.

### Territories API

#### Purpose

To get the list of territories enabled for your organization.

#### Endpoints

[GET /settings/territories](https://www.zoho.com/crm/developer/docs/api/v7/territories.html)

[GET /settings/territories/{territoryid}](https://www.zoho.com/crm/developer/docs/api/v7/territories.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/territories

{api-domain}/crm/{version}/settings/territories/{territoryid}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.territories.{operation\_type}

#### Possible operation types

ALL - Full access to territories data

READ - Read territories data

#### Parameters

- **filters**

Filters parameter can be used to retrieve the territories details that you are searching for.

eg:?filters={"field": {"api\_name" : "manager.id"},"value":"431581000000278001" ,"comparator": "equal"}

This can be used to find the territories whose manager is J Smith (whose user id is 431581000000278001 )





**Note**



Encode the value of the **filters** parameter before sending a request.





- **Keys** reporting\_to.id, manager.id, id, permission\_type, created\_by, modified\_by

**Comparators** equal, not\_equal
- **Key** name

**Comparators** equal, not\_equal, ends\_with, starts\_with, contains, not\_contains
- **Keys** created\_time, modified\_time

**Comparators** less\_equal, between, greater\_than, less\_than, equal

- **ids**integer, optional



Represents the unique ID of the territory to retrieve.

- **page**integer, optional



To get the list of records from the respective pages. Default value for page is **1**.

**Possible values:** Positive Integer values only.

- **per\_page**integer, optional



To get the list of records available per page. The default and the maximum possible value is **2000**.

**Possible values:** Positive Integer values only.

- **include**string, optional



Represents the criteria rule applied in the territories, if any.



**Possible Values :**



- **lead\_rule\_criteria -** To retrieve the criteria rule used in the **Leads** module.
- **account\_rule\_criteria -** To retrieve the criteria rule used in the **Accounts** module.
- **deal\_rule\_criteria -** To retrieve the criteria rule used in the **Deals** module.

**Note**

To fetch records from a territory-supported module, use the parameters "territory\_id" and "include\_child" in the request. Refer to [Get List of Records](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) for more details.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/territories"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X GET
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/territories"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
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



Represents the unique ID of the parent territory, if any.

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


**Note**

If deal rule or lead rule is not enabled for your org then the key won't be present in the response

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
Copied{
    "territories": [\
        {\
            "created_time": "2024-07-09T20:50:29+05:30",\
            "permission_type": "read_only",\
            "modified_time": "2024-07-09T20:50:29+05:30",\
            "manager": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "api_name": "zoho",\
            "name": "zoho",\
            "modified_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "description": "Organization Parent Territory",\
            "id": "2276164000001054020",\
            "reporting_to": null,\
            "created_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            }\
        },\
        {\
            "created_time": "2024-07-09T20:50:32+05:30",\
            "permission_type": "read_write_delete",\
            "modified_time": "2024-07-09T23:29:13+05:30",\
            "manager": null,\
            "api_name": "CEO",\
            "name": "CEO",\
            "modified_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "description": "Users with this role have access to the data owned by all other users.",\
            "id": "2276164000001054022",\
            "reporting_to": {\
                "name": "zoho",\
                "id": "2276164000001054020"\
            },\
            "created_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            }\
        },\
        {\
            "created_time": "2024-07-09T20:50:33+05:30",\
            "permission_type": "read_only",\
            "modified_time": "2024-07-09T20:50:33+05:30",\
            "manager": null,\
            "api_name": "China",\
            "name": "China",\
            "modified_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "description": "Users belonging to this role cannot see data for admin users.",\
            "id": "2276164000001054024",\
            "reporting_to": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "created_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            }\
        },\
        {\
            "created_time": "2024-07-09T23:21:22+05:30",\
            "permission_type": "read_only",\
            "modified_time": "2024-07-09T23:21:22+05:30",\
            "manager": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "api_name": "India",\
            "name": "India",\
            "modified_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "description": "test",\
            "id": "2276164000001054258",\
            "reporting_to": {\
                "name": "Manager",\
                "id": "2276164000001054024"\
            },\
            "created_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            }\
        },\
        {\
            "created_time": "2024-07-10T13:14:35+05:30",\
            "permission_type": "read_write_delete",\
            "modified_time": "2024-07-10T13:14:35+05:30",\
            "manager": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "api_name": "USA",\
            "name": "USA",\
            "modified_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "description": "",\
            "id": "2276164000001064032",\
            "reporting_to": {\
                "name": "zoho",\
                "id": "2276164000001054020"\
            },\
            "created_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            }\
        }\
    ],
    "info": {
        "per_page": 2000,
        "count": 5,
        "page": 1,
        "more_records": false
    }
}

```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/territories.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)