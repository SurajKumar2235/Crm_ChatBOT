
# Convert Lead

#### Purpose

To convert a lead into a contact or an account. Use the [Lead Conversion Options API](https://www.zoho.com/crm/developer/docs/api/v7/lead-conversion-options.html) to get the records that have matching data with the lead you want to convert in Contacts, Accounts, and Deals before converting a lead. This enables you to convert a lead and associate it with the relevant records instead of creating new ones with the same data.

#### Endpoints

[POST /Leads/{record\_id}/actions/convert](https://www.zoho.com/crm/developer/docs/api/v7/convert-lead.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Leads/{record\_id}/actions/convert

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.leads.CREATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3652397000007566544/actions/convert"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@convertlead.json"
-X POST
```

In the request, "@convertlead.json" contains the sample input.

### Order of preference for mapping with Contacts and Accounts

- **No unique fields in the Leads module** -
1. The email ID of the lead given in the input is checked against the email IDs in the Contacts module.
2. The Company of the lead is checked against the account names in the Accounts module.
3. The lead's name is checked against the Contacts' names in the Contacts module.
- **Presence of unique fields** \- Order of preference is Contacts module and then Accounts module based on field mapping and layout mapping. If there is no unique field in the Contacts module, but there is a unique field in the Accounts module, then the order of preference will be Accounts and then Contacts.
1. Contacts - Unique field 1, unique field 2, or email(if email is unique).
2. Accounts - Unique field 1 or unique field 2.

#### Input JSON Keys

- overwriteboolean, optional



Represents whether you want to overwrite the account name in the contact in a case where the contact is already associated with an account and the account name and company in the lead mismatch.

- notify\_lead\_ownerboolean, optional



Specify whether the lead owner must get notified about the lead conversion via email.

**true:** The lead owner gets notified about the conversion via email.

**false:** The lead owner does not get notified about the conversion via email. The default value is **false**.

- notify\_new\_entity\_ownerboolean, optional



Specify whether the user to whom the contact/account is assigned to must get notified about the lead conversion via email.

**true:** The user gets notified about the conversion via email.

**false:** The user does not get notified about the conversion via email. The default value is **false**.

- move\_attachments\_toJSON object, optional



Represents the API name of either the Contacts, Deals or Accounts module you want to move the attachments of the lead to.

- AccountsJSON object, optional



Use this key to associate an account with the lead being converted. Pass the unique and valid account ID.

- ContactsJSON object, optional



Use this key to associate a contact with the lead being converted. Pass the unique and valid contact ID.

- assign\_toJSON object, optional



Use this key to assign a record owner for the new contact and account. Pass the unique and valid user ID.

- DealsJSON object, optional



Use this key to create a deal for the newly created Account. The "Deal\_Name", "Closing\_Date", "Pipeline", and "Stage" are default mandatory keys to be passed in the JSON object.

The "Contact\_Role" key lets you assign a role to the contact that you have associated on conversion. Make a [GET Contact Roles](https://www.zoho.com/crm/developer/docs/api/v7/get-contact-roles.html) API call and pass the unique contact role ID.

- carry\_over\_tagsJSON object, optional



Use this key to carry over tags of the lead to contact, account, and deal. Refer to sample input for format.


**Note**

- Use the [Lead Conversion Options API](https://www.zoho.com/crm/developer/docs/api/v7/lead-conversion-options.html) to get the records that have matching data with the lead you want to convert in Contacts, Accounts, and Deals. This enables you to convert a lead and associate it with the relevant records instead of creating new ones with the same data.
- In the input, the **assign\_to** value can only be the **User ID**.
- If the lead is not converted to a deal, it will still get associated to the contact and account you specified in the input.
- If both **account ID** and **overwrite** values are **true**, then the account name will be replaced by the company name, while associating it with the existing account. However, the data of that account will remain the same.
- If **overwrite** value is set to **false**, then association will only happen. However, if you set the overwrite value without account ID, the working of this method remains unchanged.
- You must use only Field API names in the input. You can obtain the field API names from
  - [Fields metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) (the value for the key “api\_name” for every field), or go to **Setup** \> **Developer Hub** \> **APIs and SDKs** \> **API Names** \> **{{Module}}**. Choose “Fields” from the “Filter By” drop-down.

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "overwrite": true,\
            "notify_lead_owner": true,\
            "notify_new_entity_owner": true,\
            "move_attachments_to": {\
                "api_name": "Deals"\
            },\
            "Accounts": {\
                "id": "3652397000000624046"\
            },\
            "Contacts": {\
                "id": "3652397000000624640"\
            },\
            "Deals": {\
                "Deal_Name": "test",\
                "Closing_Date": "2020-10-20",\
                "Stage": "Negotiation/Review",\
                "Amount": 20000000,\
                "Pipeline": "Standard (Standard)",\
                "Contact_Role": "5545974000000006873"\
            },\
            "carry_over_tags": {\
                "Contacts": [\
                    "tag1",\
                    "tag2"\
                ],\
                "Accounts": [\
                    "tag1"\
                ],\
                "Deals": [\
                    "tag1"\
                ]\
            }\
        }\
    ]
}
```

#### Possible Errors

- DUPLICATE\_DATAHTTP 400



Duplicate data

**Resolution:** There already exists a contact with the unique field details present in lead. Ensure you specify unique values for unique fields (both system and user-defined). To know which fields are unique, refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html).

- ID\_ALREADY\_CONVERTEDHTTP 400



id already converted

**Resolution:** The lead you are trying to convert has already been converted. Specify a valid lead ID. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid lead IDs.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** You do not have the right scope to access this API. Create a new client with the valid scope mentioned in the "Scope" section.

- NO\_PERMISSIONHTTP 403



Permission denied to create

**Resolution:** The user does not have permission to create records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to create records

**Resolution:** The user does not have the permission to create records. Contact your system administrator.

- INVALID\_DATAHTTP 400



invalid data

**Resolution:** The input specified is incorrect. Specify valid input.

- RECORD\_LOCKEDHTTP 400



cannot convert record that is not approved yet

**Resolution:** Please wait until the Zia image or the merge duplicates process is complete and try again.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.

- NOT\_APPROVEDHTTP 400



cannot convert record that is not approved yet

**Resolution:**



- **Case 1:** If the record is in the rejected state due to Zia image validation, either upload a new image (or) delete the failed image and, resubmit the record to Zia image validation.
- **Case 2:** If the record is in Zia record approval, the system will not allow you to update the images of the record until the reviewer approves or rejects the record.

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Contacts": {\
                    "name": "Paul Daly",\
                    "id": "3652397000007603014"\
                },\
                "Deals": {\
                    "name": "test",\
                    "id": "3652397000007603019"\
                },\
                "Accounts": {\
                    "name": "Zylker",\
                    "id": "3652397000000624046"\
                }\
            },\
            "message": "The record has been converted successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/convert-lead.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)