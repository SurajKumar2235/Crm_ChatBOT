

# Get Users' Unavailability

#### Purpose

To get the details of a user's unavailability. Admin users can get the details of all users, whereas non-admin users can get only the details of their own records.

#### Endpoints

[GET /settings/users\_unavailability](https://www.zoho.com/crm/developer/docs/api/v7/get-user-unavailability.html)

[GET /settings/users\_unavailability/{id}](https://www.zoho.com/crm/developer/docs/api/v7/get-user-unavailability.html)

### Request Details

#### Request URL

**All** \- {api-domain}/crm/{version}/settings/users\_unavailability

**Specific** \- {api-domain}/crm/{version}/settings/users\_unavailability/{id}

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

scope=ZohoCRM.settings.users\_unavailability.ALL

(or)

scope=ZohoCRM.settings.users\_unavailability.READ

##### Parameters

- group\_idsstring, optional



The unique ID of the group that the user belongs to. To get the users from multiple groups, input their group IDs as comma-separated values. Example: group\_ids=111999xxx0000,111xxxxx889966.

- role\_idsstring, optional



The unique ID of the role that the user belongs to. To get the users from multiple roles, input their role IDs as comma-separated values. Example: role\_ids=4678xxx0000,5678xxxxx966.

- territory\_idsstring, optional



The unique ID of the territory that the user is a part of. To get the users belonging to multiple territories, input their territory IDs as comma-separated values. Example: territory\_ids=3546xxx0000,4657xxxxx966.

- include\_inner\_detailsstring, optional



Use this parameter with the value **user.zuid** to get the user's ZUID in the response.

- filtersJSON object, optional



The criteria to filter the users based on the time period they will be unavailable. You can filter based on groups and comparators as follows:

**group** \- Contains the **comparator**, **value** and the API name of the **field** based on which you want to filter the results. The allowed comparators are **equals**, **not\_equals**, **between**, **greater\_than**, **greater\_equal**, **less\_than**, and **less\_equal**.

**group\_operator** \- The operator **and** or **or**.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/users_unavailability?filters={"comparator":"equal","field":{"api_name":"to"},"value":"2021-02-18T03:30:00-11:00"}&include_inner_details=user.zuid"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X GET
```

#### Response JSON Keys

- commentsstring



The comment that the users added while marking themselves unavailable.

- fromstring



The date and time in the ISO8601 format that the user will be unavailable from.

- tostring



The date and time in the ISO8601 format that the user will be unavailable to.

- idstring



The unique ID of the record.

- userJSON object



The name and ID of the user whose unavailability you fetched. If you include the parameter _include\_inner\_details_ in the request, the **zuid** of the user will also be included in this object.

- infoJSON object



Contains **per\_page**(the number of records displayed per page), **page**(the page number of the current response), **count**(the number of records displayed in the response), and **more\_records**(Boolean fields that represents whether there are more records available on other pages).


#### Possible Errors

- NO\_CONTENTHTTP 204



There are no records available.

**Resolution:** Create a record to mark a user's unavailability.

- INVALID\_REQUEST\_METHODHTTP 400



You have used an invalid HTTP method to access this API.

**Resolution:** Use the correct HTTP method.


#### Sample Response

``` json
Copied{
    "users_unavailability": [\
        {\
            "comments": "Unavailable",\
            "from": "2021-02-18T02:30:00-11:00",\
            "id": "554xxx01",\
            "to": "2021-02-18T03:30:00-11:00",\
            "user": {\
                "name": "Patricia Boyle",\
                "id": "554xxx11",\
                "zuid": "56xxx8"\
            }\
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

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-user-unavailability.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)