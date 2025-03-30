
# Update User

#### Purpose

To update the details of a user of your organization.

#### Endpoints

[PUT /users](https://www.zoho.com/crm/developer/docs/api/v7/update-user.html)

[PUT /users/{user\_id}](https://www.zoho.com/crm/developer/docs/api/v7/update-user.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/users

**To update a specific user**

{api-domain}/crm/{version}/users/{user\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.users.{operation\_type}

#### Possible operation types

ALL - Full access to users

UPDATE - Update user data

**Note**

You can update only one user's details per PUT request.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/users"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@updateuser.json"
-X PUT

```

``` deluge
Copieduser1 = Map();
user1.put("id", "692969000000282009");
user1.put("last_name", "B");

users_list = List();
users_list.add(user1);

params = Map();
params.put("users", users_list);

response = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/users"\
	type: PUT\
	parameters: params.toString()\
	connection:"crm_connection"\
];
info response ;
```

Show full

Show less

In the request, "@updateuser.json" contains the sample input data.

##### Request JSON

- idstring, mandatory



Specify the record ID of the user you want to update.


**Note**

- You can also pass the record ID in the request. Example: {api-domain}/crm/v7/users/{record\_id}
- Refer to [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to obtain the record ID of the user.
- You cannot update a deactivated user.
- You cannot deactivate the primary contact of your organization. To deactivate the primary contact, you must assign another user as the new primary contact of your organization and then deactivate the old primary contact.
- To activate or deactivate a user, use the key **status** in the input with the value as either **active** or **inactive**, respectively.
- You cannot change the time zone of another user. You can only change the time zone of your own user record. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the values of the key "time\_zone".
- You must use only Field API names in the input. You can obtain the field API names from [Fields metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) (the value for the key “api\_name” for every field).
- Refer to [Insert Records API](https://www.zoho.com/crm/developer/docs/api/v7/insert-records.html) to know about the field types and their limitations.

#### Sample Input

``` json
Copied{
  "users": [\
    {\
      "id": "554023000000691003",\
      "phone": "123456789",\
      "dob": "1990-12-31",\
      "role":"79234000000031154",\
      "profile":"79234000000031157",\
      "country_locale": "en_US",\
      "time_format": "HH:mm",\
      "time_zone": "US/Samoa",\
      "name_format__s": "Salutation,First Name,Last Name",\
      "sort_order_preference__s": "First Name,Last Name"\
    }\
  ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 415



- You are trying to update the time\_zone of another user

.

- Unclosed Script tags found in signature.
- The input for either "sort\_order\_preference\_\_s" or "name\_format\_\_s" is incorrect.

**Resolutions:**

- You cannot update the time zone of another user.
- Specify valid script tags.
- Refer to the "details" key in the response to find out the exact error and rectify it, accordingly.

- CANNOT\_UPDATE\_DELETED\_USERHTTP 400



Deleted user cannot be updated

**Resolution:** You cannot update a deleted user.

- INVALID\_REQUESTHTTP 400



Re-invite is not allowed for a confirmed user

**Resolution:** You cannot re-invite a confirmed user.

- NOT\_ALLOWEDHTTP 400



You are trying to update the name format and sort order preference for another user.

**Resolution:** You can only update the name format and sort order preference of yourself.

- EMAIL\_UPDATE\_NOT\_ALLOWEDHTTP 400



Cannot update email of a confirmed CRM User

**Resolution:** You cannot update the email of a confirmed user.

- DUPLICATE\_DATAHTTP 400



User with same email id is already in CRM Plus

**Resolution:** You are trying to specify a duplicate value for a unique field. Ensure that you specify unique and valid email IDs for all the users.

- ID\_ALREADY\_DEACTIVATEDHTTP 400



User is already deactivated

**Resolution:** The user you are trying to deactivate is already deactivated.

- INVALID\_REQUESTHTTP 400



Primary Contact cannot be deactivated

**Resolution:** You cannot deactivate a primary contact.

- ID\_ALREADY\_ACTIVEHTTP 400



User is already active

**Resolution:** The user you are trying to activate is already active.

- FEATURE\_PERMISSIONHTTP 400



Share among Subordinates Feature is not available

**Resolution:** The share among the subordinated feature is not available for your account. Contact your system administrator.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** You have not specified the unique ID of the user to be updated in your request. Specify the unique ID of the user.

- AUTHORIZATION\_FAILEDHTTP 403



- Either trial has expired or user does not have sufficient privilege to perform this action
- The current user does not have permission to update the profile and role of another user.

**Resolutions:** Contact your system administrator.

- INTERNAL\_ERRORHTTP 400



Error occurred while updating CRM Plus User in CRM Account

**Resolution:** You cannot update a CRM Plus user from your CRM account.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.users.UPDATE scope. Create a new client with valid scope. Refer to the scope section above.


#### Sample Response

``` json
Copied{
  "users": [\
    {\
      "code": "SUCCESS",\
      "details": {\
        "id": "554023000000691003"\
      },\
      "message": "User updated",\
      "status": "success"\
    }\
  ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-user.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)