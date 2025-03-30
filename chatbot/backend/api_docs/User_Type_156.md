
# Delete a User Type

#### Purpose

To delete the user type from a portal.

#### Endpoints

[DELETE /settings/portals/{portal\_name}/user\_type/{user\_type\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-user-type.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/portals/{portal\_name}/user\_type/{user\_type\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.clientportal.ALL

(or)

Scope=ZohoCRM.settings.clientportal.DELETE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/portals/ZohoTest17/user_type/1947281000000470169"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The user type has users.

**Resolution:** You can delete a user type only after transferring the users to another user type. Refer to the [Transfer users and delete user type](https://www.zoho.com/crm/developer/docs/api/v7/transfer-users-del-user-type.html) API.

- NO\_PERMISSIONHTTP 403



The "Manage Portal" permission is disabled.

**Resolution:** Contact your administrator and set up the "Manage Portal" permission to be able to delete a user type from the portal.


#### Sample Response

``` json
Copied{
    "user_type": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": 1947281000000470169\
            },\
            "message": "Portal user type deleted successfully.",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-user-type.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)