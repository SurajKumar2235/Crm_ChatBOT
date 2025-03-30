
# Disassociate Users from Territory

#### Purpose

To disassociate users from a territory in your organization.

#### Endpoints

[DELETE/settings/territories/{territoryid}/users](https://www.zoho.com/crm/developer/docs/api/v7/disassociate-users-territory.html)

[DELETE settings/territories/{territoryid}/users/{userid}](https://www.zoho.com/crm/developer/docs/api/v7/disassociate-users-territory.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/territories/{territoryid}/users/{userid}

or {api-domain}/crm/{version}/settings/territories/{territoryid}/users

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.territories.All

(or)

scope=ZohoCRM.settings.territories.DELETE (and) ZohoCRM.users.All

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/territories/431581000000744113/users?ids=431581000000258001"
-X DELETE
x-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Parameters

- ids



Represents the unique ID of the user you want to disassociate from the territory.This can be obtained from [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html)


**Note**

A single user can be disassociated from the territory through the URL. You can disassociate single/multiple single users through the parameter **ids**

#### Sample Response

``` json
Copied{
    "users": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "431581000000258001"\
            },\
            "message": "Given User Removed from the mentioned territory Successfully",\
            "status": "success"\
        }\
    ]
}
```

#### Possible Errors

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_DATAHTTP 400



The ser is not a member of this territory.

**Resolution:** Try to remove the users who is a part of the territory.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.


© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/disassociate-users-territory.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)