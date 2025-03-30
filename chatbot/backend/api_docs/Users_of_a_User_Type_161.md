
# Get Users of a User Type

#### Purpose

To get the list of users available in a user type of a portal.

#### Endpoints

[GET /crm/{version}/settings/portals/{portal\_name}/user\_type/{user\_type\_id}/users](https://www.zoho.com/crm/developer/docs/api/v7/get-users-user-type.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/portals/{portal\_name}/user\_type/{user\_type\_id}/users

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.clientportal.ALL

(or)

Scope=ZohoCRM.settings.clientportal.READ

##### Parameters

- typestring, mandatory



The type of user such as **AllUsers**, **AllActiveUsers**, **ActiveUsers**, **DeactiveUsers**, **NotConfirmedUsers**, **ConfirmedUsers**, and **ActiveConfirmedUsers**.

- filtersJSON object, encoded, optional



To filter based on the value **disabled on updation of email** of the **status\_reason\_\_s** field in the Users module. The allowed comparators are **equal** and **not\_equal**. Note that you must encode this JSON object.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/portals/PortalsAPItest200/user_type/3652397000006231003/users?type=NotConfirmedUsers&filters=%5B%7B%22field%22%3A%22status_reason__s%22%2C%22value%22%3A%22disabled%20on%20updation%20of%20email%22%2C%22comparator%22%3A%22not_equal%22%7D%5D"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.03xxxxxxxxxxxxxxxxxa5317.dxxxxxxxxxxxxxxxxxfa"
```

#### Response JSON

- personality\_id



The ID of the module for which the portal was created.

- confirm



Represents whether the user is confirmed or not.

- status\_reason\_\_s



The reason why the user is disabled.

- invited\_time



Date and time in the ISO8601 format on which the user was invited to the portal.

- module



The API name of the module for which the user type was created.

- name



The full name of the contact you want to fetch the user type of.

- active



Represents whether the user type is active or not.

- email



The email ID of the contact of that user type.


#### Possible Errors

- PATTERN\_NOT\_MATCHEDHTTP 400



The value for the "type" parameter is invalid.

**Resolution:** The "type" parameter can only take one of the following values:

**AllUsers**, **AllActiveUsers**, **ActiveUsers**, **DeactiveUsers**, **NotConfirmedUsers**, **ConfirmedUsers**, and **ActiveConfirmedUsers**.

- NO\_PERMISSIONHTTP 403



You do not have permission to the portal.

**Resolutions** Contact your administrator.


#### Sample Response

``` json
Copied{
    "users": [\
        {\
            "personality_id": "3652397000009883004",\
            "confirm": false,\
            "status_reason__s": null,\
            "invited_time": "2022-12-07T16:41:05+05:30",\
            "module": "Contacts",\
            "name": "Prince Brian",\
            "active": true,\
            "email": "p.brian@zylker.com"\
        },\
        {\
            "personality_id": "3652397000007603014",\
            "confirm": false,\
            "status_reason__s": null,\
            "invited_time": "2022-12-07T16:41:04+05:30",\
            "module": "Contacts",\
            "name": "Paul Daly",\
            "active": true,\
            "email": "p.daly@zylker.com"\
        },\
        {\
            "personality_id": "3652397000000649013",\
            "confirm": false,\
            "status_reason__s": null,\
            "invited_time": "2022-12-07T16:41:04+05:30",\
            "module": "Contacts",\
            "name": "Patricia Boyle",\
            "active": true,\
            "email": "p.boyle@abc.com"\
        },\
        {\
            "personality_id": "3652397000000269089",\
            "confirm": false,\
            "status_reason__s": null,\
            "invited_time": "2021-11-25T16:14:56+05:30",\
            "module": "Contacts",\
            "name": "Carissa Batman",\
            "active": true,\
            "email": "carissa-batman@yahoo.com"\
        }\
    ],
    "info": {
        "per_page": 200,
        "total_count": 4,
        "count": 4,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-users-user-type.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)