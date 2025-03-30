
# Get Sources Count

#### Purpose

To get the number of users, groups, roles, and territories available in a user group.

#### Endpoints

[GET /settings/user\_groups/{groupid}/actions/sources\_count](https://www.zoho.com/crm/developer/docs/api/v7/get-sources-count.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/user\_groups/{groupid}/actions/sources\_count

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.user\_groups.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/user_groups/3652397000009952001/actions/sources_count"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.03xxxxxxxxxxxxxxxxxa5317.dxxxxxxxxxxxxxxxxxfa"
```

#### Response JSON Keys

- usersJSON Object



The number of active, inactive and deleted users in this group.

- rolesinteger



The number of roles present in this group.

- territoriesinteger



The number of territories present in this group.

- groupsinteger



The number of groups present in this user group.


#### Possible Errors

- INVALID\_DATAHTTP 400



The group Id is incorrect in the URL.

**Resolution:** Specify a valid group ID. Use the [Get User Groups API](https://www.zoho.com/crm/developer/docs/api/v7/get-user-groups.html) to get the ID of the user group.


#### Sample Response

``` json
Copied{
    "sources_count": [\
        {\
            "territories": 2,\
            "roles": 2,\
            "groups": 0,\
            "users": {\
                "inactive": 0,\
                "deleted": 0,\
                "active": 2\
            }\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-sources-count.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)