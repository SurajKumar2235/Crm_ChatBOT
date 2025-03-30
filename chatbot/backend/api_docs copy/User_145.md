
# Add User

#### Purpose

To add a user to your organization.

#### Endpoints

[POST /users](https://www.zoho.com/crm/developer/docs/api/v7/add-user.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/users

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.users.{operation\_type}

#### Possible operation types

ALL - Full access to users

CREATE - To create users

**Note**

- You can add **only one** user per POST request.
- Adding a CRM Plus user through API is not supported. You can only add a CRM Plus user through the UI.
- You must use only Field API names in the input. You can obtain the field API names from [Fields metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) (the value for the key “api\_name” for every field).

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/users"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@newuser.json"
-X POST

```

``` deluge
Copieduser1 = Map();
user1.put("last_name", "Shawn");
user1.put("email", "shawn@zylker.com");
user1.put("role", "692969000000015969");
user1.put("profile", "692969000000015972");

users = List();
users.add(user1);

params = Map();
params.put("users", users);

response = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/users"\
	type: POST\
	parameters: params.toString()\
	connection:"crm_connection"\
];
info response ;
```

Show full

Show less

In the request, "@newuser.json" contains the sample input data.

##### Request JSON

- first\_namestring, mandatory



Specify the first name of the user.

- emailstring, mandatory



Specify the email ID of the user.

- rolestring, mandatory



Specify the unique ID of the role you want to assign the user with. You can obtain the role ID from the [Roles API](https://www.zoho.com/crm/developer/docs/api/v7/get-roles.html).

- profilestring, mandatory



Specify the unique ID of the profile you want to assign the user with, to decide the user's level of access to CRM data. You can obtain the profile ID from the [Profiles API](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html).


Refer to [Add Records API](https://www.zoho.com/crm/developer/docs/api/v7/insert-records.html) to know about the field types and limitations.

#### Sample Input

``` json
Copied{
  "users": [\
    {\
      "role": "554023000000015969",\
      "first_name": "Patricia",\
      "email": "Patricia@abcl.com",\
      "profile": "554023000000015975",\
      "last_name": "Boyle",\
      "name_format__s":"Salutation,First Name,Last Name",\
      "sort_order_preference__s": "First Name,Last Name"\
    }\
  ]
}
```

#### Possible Errors

- INVALID\_REQUESTHTTP 400



Cannot add user under CRM Plus account. Kindly use CRMPlus URL to add user.

**Resolution:** Adding a CRM Plus user through API is not supported. You can only add a CRM Plus user through the UI. Refer to the note section above.

- LICENSE\_LIMIT\_EXCEEDEDHTTP 400



Request exceeds your license limit. Need to upgrade in order to add.

**Resolution:** The maximum number of users you can add per your CRM plan has exceeded. Please buy additional user licenses to add more users.

- DUPLICATE\_DATAHTTP 400



Failed to add user since same email id is already present

**Resolution:** You have entered a duplicate value for the email\_id. Make sure you give unique values for the email\_id and last\_name fields.

- MANDATORY\_NOT\_FOUNDHTTP 400



Last Name is required

**Resolution:** You have not specified one of the mandatory keys. Refer to request JSON section above.

- INVALID\_DATAHTTP 400



Invalid data. Valid values are comma/space/period/none.

**Resolution:** The key value specified is invalid. It can contain only the above mentioned special characters.

- INVALID\_DATAHTTP 400



This user cannot be added as they have rejected invitation sent

**Resolution:** You cannot add a user that has rejected the invitation to be added to your org.

- FORBIDDENHTTP 403



Permission denied

**Resolution:** Only the users with user profile is "administrator" can add new users. Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.users.CREATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to create

**Resolution:** The user does not have permission to create user records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to add new users

**Resolution:** The user does not have the permission to add users. Contact your system administrator.


#### Sample Response

``` json
Copied{
  "users": [\
    {\
      "code": "SUCCESS",\
      "details": {\
        "id": "554023000000691003"\
      },\
      "message": "User added",\
      "status": "success"\
    }\
  ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/add-user.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)