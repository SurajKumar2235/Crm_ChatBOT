
# Transfer Users and Delete Role

#### Purpose

To delete a role and transfer the users to a new role in your organization.

[DELETE /settings/roles/{role\_id}](https://www.zoho.com/crm/developer/docs/api/v7/transfer-users-and-delete-role.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/roles/{role\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.roles.{operation\_type}

#### Possible operation types

ALL - Full access to roles data

DELETE - Delete roles data

#### Parameters

- transfer\_to\_idstring, mandatory



Specify the unique ID of the role to which the users must be transferred to.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/roles/4150868000005435016?transfer_to_id=4150868000000026005"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.roles.DELETE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to delete

**Resolution:** The user does not have permission to delete roles data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 401



User does not have sufficient privilege to delete roles

**Resolution:** The user does not have the permission to delete. Contact your system administrator.

- INVALID\_DATAHTTP 400



the id given seems to be invalid

**Resolution:** The role ID specified in the request URL is invalid. Specify valid role ID.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** Specify the _transfer\_to\_id_ parameter in the request input.

- UNABLE\_TO\_PARSE\_DATA\_TYPEHTTP 400



either the request body or parameters is in wrong format

**Resolution:** The value specified in the _transfer\_to\_id_ is in the wrong format. Refer to sample in the right pane and specify valid input.


#### Sample Response

``` json
Copied{
    "code": "SUCCESS",
    "details": {
        "id": "4150868000005435016"
    },
    "message": "Role Deleted",
    "status": "success"
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/transfer-users-and-delete-role.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)