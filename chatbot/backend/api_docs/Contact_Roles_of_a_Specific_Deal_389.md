# Get Contact Roles of a Specific Deal

#### Purpose

To get the details of contact roles associated with a specific deal

#### Endpoints

[GET /Deals/{deal\_id}/Contact\_Roles](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles-of-a-specific-deal.html)

[GET /Deals/{deal\_id}/Contact\_Roles/{contact\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles-of-a-specific-deal.html)

[GET /Deals/{deal\_id}/Contact\_Roles?ids={contact\_id1,contact\_id2,..}](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles-of-a-specific-deal.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Deals/{deal\_id}/Contact\_Roles

**To get a specific contact role:**

{api-domain}/crm/{version}/Deals/{deal\_id}/Contact\_Roles/{contact\_id}

**To get multiple contact roles:**

{api-domain}/crm/{version}/Deals/{deal\_id}/Contact\_Roles?ids={contact\_id1,contact\_id2,...}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.contacts.{operation\_type}

**(and)**

scope=ZohoCRM.modules.deals.{operation\_type}

#### Possible operation types

ALL - Full access to records

READ - Read records

#### Parameters

- idsstring, optional



Specify comma-separated unique IDs of the contact roles.

- fieldsstring, mandatory



Specify the API names of the fields whose details you want to receive in the response.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Deals/4876876000001288017/Contact_Roles?fields=Email,Department"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.03xxxxxxxxxxxxxxxxxa5317.dxxxxxxxxxxxxxxxxxfa"
```

#### Response JSON keys

- Contact\_RoleJSON object



Represents the name and ID of the contact role.

- idstring



Represents the unique ID of the contact.


#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.contacts.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read records

**Resolution:** The user does not have permission to read records in Deals or Contacts module. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read records

**Resolution:** The user does not have the permission to read records. Contact your system administrator.

- INVALID\_DATAHTTP 400



the related id given seems to be invalid

**Resolution:** Specify a valid _{deal\_id}_. To retrieve valid record IDs, refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html).

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** Specify the mandatory parameter **fields**.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Department": "Engineering",\
            "Contact_Role": {\
                "name": "Economic Decision Maker",\
                "id": "3652397000000006881"\
            },\
            "Email": "krismarrier@gmail.com",\
            "id": "4876876000000333191"\
        },\
        {\
            "Department": "Purchasing",\
            "Contact_Role": {\
                "name": "Purchasing",\
                "id": "3652397000000006875"\
            },\
            "Email": "brian@villa.com",\
            "id": "4876876000001236004"\
        },\
        {\
            "Department": null,\
            "Contact_Role": {\
                "name": "Product Management",\
                "id": "4876876000001106883"\
            },\
            "Email": "tom.hanks@mkita.com",\
            "id": "4876876000001288001"\
        }\
    ],
    "info": {
        "per_page": 200,
        "next_page_token": null,
        "count": 3,
        "page": 1,
        "previous_page_token": null,
        "page_token_expiry": null,
        "more_records": false
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles-of-a-specific-deal.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)