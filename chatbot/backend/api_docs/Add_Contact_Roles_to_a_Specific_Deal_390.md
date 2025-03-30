
# Add Contact Roles to a Specific Deal

#### Purpose

To add contact roles to a specific deal.

#### Endpoints

[PUT /Deals/{deal\_ID}/Contact\_Roles/{contact\_id}](https://www.zoho.com/crm/developer/docs/api/v7/add-contact-roles-to-a-specific-deal.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Deals/{deal\_id}/Contact\_Roles/{contact\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.deals.{operation\_type}

**(and)**

scope=ZohoCRM.modules.contacts.{operation\_type}

#### Possible operation types

ALL - Full access to the records

WRITE - Edit records

UPDATE - Update records

#### Sample Input

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Deals/4150868000003384003/Contact_Roles/4150868000003283024"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Input JSON Keys

- Contact\_RoleJSON object, mandatory



Specify the name and ID of the contact role to be assigned. To get valid contact roles, refer to the [Get Contact Roles API](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles.html).


#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Contact_Role": {\
                "name": "Executive Sponsor",\
                "id": "3652397000000006877"\
            }\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.contacts.UPDATE (or) ZohoCRM.modules.deals.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update records

**Resolution:** The user does not have permission to update records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update records

**Resolution:** The user does not have the permission to update records. Contact your system administrator.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** Specify the API name of the contact role in your request input. Refer to [Get Contact Roles API](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles.html) to get valid contact role names.

- INVALID\_DATAHTTP 400



the related id given seems to be invalid

**Resolution:** The _{deal\_id}_ specified in the request URL is invalid. Specify a valid _{deal\_id}_. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid record IDs.

- INVALID\_DATAHTTP 400



the id given seems to be invalid

**Resolution:** The _{contact\_id}_ specified in the request URL is invalid. Specify a valid _{contact\_id}_. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid record IDs.

- INVALID\_DATAHTTP 400



invalid data

**Resolution:** The API name of the contact role specified in the request input is invalid. Specify a valid contact role API name. To retrieve the same through API, refer to [Get Contact Roles API](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles.html).


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4150868000003283024"\
            },\
            "message": "relation updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/add-contact-roles-to-a-specific-deal.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)