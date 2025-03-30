
# Change User's Status

#### Purpose

To change the status of a user in the portal.

#### Endpoints

[PUT /settings/portals/{portal\_name}/user\_type/{user\_type\_id}/users/{user\_id}/actions/change\_status](https://www.zoho.com/crm/developer/docs/api/v7/change-user-status-portal.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/portals/{portal\_name}/user\_type/{user\_type\_id}/users/{user\_id}/actions/change\_status

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.clientportal.ALL

(or)

Scope=ZohoCRM.settings.clientportal.UPDATE

#### Parameter

- activeboolean, mandatory



**true** activates the user in the portal, and **false** deactivates the user in the portal.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/portals/ZohoTest17/user_type/1947281000000470169/users/1306462000000665004/actions/change_status?active=false"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X PUT

```

#### Possible Errors

- INVALID\_DATAHTTP 400



The user's record is in the recycle bin. So, you cannot change the status of this user.

- ALREADY\_ACTIVATEDHTTP 400



The user is already active.

- NO\_PERMISSIONHTTP 403



The "Client Portal User" permission is disabled.

**Resolution:** Contact your administrator and set up the "Client Portal User" to transfer the users.

- LIMIT\_EXCEEDEDHTTP 403



You have exceeded the license limit for users in a portal for your org.

**Resolution:** Contact your administrator or support@zohocrm.com to purchase portal user add-on.


#### Sample Response

``` json
Copied{
    "change_status": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "personality_id": "1306462000000665004"\
            },\
            "message": "Status of the user changed successfully.",\
            "status": "success"\
        }\
    ]
}

```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/change-user-status-portal.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)