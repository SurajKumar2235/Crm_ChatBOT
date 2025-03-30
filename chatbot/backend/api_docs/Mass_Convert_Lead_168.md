
# Mass Convert Lead

#### Purpose

To convert a maximum of up to 50 leads in a single API call. You can convert a lead with or without creating a deal through this API.

#### Endpoints

[POST /Leads/actions/mass\_convert](https://www.zoho.com/crm/developer/docs/api/v7/mass-convert-lead.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Leads/actions/mass\_convert

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.mass\_convert.leads.CREATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/actions/mass_convert"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@convertlead.json"
-X POST
```

#### Input JSON

- idsJSON array, mandatory



The record IDs of the leads you want to convert. Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the record IDs. Note that you can give a maximum of up to 50 records IDs in this array.

- DealsJSON object, mandatory when you want to create a deal



Must contain the mandatory keys "Deal\_Name", "Stage", "Closing\_Date", and "Pipeline"(if enabled), besides the other mandatory fields configured for the Deals module. Note that if there are layouts other than Standard, the custom-defined mandatory fields will not be processed while converting the lead.

- assign\_toJSON object, mandatory



The name and ID of the user you want to assign the converted lead record to. Use the [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to get these details.

- portal\_user\_typeJSON object, optional



The name and ID of the portal for the Contacts module.

- related\_modulesJSON array, optional



The API name and ID of the modules such as Tasks, Meetings, or Calls. If the lead has one or all of these related records, the owner of these records will be changed to the user given in the "assign\_to" key.

Use the [Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to get the ID of the module.

- carry\_over\_tagsJSON array, optional



The name and ID of the module you want to associate the tags to while converting the lead. For example, if you give contacts in this array, the tags of the lead will be carried over to the contact that the lead is converted to. Use the [Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to get the ID of the module. Note that you can carry over tags to Contacts, Deals, **and** Accounts.

- move\_attachments\_toJSON object, optional



The name and ID of the module you want to move the attachments of the lead to after converting. Use the [Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to get the ID of the module. Note that you can move the attachments to either Contacts, Deals, **or** Accounts.


#### Sample Input

``` json
Copied{
    "ids": [\
        "3652397000009850001",\
        "3652397000009851001"\
    ],
    "Deals": {
        "Amount": 10000,
        "Deal_Name": "test7000",
        "Closing_Date": "2022-12-20",
        "Pipeline": "Standard(Standard)",
        "Stage": "Needs Analysis"

    },
    "carry_over_tags": [\
            {\
                "id": "3652397000000002179",\
                "api_name": "Contacts"\
            }\
        ],
        "related_modules": [\
            {\
                "api_name": "Tasks",\
                "id": "3652397000000002193"\
            },\
            {\
                "api_name": "Events",\
                "id": "3652397000000002195"\
            }\
        ],
        "assign_to": {
            "id": "3652397000000281001"
        },
        "move_attachments_to": {
            "api_name": "Contacts",
            "id": "3652397000000002179"
        }
    }
}
```

Show full

Show less

#### Response JSON

- code



Represents the records you specified that have been scheduled for conversion.  The possible value is **SCHEDULED**.

- details



Gives you the ID of the mass convert job. Use this ID in the [Mass Convert Status API](https://www.zoho.com/crm/developer/docs/api/v7/mass-convert-status.html).


#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified either the records IDs or one or more mandatory keys in "Deals", or both.

**Resolution:** Refer to the "details" key in the response to know the missing values.

- INVALID\_DATAHTTP 400



**Reasons**:



- The record ID(s)is invalid.
- The portal user type in invalid.

**Resolutions:**

- Provide valid IDs of the leads to be converted. Refer to the "details" key in the response for details about the errors.

- LIMIT\_EXCEEDEDHTTP 400



you are trying to convert more than 50 leads.

**Resolution:** You can only convert a maximum of 50 leads through this API.

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



The API name and the ID in the "related\_modules" key do not belong to each other.

**Resolution:** Specify the right API name and ID of the related module.

- INVALID\_REQUEST\_METHODHTTP 400



The HTTP request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to the endpoints section.

- NO\_PERMISSIONHTTP 403



**Reasons:**



- You do not have permission to the module.
- You do not have permission to convert leads.

**Resolution:** Contact your system administrator to obtain sufficient permissions.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in server. Contact the support team.


#### Sample Response

``` json
Copied{
    "code": "SCHEDULED",
    "details": {
        "job_id": "3652397000009835020"
    },
    "message": "Mass Convert scheduled successfully",
    "status": "success"
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/mass-convert-lead.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)