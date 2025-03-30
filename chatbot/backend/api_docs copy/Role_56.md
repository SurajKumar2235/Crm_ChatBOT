
# Update Role

#### Purpose

To update the details of a role in your organization.

[PUT /settings/roles](https://www.zoho.com/crm/developer/docs/api/v7/update-role.html)

[PUT /settings/roles/{role\_id}](https://www.zoho.com/crm/developer/docs/api/v7/update-role.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/roles

**To update a specific role:**

{api-domain}/crm/{version}/settings/roles/{role\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.roles.{operation\_type}

#### Possible operation types

ALL - Full access to roles data

UPDATE - Update roles data

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/roles"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Request JSON Keys

- idstring, mandatory if not specified in request URL



Represents the unique ID of the role to be updated.

- namestring, optional



Represents the display name of the role.

- reporting\_tostring, optional



Represents the unique ID of the role which is higher to the current role in the role hierarchy.

- descriptionstring, optional



Represents the description of the role, if any.

- share\_with\_peersboolean, optional



Represents if the users with the current role have the permission to share records.

**Possible values** - **true:** The users with the current role can share records with other users.

**false:** The users with the current role cannot share records with other users.

- forecast\_managerstring, optional



Represents the forecast manager's unique ID. This applies only when forecast management is based on a role hierarchy.


#### Sample Input

``` json
Copied{
  "roles": [\
    {\
      "id": "4150868000000231921",\
      "name": "Sales department Head",\
      "reporting_to": "4150868000000026005",\
      "forecast_manager": "738964000000291009",\
      "description": "Manage the sales department",\
      "share_with_peers": true\
    }\
  ]
}
```

#### Possible Errors

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.roles.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update

**Resolution:** The user does not have permission to update roles data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update roles

**Resolution:** The user does not have the permission to update. Contact your system administrator.

- INVALID\_DATAHTTP 400



the id given seems to be invalid

**Resolution:** The role ID specified in the _reporting\_to_ key is invalid. Specify valid role ID.

- INVALID\_DATAHTTP 400



invalid data

**Resolution:** You can update only a single role through an API call.

- INVALID\_DATAHTTP 400



the given role id seems invalid

**Resolution:** The role ID specified in the request input is invalid or is deleted. Specify valid role ID.

- DUPLICATE\_DATAHTTP 400



Failed to add role since role with same name is already exist

**Resolution:** Specify a unique role name in the request input.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** Specify the unique ID of the role to be updated in the request input.


#### Sample Response

``` json
Copied{
    "code": "SUCCESS",
    "details": {
        "id": "4150868000000231921"
    },
    "message": "Role updated",
    "status": "success"
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-role.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)