

# Users Count

#### Purpose

To fetch the total number of users in your org.

[GET /users/actions/count](https://www.zoho.com/crm/developer/docs/api/v7/users-count.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/users/actions/count

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

Scope = ZohoCRM.Users.READ

OR

Scope = ZohoCRM.Users.ALL

##### Parameters

- typestring, optional



Specify the **type** of the users whose count you want to retrieve.



- **AllUsers** \- To list the count of all users in your organization.
- **ActiveUsers** \- To get the count of all the Active Users.
- **DeactiveUsers** \- To get the count of all the users who were deactivated.
- **ConfirmedUsers** \- To get the count of all the confirmed users.
- **NotConfirmedUsers** \- To get the count of all the non-confirmed users.
- **DeletedUsers** \- To get the count of deleted users.
- **ActiveConfirmedUsers** \- To get the count of active users who are also confirmed.
- **AdminUsers** \- To get the count of admin users.
- **ActiveConfirmedAdmins** \- To get the count of active users with the administrative privileges and are also confirmed.
- **CurrentUser** \- To get count of the current CRM user. This will always return **1**.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/users/actions/count"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the scope required to use this API.

**Resolution:** Use the correct scope and generate the grant and access tokens.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** Use the correct URL pattern to make API calls.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** The HTTP method for this request should be GET.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Use proper authentication and make the API call.


#### Sample Response

``` json
Copied{
    "count": 11
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/users-count.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)