
# Roles APIs

In Zoho CRM, Administrators assign roles to the users. Roles, such as Managers, Sales Reps, Supervisors, Product Management Staff, etc., denote the different levels of employees in a company. Use this API to retrieve information about various roles in Zoho CRM.

### Get Roles

#### Purpose

To retrieve the details about roles in your organization.

#### Endpoints

[GET /settings/roles](https://www.zoho.com/crm/developer/docs/api/v7/get-roles.html)

[GET /settings/roles/{role\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-roles.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/roles

**To get a specific role:**

{api-domain}/crm/{version}/settings/roles/{role\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.roles.{operation\_type}

#### Possible operation types

ALL - Full access to roles data

READ - Retrieve roles data

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/roles/3652397000010189001"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/roles/3652397000010189001"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

- display\_labelstring



Represents the display name of the current role.

- share\_with\_peersboolean



Represents if the users with the current role have the permission to share records.

**Possible Values -** **true:** The users with the current role can share records with other users.

**false:** The users with the current role cannot share records with other users.

- namestring



Represents the name of the current role.

- descriptionstring



Represents the description of the role, if any.

- idstring



Represents the unique ID of the role.

- reporting\_toJSON object



Represents the name and ID of the roles which are higher to the current role in the role hierarchy.

- created\_by\_\_sJSON object



Represents the name and ID of the user that created this role.

- modified\_by\_\_sJSON object



Represents the name and ID of the user who modified this role last.

- created\_time\_\_sDateTime in the ISO8601 format



Represents the date and time at which the role was created.


#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.roles.READ scope. Create a new client with valid scope. Refer to scope section above.

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


#### Sample Response

``` json
Copied{
    "roles": [\
        {\
            "display_label": "SalesRep",\
            "created_by__s": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "modified_by__s": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "forecast_manager": null,\
            "share_with_peers": true,\
            "modified_time__s": "2022-11-10T17:25:02+05:30",\
            "name": "SalesRep",\
            "description": null,\
            "reporting_to": {\
                "name": "Manager",\
                "id": "3652397000000026008"\
            },\
            "id": "3652397000010189001",\
            "created_time__s": "2022-11-10T17:25:02+05:30"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-roles.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)