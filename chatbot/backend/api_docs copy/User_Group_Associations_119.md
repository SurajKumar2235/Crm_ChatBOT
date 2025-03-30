
# User Groups Associations

#### Purpose

You can associate a user group with sharing rules, workflows, assignment rules, approval and review processes, and email notification criteria. Use this API to find out where a user group is associated.

#### Endpoints

[GET /settings/user\_groups/{user\_group\_ID}/actions/associations](https://www.zoho.com/crm/developer/docs/api/v7/user-groups-associations.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/user\_groups/{user\_group\_ID}/actions/associations

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.user\_groups.ALL/READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/user_groups/3652397000012454002/actions/associations"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON

- type



Represents where the user group is associated. The possible values are data\_sharing, workflow\_rules, assignment\_rules, approval\_process, review\_process, email\_notification, calendar\_bookings.

- resource



The name and ID of the rule that the user group is associated with.

- details



The API name of the module and its ID that the user group is associated to. For example, if the user group is a part of a data sharing rule for the Leads module, this object contains the API name and ID of Leads.


#### Possible Errors

- NO\_CONTENTHTTP 204



There are no user groups in your org.

**Resolution:** Create a user group to be able to view, update or delete.

- INVALID\_DATAHTTP 400



The group ID is invalid.

**Resolution:** Use the [Get User Groups API](https://www.zoho.com/crm/developer/docs/api/v7/get-user-groups.html) to get the ID of the user group.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create a new token with ZohoCRM.settings.user\_groups.ALL or ZohoCRM.settings.user\_groups.GET scopes.

- NO\_PERMISSIONHTTP 403



You do not have permission to view the groups.

**Resolution:** You must have "Manage Groups" permission to view the groups. Contact your system administrator.

- INTERNAL\_SERVER\_ERRORHTTP 500



Unhandled and unexpected exception in server.

**Resolution:** Contact support@zohocrm.com for assistance.


#### Sample Response

``` json
Copied{
    "associations": [\
        {\
            "resource": {\
                "name": "lead sharing",\
                "id": "3652397000012454068"\
            },\
            "details": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "3652397000000002175"\
                }\
            },\
            "type": "data_sharing"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/user-groups-associations.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)