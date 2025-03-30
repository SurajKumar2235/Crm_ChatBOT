
# Create Role

#### Purpose

To add a new role to your organization.

#### Endpoints

[POST /settings/roles](https://www.zoho.com/crm/developer/docs/api/v7/create-role.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/roles

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.roles.{operation\_type}

#### Possible operation types

ALL - Full access to roles data

CREATE - Create roles data

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/roles"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Request JSON Keys

- namestring, mandatory



Represents the display name of the role.

- reporting\_tostring, optional



Represents the unique ID of the role which is higher to the current role in the role hierarchy.

- descriptionstring, optional



Represents the description of the role, if any.

- share\_with\_peersboolean, optional



Represents if the users with the current role have the permission to share records.

**Possible values** - **true:** The users with the current role can share records with other users.

**false:** The users with the current role cannot share records with other users. This is the default value.


#### Sample Input

``` json
Copied{
    "roles": [\
        {\
            "name": "Product Manager",\
            "reporting_to": "4150868000000225013",\
            "description": "Schedule and manage resources",\
            "share_with_peers": true\
        }\
    ]
}
```

#### Possible Errors

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.roles.CREATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read roles data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read roles

**Resolution:** The user does not have the permission to retrieve roles data. Contact your system administrator.

- INVALID\_DATAHTTP 400



the id given seems to be invalid or already deleted

**Resolution:** The role ID specified in the request input is invalid. Specify valid role ID.

- INVALID\_DATAHTTP 400



Role name should not contain the following special character(s):#

**Resolution:** The role name must not contain any special characters. Specify a valid role name.

- DUPLICATE\_DATAHTTP 400



Failed to add role since role with same name is already exist

**Resolution:** Specify unique role name in the request input.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** Specify the name of the role in the request input.

- LICENSE\_LIMIT\_EXCEEDEDHTTP 400



Request exceeds your license limit

**Resolution:** Contact your administrator.


#### Sample Response

``` json
Copied{
    "roles": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5843104000002870001"\
            },\
            "message": "Role added",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-role.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)