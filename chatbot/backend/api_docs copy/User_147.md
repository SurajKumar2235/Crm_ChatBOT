
# Delete User

#### Purpose

To delete a user from your organization.

#### Endpoints

[DELETE /users/{user\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-user.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/users/{user\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.users.{operation\_type}

#### Possible operation types

ALL - Full access to users

DELETE - Delete user data

**Note**

- You can delete only one user per request.
- Refer to [Get User API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to obtain the record ID of the user.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/users/554023000000691003"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/users/554023000000691003"\
	type: DELETE\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Possible Errors

- INVALID\_DATAHTTP 400



the\_id\_given\_seems\_to\_be\_invalid

**Resolution:** The record ID of the user you want to delete is invalid. Refer to [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to get valid record IDs.

- INVALID\_REQUESTHTTP 400



Primary contact cannot be deleted

**Resolution:** You cannot delete the primary contact of your organization.

- ID\_ALREADY\_DELETEDHTTP 400



User is already deleted

**Resolution:** The user you want to delete is already deleted.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to delete users

**Resolution:** The user does not have the permission to delete users. Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.users.DELETE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to delete

**Resolution:** The user does not have permission to delete user records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.


#### Sample Response

``` json
Copied{
  "users": [\
    {\
      "code": "SUCCESS",\
      "details": {},\
      "message": "User deleted",\
      "status": "success"\
    }\
  ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-user.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)