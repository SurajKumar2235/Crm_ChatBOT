
# Delete a User Group

#### Purpose

To delete a user group.

#### Endpoints

[DELETE /settings/user\_groups/{user\_group\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-user-group.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/user\_groups/{user\_group\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.user\_groups.DELETE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/user_groups/3652397000009949005"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The group ID is incorrect.

**Resolution:** Specify a valid group ID. Use the [Get User Groups API](https://www.zoho.com/crm/developer/docs/api/v7/get-user-groups.html) to get the ID of the user group.


#### Sample Response

``` json
Copied{
    "user_groups": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000009949005"\
            },\
            "message": "Group deleted",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-user-group.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)