
# Get Contact Roles

When multiple contacts are associated with a deal/opportunity, the contacts' details are stored in the **Contact Roles** related list.

#### Purpose

To get the list of contact roles.

#### Endpoints

[GET /Contacts/roles](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles.html)

[GET /Contacts/roles/{contact\_role\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Contacts/roles

**To get a specific contact role:**

{api-domain}/crm/{version}/Contacts/roles/{contact\_role\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.contacts.{operation\_type}

#### Possible operation types

ALL - Full access to contacts

READ - Read contacts

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/roles"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON keys

- sequence\_numberinteger



Represents the position of the contact role in the picklist in CRM UI.

- namestring



Represents the name of the contact role.

- idstring



Represents the unique ID of the contact role.


#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.contacts.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read records

**Resolution:** The user does not have permission to read records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read records

**Resolution:** The user does not have the permission to read records. Contact your system administrator.


#### Sample Response

``` json
Copied{
  "contact_roles": [\
    {\
      "sequence_number": 1,\
      "name": "Purchasing",\
      "id": "4150868000000006875"\
    },\
    {\
      "sequence_number": 2,\
      "name": "Engineering Lead",\
      "id": "4150868000000006879"\
    },\
    {\
      "sequence_number": 3,\
      "name": "Economic Decision Maker",\
      "id": "4150868000000006881"\
    },\
    {\
      "sequence_number": 4,\
      "name": "Product Management",\
      "id": "4150868000000006883"\
    }\
  ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)