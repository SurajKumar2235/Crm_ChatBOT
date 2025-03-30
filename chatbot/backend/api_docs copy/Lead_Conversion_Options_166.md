
# Lead Conversion Options

#### Purpose

To get the lead's conversion options before converting it to a Deal, Account or a Contact. This API fetches the matching records from Accounts, Contacts, and Deals. This allows you to map the data correctly and avoid any duplicity while converting a lead.

#### Endpoints

[GET /Leads/{record\_id}\_\_conversion\_options](https://www.zoho.com/crm/developer/docs/api/v7/lead-conversion-options.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Leads/{record\_id}/\_\_conversion\_options

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.Leads.{operation\_type}

#### Possible operation types

ALL - Full access to the record

READ - Get records from the module

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3652397000007526001/__conversion_options"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X GET
```

#### Response JSON Keys

- module\_preferenceJSON object



The API name and ID of the module that matches closest to the data in the lead.

- ContactsJSON Array



Represents the details of the contact that matches with the lead.

- preference\_field\_matched\_valueJSON object



Represents the details such as the field and the value of the Contact and Account that matches with the lead.

- modules\_with\_multiple\_layoutsJSON array



Represents the API name and ID of the module that matches with the lead and contains multiple layouts.


#### Possible Errors

- NO\_CONTENTHTTP 204



No matching account or contact is found and no custom layout is present in account, contact and deal, or Accounts, Deals, or Contacts are removed from "Organize modules".

- INVALID\_DATAHTTP 400



The given ID seems to be invalid.

**Resolution:** Specify a valid Lead ID.

- NOT\_APPROVEDHTTP 400



The record is not approved

**Resolution:** The lead record is under the approval process pending approval.

- RECORD\_LOCKEDHTTP 400



The record under merge is locked

**Resolution:** The record is under merge operation. Wait for the merge operation to complete.


#### Sample Response

``` json
Copied{
    "__conversion_options": {
        "module_preference": {
            "api_name": "Accounts",
            "id": "3652397000000002177"
        },
        "Contacts": null,
        "preference_field_matched_value": {
            "Contacts": null,
            "Accounts": [\
                {\
                    "field": {\
                        "api_name": "Account_Name",\
                        "id": "3652397000000002425"\
                    },\
                    "matched_lead_value": "Zylker"\
                }\
            ]
        },
        "Accounts": [\
            {\
                "Layout": {\
                    "name": "Standard",\
                    "id": "3652397000000091029"\
                },\
                "Phone": "555555555",\
                "Account_Type": "Analyst",\
                "Website": null,\
                "Account_Name": "Zylker",\
                "$editable": true,\
                "id": "3652397000000624046"\
            }\
        ],
        "modules_with_multiple_layouts": [\
            {\
                "api_name": "Accounts",\
                "id": "3652397000000002177"\
            }\
        ]
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/lead-conversion-options.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)