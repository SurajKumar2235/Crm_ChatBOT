
# Territories of a User

#### Purpose

To get the territories related to a user.

#### Endpoints

[GET /users/{user\_id}/territories](https://www.zoho.com/crm/developer/docs/api/v7/get-user-territories.html)

[GET /users/{user\_id}/territories/{territory\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-user-territories.html)

### Request Details

#### Request URL

**To get all the territories of the user** \- {api-domain}/crm/{version}/users/{id}/territories

**To get a specific territory of the user** \- {api-domain}/crm/{version}/users/{id}/territories/{territory\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.users.{operation\_type}

(or)

scope=ZohoCRM.settings.territories.{operation\_type}

#### Possible operation types

ALL - Full access to the record

READ - Get records from the module

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/users/3652397000000186017/territories"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X GET
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/users/3652397000000186017/territories"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

#### Response JSON Keys in the "info" object (only while fetching all the territories related to the user)

- idstring



Represents the unique ID of the territory that the user is associated to.

- ManagerJSON object



Represents the name and ID of the manager of the territory.

- Namestring



Represents the name of the territory.

- Reporting\_ToJSON object



Represents the name and ID of the parent territory. For the parent territory, this value is null.

- per\_pageinteger



Represents the number of records you can fetch in a single API call. The maximum value is 200.

- countinteger



Represents the number of records fetched in this API call.

- pageinteger



Represents the page number from which the records were fetched. The default value us 1.

- more\_recordsboolean



Represents whether or not there are more records in the module to be fetched.


#### Possible Errors

- INVALID\_DATAHTTP 400



You have specified an invalid ID for either the user, territory or both.

**Resolution:** The resource\_path\_index int he response gives you the position of the invalid ID in the request. Specify a valid ID.


#### Sample Response

``` json
Copied{
    "territories": [\
        {\
            "id": "3652397000000715341",\
            "Manager": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Name": "USA",\
            "Reporting_To": null\
        },\
        {\
            "id": "3652397000007612003",\
            "Manager": {\
                "name": "Jane Smith",\
                "id": "3652397000000281001"\
            },\
            "Name": "Texas",\
            "Reporting_To": {\
                "id": "3652397000000715341",\
                "Name": "USA"\
            }\
        },\
        {\
            "id": "3652397000007612015",\
            "Manager": {\
                "name": "Jane Smith",\
                "id": "3652397000000281001"\
            },\
            "Name": "Washington",\
            "Reporting_To": {\
                "id": "3652397000000715341",\
                "Name": "USA"\
            }\
        },\
        {\
            "id": "3652397000007622003",\
            "Manager": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Name": "New York",\
            "Reporting_To": {\
                "id": "3652397000000715341",\
                "Name": "USA"\
            }\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 4,
        "page": 1,
        "more_records": false
    }
}

```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-user-territories.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)